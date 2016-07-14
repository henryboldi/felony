import * as types from '../constants/AliasesConstants'
import db from '../config/database.js'
import { generateKey } from '../../utils/pgp'

export function addAlias(alias) {
  return async function dispatchAction(dispatch) {
    try {
      const generatedKey = await generateKey()
      const insertedAlias = await db('aliases').insert(alias)
      return dispatch({ type: types.ADD_KEY, alias: insertedAlias })
    } catch (err) {
      return console.log(err)
    }
  }
}

export function setAliases(aliases) {
  return { type: types.SET_KEYCHAIN, aliases }
}

export function fetchAliases() {
  return async function dispatchAction(dispatch) {
    try {
      const aliases = await db('aliases').value()
      return dispatch(setAliases(aliases))
    } catch (err) {
      return console.log(err)
    }
  }
}
