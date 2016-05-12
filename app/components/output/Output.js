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
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
          zIndex: '9999999',
          flexDirection: 'column',
          background: colors.bgDark,
          display: 'flex',
          transform: 'translateY(100%)',
          opacity: '0px',
          transition: 'all 100ms linear',
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
      },
      'isShowingOutput': {
        wrap: {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.state = { copied: false }
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
        <div is="head">
          <div is="title">
            <div is="icon">
              <Icon name="check" color="#00E676" />
            </div>                                                                                                                                                                                                                                                                                                                                                                                </div>
            Success!
          </div>
          <div is="subtitle">Now share it up! #blessup</div>
        </div>
        <div is="text">
          <textarea is="textarea" ref="textarea" value={ this.props.output } />
        </div>
        <div is="actions">
          <CopyToClipboard
            text={ this.props.output }
            onCopy={() => {
              this.setState({ copied: true })
              setTimeout(() => this.handleCancel(), 700)
            } }
          >
            <a is="link confirm">{ this.state.copied ? 'Copied!' : 'Copy to Clipboard' }</a>
          </CopyToClipboard>
        </div>
      </div>
    )
  }
}

export default ReactCSS(Output)
