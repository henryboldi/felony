import * as types from '../constants/KeychainConstants'
import db from '../config/database.js'

export function addKey(key) {
  return async function dispatchAction(dispatch) {
    try {
      const insertedKey = await db('keychain').insert(key)
      return dispatch({ type: types.ADD_KEY, key: insertedKey })
    } catch (err) {
      return console.log(err)
    }
  }
}

export function setKeychain(keychain) {
  return { type: types.SET_KEYCHAIN, keychain }
}

export function fetchKeychain() {
  return async function dispatchAction(dispatch) {
    try {
      const keychain = await db('keychain').value()
      return dispatch(setKeychain(keychain))
    } catch (err) {
      return console.log(err)
    }
  }
}
