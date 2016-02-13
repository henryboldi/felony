'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../styles/variables/colors'
import { spacing, sizing } from '../../styles/variables/utils'

class FloatingButtonItemLabel extends Component {
  classes() {
    return {
      'default': {

      },
    }
  }

  render() {
    return (
        <div>
            <span>{ this.props.label }</span>
        </div>
    )
  }
}

export default ReactCSS(FloatingButtonItemLabel)
