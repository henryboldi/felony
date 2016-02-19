import { ADD_KEY, SELECT_KEY } from '../constants/ActionTypes'
import { OrderedMap, Record, List } from 'immutable'
import uuid from 'uuid'

const KeyRecord = Record({ name: '', id: '', completed: false })

const initialState = OrderedMap({
  store: OrderedMap({ '0': new KeyRecord({ id: '0', name: 'Henry' }) }),
  active: OrderedMap({}),
})

const keyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_KEY:

      // TODO: set these to be UUIDs or something
      const id = uuid.v4()
      return state.setIn(['store', id], new KeyRecord({ name: action.key, id: id }))
    case SELECT_KEY:
      if (state.hasIn(['active', action.id]) && state.getIn(['active', action.id]) === true) {
        return state.setIn(['active', action.id], false)
      } else {
        return state.setIn(['active', action.id], true)
      }

    default:
      return state
  }
}

export default keyReducer
