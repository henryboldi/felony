import { TOGGLE_COMPOSER, SHOW_COMPOSER_WITH_TYPE, SELECT_KEY } from '../constants/UIConstants'
import { OrderedMap } from 'immutable'

const initialState = OrderedMap({
  isShowingComposer: false,
  composerType: '',
  selectedBuddies: OrderedMap({}),
})

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COMPOSER:
      return state.set('isShowingComposer', !state.get('isShowingComposer'))
    case SHOW_COMPOSER_WITH_TYPE:
      return state.set('composerType', action.data).set('isShowingComposer', true)
    case SELECT_KEY:
      if (state.hasIn(['selectedBuddies', action.id]) && state.getIn(['selectedBuddies', action.id]) === true) {
        return state.setIn(['selectedBuddies', action.id], false)
      } else {
        return state.setIn(['selectedBuddies', action.id], true)
      }

    default:
      return state
  }
}

export default uiReducer
