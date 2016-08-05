import React from 'react'
const DevTools = require('./DevTools')

const App = (props) => {
  return (
    <div>
      { props.children }
      {
        (() => {
          if (process.env.NODE_ENV !== 'production') {
            <DevTools />
          }
        })()
      }
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
}

export default App
