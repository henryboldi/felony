'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import dynamics from 'dynamics.js'
import { readArmored, encrypt, decrypt, sign, verify } from '../../utils/pgp'

import { Icon } from '../common/index'

import colors from '../../assets/styles/variables/colors'

class ComposerForm extends Component {
  classes() {
    return {
      'default': {
        wrap: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
          zIndex: '13',
          flexDirection: 'column',
          display: 'flex',
          background: '#37373C',
        },
        head: {
          background: '#2B272C',
          fontWeight: '300',
          padding: '20px',
        },

        title: {
          fontSize: '20px',
        },
        icon: {
          width: '20px',
          marginRight: '10px',
          display: 'inline-block',
        },
        subtitle: {
          fontSize: '16px',
          color: 'rgba(255,255,255,.7)',
          marginTop: '10px',
        },
        text: {
          flex: '1',
          position: 'relative',
          margin: '0 20px',
        },
        textarea: {
          Absolute: '23px auto 10px auto',
          border: 'none',
          outline: 'none',
          width: '100%',
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
          padding: '20px',
        },
        confirm: {
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: colors.primary,
          textDecoration: 'none',
          cursor: 'pointer',
          textAlign: 'center',
          display: 'block',
        },
      },
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (!this.props.isShowingComposerForm && nextProps.isShowingComposerForm) {
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

  _pgp = (pgpFn, ...options) => {
    return () => {
      const data = this.refs.textarea.value
      const output = pgpFn(data, ...options)
      return output
    }
  }

  readKey = this._pgp(readArmored)

  handleAddKey = async () => {
    const key = await this.readKey()
    await this.props.addKey(key)
  }

  handleEncrypt = async () => {
    const encryptMessage = await this._pgp(encrypt, this.props.selectedKeychain, this.props.alias.privateKeyArmored)()

    this.props.setOutput(encryptMessage)
  }

  handleDecrypt = async () => {
    const message = await this._pgp(decrypt, this.props.alias.privateKeyArmored)()

    this.props.setOutput(message)
  }

  handleSign = async () => {
    const signedMessage = await this._pgp(sign, this.props.alias.privateKeyArmored)()

    this.props.setOutput(signedMessage)
  }

  handleVerify = async () => {
    const match = await this._pgp(verify, this.props.keychain)()

    this.props.setOutput(`Signed message is verified to match: ${match.name} <${match.email}>`)
  }

  getProps = () => {
    return {
      'encrypt': {
        title: 'Encrypt',
        subtitle: 'a message read by / only those that you select / an exclusive club',
        acceptLabel: 'Encrypt',
        onAccept: this.handleEncrypt,
        placeholder: 'Write a Message',
      },
      'decrypt': {
        title: 'Decrypt',
        subtitle: 'unlock a message / only one way to find out / what secrets it holds',
        acceptLabel: 'Decrypt',
        onAccept: this.handleDecrypt,
        placeholder: 'Message to Decrypt',
        icon: 'decrypt',
      },
      'sign': {
        title: 'Sign',
        subtitle: 'sign a new message / so all your pals can be sure / that it’s really you',
        acceptLabel: 'Sign',
        onAccept: this.handleSign,
        placeholder: 'Message to Sign',
        icon: 'sign',
      },
      'verify': {
        title: 'Verify',
        subtitle: 'make sure a message / is by who claimed to write it / verify that shit',
        acceptLabel: 'Verify',
        onAccept: this.handleVerify,
        placeholder: 'Message to Verify',
        icon: 'verify',
      },
      'add key': {
        title: 'Add Key',
        subtitle: 'add a brand new key / to your ever-expanding / magical keychain',
        acceptLabel: 'Add',
        onAccept: this.handleAddKey,
        placeholder: 'Key to add to keychain',
        icon: 'add-key',
      },
    }[this.props.composerType] || {}
  }

  render() {
    const props = this.getProps()

    return (
      <div is="wrap" ref="wrap">
        <div is="head">
          <div is="title">
            <div is="icon">
              <Icon name={ props.icon } color={ colors.primary } />
            </div>
            { props.title }
          </div>
          <div is="subtitle">{ props.subtitle }</div>
        </div>
        <div is="text">
          <textarea is="textarea" ref="textarea" placeholder={ props.placeholder } onKeyDown={ this.props.handleKeyDown } />
        </div>
        <div is="actions">
          <a is="confirm" onClick={ props.onAccept }>{ props.acceptLabel }</a>
        </div>
      </div>
    )
  }
}

export default ReactCSS(ComposerForm)
