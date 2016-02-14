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
          color: '#333',
        },
        actions: {
          marginTop: '-10px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
      },
      'actions-false': {
        actions: {
          display: 'none',
        },
      },
    }
  }

  handleClick = () => {
    this.props.onCancel && this.props.onCancel()
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 27) { // escape key
      this.handleClick()
    }
  }

  render() {
    return (
      <div is="wrap">
        <div is="text">
          <textarea is="textarea" placeholder="Write a Message" onKeyDown={ this.handleKeyDown } />
        </div>
        <div is="actions">
          <a href="#" onClick={ this.handleClick }>Cancel</a>
          <a href="#">Encrypt</a>
        </div>
      </div>
    )
  }
}

export default ReactCSS(FullScreenTextArea)
