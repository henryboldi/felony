import { combineReducers } from 'redux'
import ui from './ui'
import keys from './keys'

const rootReducer = combineReducers({
  ui,
  keys,
})

export default rootReducer
