'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import dynamics from 'dynamics.js'

import colors from '../../styles/variables/colors'

class Compose extends Component {
  classes() {
    return {
      'default': {
        wrap: {
          position: 'fixed',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          zIndex: '13',
          flexDirection: 'column',
          background: colors.bgDark,
          display: 'flex',
          transform: 'translateY(100%)',
          opacity: '0',
          transition: 'all 100ms linear',
        },
        text: {
          flex: '1',
          position: 'relative',
        },
        textarea: {
          Absolute: '23px 10px 10px 10px',
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
          cursor: 'pointer',
        },
        cancel: {
          color: '#999',
        },
        confirm: {
          color: colors.primary,
        },
      },
      'expanded': {
        wrap: {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (!this.props.expanded && nextProps.expanded) {
  //     dynamics.animate(this.refs.wrap, {
  //       translateY: 0,
  //       opacity: 1,
  //     }, {
  //       type: dynamics.spring,
  //       duration: 100,
  //       frequency: 110,
  //       friction: 400,
  //     })
  //   }
  // }

  handleCancel = () => {
    this.props.handleToggleCompose()
  }

  handleKeyDown = (e) => {
    (e.keyCode === 27 && this.props.expanded) && this.handleCancel()
  }

  handleEncrypt = () => {
    const text = this.refs.textarea.value
    if (text) {
      console.log('ENCRYPTING')
    } else {
      console.log('Please Write A Message')
    }
  }

  getProps = () => {
    return {
      'encrypt': {
        acceptLabel: 'Encrypt',
        onAccept: this.handleEncrypt,
        placeholder: 'Write a Message',
      },
      'decrypt': {
        acceptLabel: 'Decrypt',
        onAccept: this.handleEncrypt,
        placeholder: 'Message to Decrypt',
      },
      'sign': {
        acceptLabel: 'Sign',
        onAccept: this.handleEncrypt,
        placeholder: 'Message to Sign',
      },
      'verify': {
        acceptLabel: 'Verify',
        onAccept: this.handleEncrypt,
        placeholder: 'Message to Verify',
      },
    }[this.props.type] || {}
  }

  render() {
    const props = this.getProps()

    return (
      <div is="wrap" ref="wrap">
        <div is="text">
          <textarea is="textarea" ref="textarea" placeholder={ props.placeholder } onKeyDown={ this.handleKeyDown } />
        </div>
        <div is="actions">
          <a is="link cancel" onClick={ this.handleCancel }>Cancel</a>
          <a is="link confirm" onClick={ props.onAccept }>{ props.acceptLabel }</a>
        </div>
      </div>
    )
  }
}

export default ReactCSS(Compose)
