var openpgp = require('openpgp')
openpgp.initWorker({ path: '../node_modules/openpgp/dist/openpgp.worker.min.js' })
openpgp.config.aead_protect = true
openpgp.config.use_native = true

import keytar from 'keytar'
import fetch from 'isomorphic-fetch'

export function getPublicKeysFromKeychain(keychain) {
  return keychain.map(key => key.publicKeyArmored)
}

function applyFelonyBranding(openpgpBrandedKey) {
  let output
  output = openpgpBrandedKey.replace(/Version: OpenPGP\.js [^<]\d\.\d\.\d/g, 'Version: 🔑 Felony (PGP made easy) v0.0.1')
  output = output.replace('Comment: http://openpgpjs.org', 'Comment: 👀 How dafuq do I use this? --> http://felony.io 😉')
  return output
}

function massagePGP(string) {
  return string.replace('\n', '\r\n')
               .replace('===', '==\r\n=')
}

function getNameString(key) {
  const userStr = key.users[0].userId.userid
  const email = userStr.substring(userStr.lastIndexOf('<') + 1, userStr.lastIndexOf('>'))
  const name = userStr.substring(0, userStr.lastIndexOf(' '))
  return `${name} <${email}>`
}

const decryptPrivateKey = async function (privateKey, passphrase) {
  const unlocked = await openpgp.decryptKey({
      privateKey,
      passphrase,
    })
  const decryptedKey = unlocked.key
  return decryptedKey
}

async function getPrivateKeyPassphrase(privateKey) {
  const nameString = getNameString(privateKey)
  const passphrase = keytar.getPassword('felony', nameString)
  return passphrase
}

export async function generateKey({ name, email='' },  passphrase) {

  const key = await openpgp.generateKey({
    userIds: [{ name, email }], // multiple user IDs
    numBits: 4096,                                            // RSA key size 4096
    passphrase,        // protects the private key
  })

  return {
    name,
    email,
    privateKeyArmored: applyFelonyBranding(key.privateKeyArmored),
    publicKeyArmored: applyFelonyBranding(key.publicKeyArmored),
  }
}

export async function readArmored(armoredKey) {
  const massagedKey = massagePGP(armoredKey)

  const key = await openpgp.key.readArmored(massagedKey)
  const userStr = key.keys[0].users[0].userId.userid

  const email = userStr.substring(userStr.lastIndexOf('<') + 1, userStr.lastIndexOf('>'))
  const name = userStr.substring(0, userStr.lastIndexOf(' '))

  return {
    name,
    email,
    publicKeyArmored: massagedKey,
  }
}

export async function encrypt(message, selectedKeys, privateKeyArmored) {
  const publicKeysArmored = getPublicKeysFromKeychain(selectedKeys)

  let publicKeys = []
  for (let key of publicKeysArmored) {
    publicKeys.push(openpgp.key.readArmored(key).keys[0])
  }

  let privateKey = openpgp.key.readArmored(privateKeyArmored).keys[0]
  const passphrase = getPrivateKeyPassphrase(privateKey)
  privateKey.decrypt(passphrase)

  const options = {
    data: message,                             // input as String (or Uint8Array)
    publicKeys: publicKeys,  // for encryption
    privateKeys: [privateKey], // for signing (optional)
  }

  const ciphertext = await openpgp.encrypt(options)
  const encryptedMessage = ciphertext.data

  return applyFelonyBranding(encryptedMessage)
}

export async function decrypt(encryptedMessage, privateKeyArmored) {
  const encryptedMessageMassaged = massagePGP(encryptedMessage)

  let privateKey = openpgp.key.readArmored(privateKeyArmored).keys[0]
  const passphrase = getPrivateKeyPassphrase(privateKey)
  privateKey.decrypt(passphrase)

  // const decryptedKey = await decryptPrivateKey(privateKey, 'test')

  const options = {
      message: openpgp.message.readArmored(encryptedMessageMassaged),     // parse armored message
      privateKey, // for decryption
    }
  const plaintext = await openpgp.decrypt(options)

  return plaintext.data
}

export async function sign(message, privateKeyArmored) {
  const privateKey = openpgp.key.readArmored(privateKeyArmored).keys[0]
  const passphrase = await getPrivateKeyPassphrase(privateKey)
  const decryptedKey = await decryptPrivateKey(privateKey, passphrase)

  const options = {
    data: message,     // parse armored message
    //publicKeys: openpgp.key.readArmored(pubkey).keys,    // for verification (optional)
    privateKeys: [decryptedKey], // for decryption
  }

  const signed = await openpgp.sign(options)

  return applyFelonyBranding(signed.data)
}

export async function verify(signedMessage, keychain) {

  const signedMessageMassaged = massagePGP(signedMessage)
  let options = {
    message: openpgp.cleartext.readArmored(signedMessageMassaged),
  }
  let match = false
  for (let key of keychain) {
    options.publicKeys = openpgp.key.readArmored(key.publicKeyArmored).keys
    const verified = await openpgp.verify(options)
    if (verified.signatures[0].valid === true) {
      match = key
    }
  }

  return match
}
