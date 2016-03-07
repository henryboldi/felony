import { combineReducers } from 'redux'
import uiReducer from './uiReducer'
import buddiesReducer from './buddiesReducer'

const rootReducer = combineReducers({
  uiReducer,
  buddiesReducer,
})

export default rootReducer
