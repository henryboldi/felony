import { TOGGLE_ENCRYPT_COMPOSE } from '../constants/ActionTypes'
import { OrderedMap } from 'immutable'

const initialState = OrderedMap({ expandedEncryptCompose: false })

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ENCRYPT_COMPOSE:
      return state.set('expandedEncryptCompose', !state.get('expandedEncryptCompose'))
    default:
      return state
  }
}

export default appReducer
