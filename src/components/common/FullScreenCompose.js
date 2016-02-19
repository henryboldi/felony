'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../styles/variables/colors'

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
          display: 'flex',
          flexDirection: 'column',
          background: colors.bgDark,
        },
        text: {
          flex: '1',
          position: 'relative',
        },
        textarea: {
          Absolute: '10px 10px 10px 10px',
          border: 'none',
          outline: 'none',
          width: '94%',
          boxSizing: 'border-box',
          padding: '10px 3%',
          color: '#333',
          borderRadius: '2px',
          fontSize: '14px',
          fontFamily: 'Andale Mono',
        },
        actions: {
          marginTop: '-10px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 10px',
        },
        link: {
          textDecoration: 'none',
        },
        cancel: {
          color: '#999',
        },
        confirm: {
          color: colors.primary,
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
          <a is="link cancel" href="#" onClick={ this.handleClick }>Cancel</a>
          <a is="link confirm" href="#">Encrypt</a>
        </div>
      </div>
    )
  }
}

export default ReactCSS(FullScreenTextArea)
