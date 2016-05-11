'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import CopyToClipboard from 'react-copy-to-clipboard'

import colors from '../../assets/styles/variables/colors'

class Output extends Component {

  state = { copied: false }

  classes() {
    return {
      'default': {
        wrap: {
          position: 'fixed',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          zIndex: '9999999',
          flexDirection: 'column',
          background: colors.bgDark,
          display: 'flex',
          transform: 'translateY(100%)',
          opacity: '0',
          transition: 'all 100ms linear',
        },
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
        cursor: 'pointer',
      },
      cancel: {
        color: '#999',
      },
      confirm: {
        color: colors.primary,
      },
      'isShowingOutput': {
        wrap: {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
    }
  }

  handleCancel = () => {
    this.props.setOutput('')
    this.props.toggleComposer()
  }

  handleKeyDown = (e) => {
    (e.keyCode === 27 && this.props.isShowingOutput) && this.handleCancel()
  }

  render() {

    return (
      <div is="wrap" ref="wrap">
        <h1>{ this.props.composerType } successful</h1>
        { this.props.output }

        <CopyToClipboard
          text={ this.props.output }
          onCopy={() => this.setState({ copied: true })}
        >
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>
        {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
        <div is="actions">
          <a is="link confirm" onClick={ this.handleCancel }>Close</a>
        </div>
      </div>
    )
  }
}

export default ReactCSS(Output)
