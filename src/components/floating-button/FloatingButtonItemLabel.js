'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../styles/variables/colors'
import { spacing, sizing } from '../../styles/variables/utils'

class FloatingButtonItemLabel extends Component {
  classes() {
    return {
      'default': {
        wrap: {
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '0',
          bottom: '0',
          right: '0'
        },
        label: {
          backgroundColor: 'rgba(255,255,255,0.59)',
          borderRadius: '3px',
          padding: '3px',
          color: colors.bgDark,
          whiteSpace: 'nowrap',
          fontSize: '14px',
        },
      },
    }
  }

  render() {
    return (
        <div is="wrap">
            <span is="label">{ this.props.label }</span>
        </div>
    )
  }
}

export default ReactCSS(FloatingButtonItemLabel)
