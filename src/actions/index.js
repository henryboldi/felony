import * as types from '../constants/ActionTypes'

export function addKey(key) {
  return { type: types.ADD_KEY, key }
}
