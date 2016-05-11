import "babel-polyfill"
import express from 'express'
import bodyParser from 'body-parser'
import keytar from 'keytar'
let app = express()
var openpgp = require('openpgp') // use as CommonJS, AMD, ES6 module or via window.openpgp

openpgp.initWorker({ path: './node_modules/openpgp/dist/openpgp.worker.min.js' }) // set the relative web worker path

openpgp.config.aead_protect = true

app.use(bodyParser.json())

function getNameString(key) {
  const userStr = key.users[0].userId.userid
  const email = userStr.substring(userStr.lastIndexOf('<') + 1, userStr.lastIndexOf('>'))
  const name = userStr.substring(0, userStr.lastIndexOf(' '))
  return `${name} <${email}>`
}

function getPrivateKeyPassphrase(privateKey) {
  const nameString = getNameString(privateKey)
  const passphrase = keytar.getPassword('felony', nameString)
  return passphrase
}

const decryptPrivateKey = async function (privateKey, passphrase) {
  const unlocked = await openpgp.decryptKey({
      privateKey,
      passphrase,
    })
  const decryptedKey = unlocked.key
  return decryptedKey
}

app.post('/generateKey', async function (req, res) {

  const key = await openpgp.generateKey({
    userIds: [{ name: req.body.name, email: req.body.email }], // multiple user IDs
    numBits: 4096,                                            // RSA key size 4096
    passphrase: req.body.passphrase,        // protects the private key
  })

  res.send({ key })
})

app.post('/readArmored', async function (req, res) {

  const key = await openpgp.key.readArmored(req.body.armoredKey)

  res.send({ key })
})

app.post('/encrypt', async function (req, res) {

  let publicKeys = []
  for (let key of req.body.publicKeysArmored) {
    publicKeys.push(openpgp.key.readArmored(key).keys[0])
  }

  let privateKey = openpgp.key.readArmored(req.body.privateKeyArmored).keys[0]
  const passphrase = getPrivateKeyPassphrase(privateKey)
  privateKey.decrypt(passphrase)

  const options = {
    data: req.body.message,                             // input as String (or Uint8Array)
    publicKeys: publicKeys,  // for encryption
    privateKeys: [privateKey], // for signing (optional)
  }

  const ciphertext = await openpgp.encrypt(options)
  const encryptedMessage = ciphertext.data

  res.send({ encryptedMessage })

})

app.post('/decrypt', async function (req, res) {

  let privateKey = openpgp.key.readArmored(req.body.privateKeyArmored).keys[0]
  const passphrase = getPrivateKeyPassphrase(privateKey)
  privateKey.decrypt(passphrase)

  // const decryptedKey = await decryptPrivateKey(privateKey, 'test')

  const options = {
      message: openpgp.message.readArmored(req.body.encryptedMessage),     // parse armored message
      privateKey, // for decryption
    }
  const plaintext = await openpgp.decrypt(options)
  const message = plaintext.data

  res.send({ message })

})

app.post('/sign', async function (req, res) {
  try {
    const privateKey = openpgp.key.readArmored(req.body.privateKeyArmored).keys[0]
    const passphrase = getPrivateKeyPassphrase(privateKey)

    const decryptedKey = await decryptPrivateKey(privateKey, passphrase)

    const options = {
      data: req.body.message,     // parse armored message
      //publicKeys: openpgp.key.readArmored(pubkey).keys,    // for verification (optional)
      privateKeys: [decryptedKey], // for decryption
    }

    const signed = await openpgp.sign(options)
    const signedMessage = signed.data

    res.send({ signedMessage })
  } catch (err) {
    console.log(err)
  }
})

app.post('/verify', async function (req, res) {

  let options = {
    message: openpgp.cleartext.readArmored(req.body.signedMessage),
  }
  let match = false
  for (let key of req.body.keychain) {
    options.publicKeys = openpgp.key.readArmored(key.publicKeyArmored).keys
    const verified = await openpgp.verify(options)
    if (verified.signatures[0].valid === true) {
      match = key
    }
  }

  res.send({ match })
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
