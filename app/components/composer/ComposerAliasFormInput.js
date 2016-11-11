import React, { Component } from 'react'
import ReactCSS from 'reactcss'

class ComposerAliasFormInput extends Component {
  state = { focus: false }

  classes() { // eslint-disable-line
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
        error: {
          border: 'solid 2px #FF1122',
        },
      },
      'hover': {
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
        is={ !this.props.error ? 'input' : 'input error' }
        placeholder={ this.props.placeholder }
        onKeyDown={ this.props.onKeyDown }
        onFocus={ () => { this.setState({ focus: true }) } }
        onBlur={ () => { this.setState({ focus: false }) } }
      />
    )
  }
}

export default ReactCSS.Hover(ReactCSS(ComposerAliasFormInput))
