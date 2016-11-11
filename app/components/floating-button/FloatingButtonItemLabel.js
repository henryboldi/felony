import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../assets/styles/variables/colors'

class FloatingButtonItemLabel extends Component {
  classes() { // eslint-disable-line
    return {
      'default': {
        wrap: {
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '0px',
          bottom: '0px',
          right: '0px',
        },
        label: {
          backgroundColor: '#87878A',
          borderRadius: '3px',
          padding: '4px',
          color: colors.bgDark,
          whiteSpace: 'nowrap',
          fontSize: '14px',
          boxShadow: `0px 1px 0px 0px ${ colors.bgDark }`,
          transition: 'background-color 0.2s ease-in-out',
        },
      },
      'hover': {
        label: {
          backgroundColor: '#C3C3C5',
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
