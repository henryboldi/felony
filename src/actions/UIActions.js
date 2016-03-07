import * as types from '../constants/UIConstants'

export function selectBuddy(id) {
  return { type: types.SELECT_BUDDY, id }
}

export function toggleComposer() {
  return { type: types.TOGGLE_COMPOSER }
}

export function showComposerWithType(type) {
  return { type: types.SHOW_COMPOSER_WITH_TYPE, data: type }
}

export function setOutput(output) {
  return { type: types.SET_OUTPUT, output }
}
