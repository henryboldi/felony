const openpgp = require('openpgp')
openpgp.initWorker({ path: '../node_modules/openpgp/dist/openpgp.worker.min.js' })
openpgp.config.aead_protect = true
openpgp.config.use_native = true

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

export async function generateKey({ name, email = '' }, passphrase) {
  const response = await fetch('http://127.0.0.1:3001/generateKey', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, passphrase }),
  })
  const data = await response.json()

  return {
    name,
    email,
    privateKeyArmored: applyFelonyBranding(data.key.privateKeyArmored),
    publicKeyArmored: applyFelonyBranding(data.key.publicKeyArmored),
  }
}

export async function readArmored(armoredKey) {
  const massagedKey = massagePGP(armoredKey)

  const response = await fetch('http://127.0.0.1:3001/readArmored', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ armoredKey: massagedKey }),
  })
  const data = await response.json()
  const userStr = data.key.keys[0].users[0].userId.userid

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
  const sendThis = { message, publicKeysArmored }
  if (privateKeyArmored) {
    sendThis.privateKeyArmored = privateKeyArmored
  }

  const response = await fetch('http://127.0.0.1:3001/encrypt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendThis),
  })
  const data = await response.json()

  return applyFelonyBranding(data.encryptedMessage)
}

export async function decrypt(encryptedMessage, privateKeyArmored) {
  const encryptedMessageMassaged = massagePGP(encryptedMessage)

  const response = await fetch('http://127.0.0.1:3001/decrypt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ encryptedMessage, privateKeyArmored }),
  })
  const data = await response.json()

  return data.message
}

export async function sign(message, privateKeyArmored) {
  const response = await fetch('http://127.0.0.1:3001/sign', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, privateKeyArmored }),
  })
  const data = await response.json()

  return applyFelonyBranding(data.signedMessage)
}

export async function verify(signedMessage, keychain) {

  const signedMessageMassaged = massagePGP(signedMessage)
  const response = await fetch('http://127.0.0.1:3001/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ signedMessage: signedMessageMassaged, keychain }),
  })
  const data = await response.json()

  return data.match
}
