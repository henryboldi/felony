import { TOGGLE_COMPOSE, SHOW_COMPOSE_WITH_TYPE, SELECT_KEY } from '../constants/UIConstants'
import { OrderedMap } from 'immutable'

const initialState = OrderedMap({
  expandedCompose: false,
  composeType: '',
  activeKeys: OrderedMap({}),
})

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COMPOSE:
      return state.set('expandedCompose', !state.get('expandedCompose'))
    case SHOW_COMPOSE_WITH_TYPE:
      return state.set('composeType', action.data).set('expandedCompose', true)
    case SELECT_KEY:
      if (state.hasIn(['activeKeys', action.id]) && state.getIn(['activeKeys', action.id]) === true) {
        return state.setIn(['activeKeys', action.id], false)
      } else {
        return state.setIn(['activeKeys', action.id], true)
      }

    default:
      return state
  }
}

export default uiReducer
