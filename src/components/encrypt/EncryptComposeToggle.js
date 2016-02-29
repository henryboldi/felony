'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import dynamics from 'dynamics.js'

import colors from '../../styles/variables/colors'

import { Compose } from '../common/index'

class EncryptComposeToggle extends Component {
  classes() {
    return {
      'default': {
        compose: {
          position: 'fixed',
          zIndex: '12',
          bottom: '-10px',
          right: '0',
          left: '0',
          boxShadow: '0 0 14px rgba(0,0,0,0.08), 0 0 4px rgba(0,0,0,0.10)',
          height: '55px',
          background: colors.bgDark,
          padding: '10px',
          transform: 'translateY(64px)',
        },
        textarea: {
          background: '#fff',
          height: '45px',
          lineHeight: '45px',
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
    (!this.props.expanded) && this.props.showCompose('encrypt')
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isVisible && nextProps.isVisible) {
      dynamics.animate(this.refs.compose, {
        translateY: 0,
      }, {
        type: dynamics.spring,
        duration: 700,
        friction: 400,
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

export default ReactCSS(EncryptComposeToggle)
