'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

import Felony from './components/Felony'

let store = createStore(rootReducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <Felony />
  </Provider>,
  document.getElementById('root')
)

export function __reload() {
  console.clear()
}
