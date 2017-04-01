import { OrderedMap, Record } from 'immutable'
import { ADD_KEY, SET_KEYCHAIN } from '../constants/KeychainConstants'

const KeyRecord = Record({
  id: '',
  name: '',
  email: '',
  publicKeyArmored: '',
  privateKeyArmored: '',
  avatar: '',
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
          avatar: action.key.avatar,
        }),
      )
    case SET_KEYCHAIN:
      return state.withMutations((st) => {
        for (const key of action.keychain) { // eslint-disable-line
          st.setIn(
            ['keychain', key.id],
            new KeyRecord({
              name: key.name,
              id: key.id,
              email: key.email,
              publicKeyArmored: key.publicKeyArmored,
              privateKeyArmored: key.privateKeyArmored || null,
              avatar: key.avatar,
            }),
          )
        }
      })

    default:
      return state
  }
}

export default keychainReducer
