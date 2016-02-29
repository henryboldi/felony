import { ADD_KEY, SET_KEYS } from '../constants/KeyConstants'
import { OrderedMap, Record, List } from 'immutable'

const KeyRecord = Record({ name: '', id: '', completed: false })

const initialState = OrderedMap({
  store: OrderedMap({ '0': new KeyRecord({ id: '0', name: 'Henry' }) }),
})

const keyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_KEY:
      return state.setIn(
        ['store', action.key.id],
        new KeyRecord({ name: action.key.name, id: action.key.id })
      )
    case SET_KEYS:
      return state.withMutations(function (st) {
        for (let key of action.keys) {
          st.setIn(
            ['store', key.id],
            new KeyRecord({ name: key.name, id: key.id })
          )
        }
      })

    default:
      return state
  }
}

export default keyReducer
