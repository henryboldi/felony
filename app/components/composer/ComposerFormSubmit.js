'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../assets/styles/variables/colors'

class ComposerFormSubmit extends Component {
  classes() {
    return {
      'default': {
        confirm: {
          color: '#fff',
          padding: '10px 30px',
          borderRadius: '5px',
          backgroundColor: colors.primary,
          textDecoration: 'none',
          cursor: 'pointer',
          textAlign: 'center',
          display: 'block',
          transition: '200ms ease-in-out',
        },
      },
      'hover': {
        confirm: {
          backgroundColor: '#BF1B23',
        },
      },
    }
  }

  render() {
    return (
      <a is="link confirm" onClick={ this.props.onClick }>{ this.props.value }</a>
    )
  }
}

export default ReactCSS.Hover(ReactCSS(ComposerFormSubmit))
