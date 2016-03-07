import * as types from '../constants/BuddiesConstants'
import db from '../config/database.js'

import uuid from 'uuid'

export function addBuddy(buddy) {
  return async function (dispatch) {
    try {
      const insertedBuddy = await db('buddies').insert(buddy)
      return dispatch({ type: types.ADD_BUDDY, buddy: insertedBuddy })
    } catch (err) {
      console.log(err)
    }
  }
}

export function setBuddies(buddies) {
  return { type: types.SET_BUDDIES, buddies }
}

export function fetchBuddies() {
  return async function (dispatch) {
    try {
      const buddies = await db('buddies').value()
      return dispatch(setBuddies(buddies))
    } catch (err) {

    }
  }
}
