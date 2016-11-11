import { OrderedMap } from 'immutable'
import { TOGGLE_COMPOSER, TOGGLE_GENERATING_KEY, TOGGLE_IS_COPIED,
         SHOW_COMPOSER_WITH_TYPE, SELECT_KEY, CLEAR_SELECTED_KEYS,
         SET_ACTIVE_ALIAS, SET_OUTPUT } from '../constants/UIConstants'

const initialState = OrderedMap({
  isShowingComposer: false,
  composerType: '',
  selectedKeychain: OrderedMap({}),
  activeAlias: '',
  output: '',
  isGeneratingKey: false,
  isCopied: false,
})

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COMPOSER:
      return state.set('isShowingComposer', !state.get('isShowingComposer'))
    case TOGGLE_GENERATING_KEY:
      return state.set('isGeneratingKey', !state.get('isGeneratingKey'))
    case TOGGLE_IS_COPIED:
      return state.set('isCopied', !state.get('isCopied'))
    case SHOW_COMPOSER_WITH_TYPE:
      return state.set('composerType', action.data).set('isShowingComposer', true)
    case SELECT_KEY: {
      if (state.hasIn(['selectedKeychain', action.id])
        && state.getIn(['selectedKeychain', action.id]) === true) {
        return state.setIn(['selectedKeychain', action.id], false)
      }
      return state.setIn(['selectedKeychain', action.id], true)
    }
    case CLEAR_SELECTED_KEYS:
      return state.setIn(['selectedKeychain'], OrderedMap({}))

    case SET_ACTIVE_ALIAS:
      return state.set('activeAlias', action.activeAlias)

    case SET_OUTPUT:
      return state.set('output', action.output)

    default:
      return state
  }
}

export default uiReducer
