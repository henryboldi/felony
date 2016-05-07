'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../assets/styles/variables/colors'
import { spacing, sizing } from '../../assets/styles/variables/utils'

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
          backgroundColor: 'rgba(255,255,255,0.4)',
          borderRadius: '3px',
          padding: '4px',
          color: colors.bgDark,
          whiteSpace: 'nowrap',
          fontSize: '14px',
          boxShadow: `0px 1px 0px 0px ${colors.bgDark}`,
          transition: `background-color 0.2s ease-in-out`,
        },
      },
      hover: {
        label: {
          backgroundColor: 'rgba(255,255,255,0.7)',
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
