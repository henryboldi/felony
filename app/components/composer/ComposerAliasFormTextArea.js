'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

class ComposerAliasFormTextArea extends Component {
  state = { focus: false }

  classes() {
    return {
      'default': {
        textarea: {
          border: 'solid 2px #CBC5C5',
          backgroundColor: 'transparent',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
          height: '120px',
          padding: '10px 3%',
          color: '#333',
          borderRadius: '5px',
          fontSize: '14px',
          fontFamily: 'Andale Mono',
          flexGrow: '1',
          transition: '200ms ease-in-out',
        },
        error: {
          border: 'solid 2px #FF1122',
        }
      },
      'hover': {
        textarea: {
          border: 'solid 2px #A7A4A4',
        },
      },
      'focus': {
        textarea: {
          border: 'solid 2px #A7A4A4',
        },
      },
    }
  }

  activations() {
    return {
      'focus': this.state.focus,
    }
  }

  render() {
    return (
      <textarea
        type={ this.props.type }
        is={ !this.props.error ? "textarea" : "textarea error" }
        placeholder={ this.props.placeholder }
        onKeyDown={ this.props.onKeyDown }
        onFocus={ () => { this.setState({ focus: true }) } }
        onBlur={ () => { this.setState({ focus: false }) } }
      />
    )
  }
}

export default ReactCSS.Hover(ReactCSS(ComposerAliasFormTextArea))
