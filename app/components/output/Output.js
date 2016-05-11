'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../assets/styles/variables/colors'

class Output extends Component {
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
        <div is="actions">
          <a is="link confirm" onClick={ this.handleCancel }>Close</a>
        </div>
      </div>
    )
  }
}

export default ReactCSS(Output)
