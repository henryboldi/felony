import { TOGGLE_COMPOSE } from '../constants/ActionTypes'
import { OrderedMap } from 'immutable'

const initialState = OrderedMap({ expandedCompose: false })

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COMPOSE:
      return state.set('expandedCompose', !state.get('expandedCompose'))
    default:
      return state
  }
}

export default uiReducer
