import { TOGGLE_COMPOSE, SHOW_COMPOSE_WITH_TYPE } from '../constants/ActionTypes'
import { OrderedMap } from 'immutable'

const initialState = OrderedMap({
  expandedCompose: false,
  composeType: '',
})

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COMPOSE:
      return state.set('expandedCompose', !state.get('expandedCompose'))
    case SHOW_COMPOSE_WITH_TYPE:
      return state.set('composeType', action.data).set('expandedCompose', true)
    default:
      return state
  }
}

export default uiReducer
