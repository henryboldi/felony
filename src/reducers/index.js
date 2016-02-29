import { combineReducers } from 'redux'
import uiReducer from './uiReducer'
import keyReducer from './keyReducer'

const rootReducer = combineReducers({
  uiReducer,
  keyReducer,
})

export default rootReducer
