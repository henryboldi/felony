import { ADD_KEY, SET_KEYCHAIN } from '../constants/KeychainConstants'
import { OrderedMap, Record, List } from 'immutable'

const KeyRecord = Record({
  id: '',
  name: '',
  email: '',
  publicKeyArmored: '',
  privateKeyArmored: '',
  completed: false,
})

const initialState = OrderedMap({
  keychain: OrderedMap({}),
})

const keychainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_KEY:
      return state.setIn(
        ['keychain', action.key.id],
        new KeyRecord({
          name: action.key.name,
          id: action.key.id,
          email: action.key.email,
          publicKeyArmored: action.key.publicKeyArmored,
          privateKeyArmored: action.key.privateKeyArmored || null,
        })
      )
    case SET_KEYCHAIN:
      return state.withMutations(function (st) {
        for (let key of action.keychain) {
          st.setIn(
            ['keychain', key.id],
            new KeyRecord({
              name: key.name,
              id: key.id,
              email: key.email,
              publicKeyArmored: key.publicKeyArmored,
              privateKeyArmored: key.privateKeyArmored || null,
            })
          )
        }
      })

    default:
      return state
  }
}

export default keychainReducer
