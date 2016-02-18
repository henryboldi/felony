'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import { FullScreenCompose } from '../common/index'

class EncryptCompose extends Component {
  classes() {
    return {
      'default': {
        compose: {
          position: 'fixed',
          bottom: '0',
          right: '0',
          left: '0',
          boxShadow: '0 0 14px rgba(0,0,0,0.08), 0 0 4px rgba(0,0,0,0.10)',
          maxHeight: '50px',
          minHeight: '50px',
          transform: 'translateY(50px)',
          transition: 'transform 100ms ease-in-out',
        },
        textarea: {
          width: '94%',
          padding: '3%',
          border: 'none',
          display: 'block',
          outline: 'none',
        },
        Compose: {
          actions: 'false',
          position: 'absolute',
        },
        cover: {
          Absolute: '0 0 0 0',
          zIndex: '11',
        },
      },
      'isVisible': {
        compose: {
          transform: 'translateY(0)',
        },
      },
      'expanded': {
        compose: {
          maxHeight: '100%',
          top: '0',
        },
        Compose: {
          actions: 'true',
        },
        cover: {
          display: 'none',
        },
      },
    }
  }

  handleClick = () => {
    (!this.props.expanded) && this.props.handleToggleEncrypt()
  }

  render() {
    return (
      <div is="compose" onClick={ this.handleClick }>
        <FullScreenCompose is="Compose" onCancel={ this.props.handleToggleEncrypt } />
      </div>
    )
  }
}

export default ReactCSS(EncryptCompose)
