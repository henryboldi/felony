import React, { Component, PropTypes } from 'react'

export default class App extends Component { // eslint-disable-line
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    return (
      <div>
        { this.props.children }
        {
          (() => { // eslint-disable-line consistent-return
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools') // eslint-disable-line global-require
              return <DevTools />
            }
          })()
        }
      </div>
    )
  }
}
