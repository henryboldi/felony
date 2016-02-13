'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

class FullScreenTextArea extends Component {
  static defaultProps = {
    position: 'fixed',
  }

  classes() {
    return {
      'default': {
        wrap: {
          position: this.props.position,
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          zIndex: '10',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          background: '#eee',
        },
        text: {
          flex: '1',
          position: 'relative',
        },
        textarea: {
          Absolute: '10px 10px 10px 10px',
          padding: '3%',
          border: 'none',
          outline: 'none',
          width: '87%',
        },
        actions: {
          marginTop: '-10px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        },
      },
      'actions-false': {
        actions: {
          display: 'none',
        },
      },
    }
  }

  render() {
    return (
      <div is="wrap">
        <div is="text">
          <textarea is="textarea" placeholder="Write a Message" onKeyDown={ this.props.handleKeyDown } />
        </div>
        <div is="actions">
          <a href="#">Encrypt</a>
        </div>
      </div>
    )
  }
}

export default ReactCSS(FullScreenTextArea)
