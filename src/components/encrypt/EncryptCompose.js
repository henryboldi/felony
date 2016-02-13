'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import { FullScreenCompose } from '../common/index'

class EncryptCompose extends Component {
  state = {
    'full-screen-compose': false,
  }

  classes() {
    return {
      'default': {
        compose: {
          position: 'fixed',
          bottom: '0',
          right: '0',
          left: '0',
          boxShadow: '0 0 14px rgba(0,0,0,0.08), 0 0 4px rgba(0,0,0,0.10)',
          height: '50px',

          // display: 'none',
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
      },
      'display': {
        compose: {
          display: 'block',
        },
      },
      'full-screen-compose': {
        Compose: {
          position: 'fixed',
          actions: 'true',
        },
      },
    }
  }

  activations() {
    return {
      'full-screen-compose': this.state['full-screen-compose'],
    }
  }

  handleExpandCompose = () => {
    this.setState({
      'full-screen-compose': true,
    })
  }

  render() {
    return (
      <div is="compose" onClick={ this.handleExpandCompose }>
        <FullScreenCompose is="Compose" />
      </div>
    )
  }
}

export default ReactCSS(EncryptCompose)
