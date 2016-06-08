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
  console.log('inside ui actions', output)
  return { type: types.SET_OUTPUT, output }
}

// export function setActiveAlias(keyId) {
//   return async function (dispatch) {
//     try {
//       delete db.object.activeAlias
//       await db.write()
//       const activeAlias = await db('activeAlias').insert(keyId)
//       return dispatch({ type: types.SET_ACTIVE_ALIAS, activeAlias })
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }
