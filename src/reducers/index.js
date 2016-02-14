import { combineReducers } from 'redux'
import app from './app'
import keys from './keys'

const rootReducer = combineReducers({
  app,
  keys,
})

export default rootReducer
