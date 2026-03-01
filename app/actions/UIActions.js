import * as types from '../constants/UIConstants'

export function selectKey(id) {
  return { type: types.SELECT_KEY, id }
}

export function toggleComposer() {
  return { type: types.TOGGLE_COMPOSER }
}

export function toggleGeneratingKey() {
  return { type: types.TOGGLE_GENERATING_KEY }
}

export function toggleIsCopied() {
  return { type: types.TOGGLE_IS_COPIED }
}

export function clearSelectedKeys() {
  return { type: types.CLEAR_SELECTED_KEYS }
}

export function showComposerWithType(type) {
  return { type: types.SHOW_COMPOSER_WITH_TYPE, data: type }
}

export function setOutput(output) {
  return { type: types.SET_OUTPUT, output }
}
