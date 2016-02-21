'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import dynamics from 'dynamics.js'

import colors from '../../styles/variables/colors'

import { FullScreenCompose } from '../common/index'

class EncryptCompose extends Component {
  classes() {
    return {
      'default': {
        compose: {
          position: 'fixed',
          bottom: '-10px',
          right: '0',
          left: '0',
          boxShadow: '0 0 14px rgba(0,0,0,0.08), 0 0 4px rgba(0,0,0,0.10)',
          height: '50px',
          background: colors.bgDark,
          padding: '10px',
          transform: 'translateY(60px)',
        },
        textarea: {
          background: '#fff',
          height: '40px',
          lineHeight: '40px',
          borderRadius: '2px',
          padding: '0 12px',
          color: '#aaa',
        },
      },
      'isVisible': {
        compose: {
          transform: 'translateY(0)',
        },
      },
    }
  }

  handleClick = () => {
    (!this.props.expanded) && this.props.handleToggleCompose()
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isVisible && nextProps.isVisible) {
      dynamics.animate(this.refs.compose, {
        translateY: 0,
      }, {
        type: dynamics.spring,
        duration: 500,
        frequency: 110,
        friction: 200,
      })
    }
  }

  render() {
    return (
      <div is="compose" ref="compose" onClick={ this.handleClick }>
        <div is="textarea">Write a Message</div>
      </div>
    )
  }
}

export default ReactCSS(EncryptCompose)
