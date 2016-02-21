import * as types from '../constants/ActionTypes'

export function addKey(key) {
  return { type: types.ADD_KEY, key }
}

export function selectKey(id) {
  return { type: types.SELECT_KEY, id }
}

export function toggleCompose() {
  return { type: types.TOGGLE_COMPOSE }
}

export function showComposeWithType(type) {
  return { type: types.SHOW_COMPOSE_WITH_TYPE, data: type }
}
