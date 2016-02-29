import openpgp from 'openpgp'

export function generateKey(name, email, passphrase) {
  return new Promise(async (resolve, reject) => {
    try {
      const key = await openpgp.generateKey({
        userIds: [{ name, email }], // multiple user IDs
        numBits: 4096, // RSA key size
        passphrase, // protects the private key
      })
      resolve(key)
    } catch (err) {
      reject(err)
    }
  })
}

export function verify(data, publicKeys) {
  return new Promise(async (resolve, reject) => {
    try {
      const message = openpgp.message.readArmored(data)
      const verified = await openpgp.verify(publicKeys, message)
      resolve(verified)
    } catch (err) {
      reject(err)
    }
  })
}

export function sign(data, privateKeys) {
  return new Promise(async (resolve, reject) => {
    try {
      const signed = await openpgp.sign(data, privateKeys, true) // armored
      resolve(signed)
    } catch (err) {
      reject(err)
    }
  })
}

export function decrypt(data, password) {
  return new Promise(async (resolve, reject) => {
    try {
      const decrypted = await openpgp.decrypt({
        message: openpgp.message.readArmored(data), // parse armored message
        password, // decrypt with password
      }).data
      resolve(decrypted)
    } catch (err) {
      reject(err)
    }
  })
}

export function encrypt(data, passwords) {
  return new Promise(async (resolve, reject) => {
    try {
      const encrypted = await openpgp.encrypt({
        data, // input as String
        passwords, // multiple passwords possible
      }).data
      resolve(encrypted)
    } catch (err) {
      reject(err)
    }
  })
}
