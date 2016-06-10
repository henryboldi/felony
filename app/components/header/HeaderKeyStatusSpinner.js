'use strict'

import React, { Component } from 'react'

import colors from '../../assets/styles/variables/colors'

class HeaderKeyStatusSpinner extends Component {

  render() {
    return (
      <div>
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    )
  }
}

export default HeaderKeyStatusSpinner
