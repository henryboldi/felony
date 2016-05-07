import { combineReducers } from 'redux'
import uiReducer from './uiReducer'
import keychainReducer from './keychainReducer'

const rootReducer = combineReducers({
  uiReducer,
  keychainReducer,
})

export default rootReducer
