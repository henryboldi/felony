'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../assets/styles/variables/colors'

class ComposerAliasFormInput extends Component {
  state = { focus: false }

  classes() {
    return {
      'default': {
        input: {
          border: 'solid 2px #CBC5C5',
          backgroundColor: 'transparent',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
          padding: '10px 3%',
          color: '#333',
          borderRadius: '5px',
          fontSize: '14px',
          fontFamily: 'Andale Mono',
          flexGrow: '1',
          transition: '200ms ease-in-out',
        },
      },
      hover: {
        input: {
          border: 'solid 2px #A7A4A4',
        },
      },
      'focus': {
        input: {
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
      <input
        type={ this.props.type }
        is="input"
        placeholder={ this.props.placeholder }
        handleKeyDown={ this.props.onKeyDown }
        onFocus={ () => { this.setState({ focus: true }) }}

        onBlur={ () => { this.setState({ focus: false }) }}

      />
    )
  }
}

export default ReactCSS.Hover(ReactCSS(ComposerAliasFormInput))
