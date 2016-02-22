import * as types from '../constants/KeyConstants'
import db from '../config/database.js'

import uuid from 'uuid'

export function addKey(key) {
  return async function (dispatch) {
    try {
      const insertedKey = await db('keys').insert(key)
      return dispatch({ type: types.ADD_KEY, key: insertedKey })
    } catch (err) {
      console.log(err)
    }
  }
}

export function setKeys(keys) {
  return { type: types.SET_KEYS, keys }
}

export function fetchKeys() {
  return async function (dispatch) {
    try {
      const keys = await db('keys').value()
      return dispatch(setKeys(keys))
    } catch (err) {

    }
  }
}
