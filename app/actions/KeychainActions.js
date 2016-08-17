import * as types from '../constants/KeychainConstants'
import db from '../config/database.js'
let log = require('electron-log');


export function addKey(key) {
  return async function (dispatch) {
    try {
      const insertedKey = await db('keychain').insert(key)
      return dispatch({ type: types.ADD_KEY, key: insertedKey })
    } catch (err) {
      console.log(err)
      log.warn(err);
    }
  }
}

export function setKeychain(keychain) {
  return { type: types.SET_KEYCHAIN, keychain }
}

export function fetchKeychain() {
  return async function (dispatch) {
    try {
      const keychain = await db('keychain').value()
      return dispatch(setKeychain(keychain))
    } catch (err) {
      log.warn(err);

    }
  }
}
