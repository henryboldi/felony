import React, { Component } from 'react'

class HeaderKeyStatusSpinner extends Component { // eslint-disable-line

  render() {
    return (
      <div>
        <div className="spinner">
          <div className="double-bounce1" />
          <div className="double-bounce2" />
        </div>
      </div>
    )
  }
}

export default HeaderKeyStatusSpinner
