import { ADD_KEY } from '../constants/ActionTypes'
import { OrderedMap, Record } from 'immutable'

const KeyRecord = Record({ name: '', completed: false })

const initialState = OrderedMap({ '0': new KeyRecord({ name: 'Henry' }) })

const keyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_KEY:
      const id = state.reduce((maxId, key, id) => Math.max(id, maxId), 0) + 1
      return state.set(id.toString(), new KeyRecord({ name: action.key }))
    default:
      return state
  }
}

export default keyReducer
