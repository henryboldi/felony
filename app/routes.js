import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Felony from './components/Felony'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Felony} />
  </Route>
)
