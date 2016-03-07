import { ADD_BUDDY, SET_BUDDIES } from '../constants/BuddiesConstants'
import { OrderedMap, Record, List } from 'immutable'

const BuddyRecord = Record({ name: '', id: '', completed: false })

const initialState = OrderedMap({
  buddies: OrderedMap({ '0': new BuddyRecord({ id: '0', name: 'Henry' }) }),
})

const buddiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUDDY:
      return state.setIn(
        ['buddies', action.buddy.id],
        new BuddyRecord({ name: action.buddy.name, id: action.buddy.id })
      )
    case SET_BUDDIES:
      return state.withMutations(function (st) {
        for (let buddy of action.buddies) {
          st.setIn(
            ['buddies', buddy.id],
            new BuddyRecord({ name: buddy.name, id: buddy.id })
          )
        }
      })

    default:
      return state
  }
}

export default buddiesReducer
