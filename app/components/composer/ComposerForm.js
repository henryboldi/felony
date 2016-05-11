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
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          zIndex: '13',
          flexDirection: 'column',
          display: 'flex',
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
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: colors.primary,
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
      },
      'sign': {
        title: 'Sign',
        subtitle: 'sign a new message / so all your pals can be sure / that it’s really you',
        acceptLabel: 'Sign',
        onAccept: this.handleSign,
        placeholder: 'Message to Sign',
      },
      'verify': {
        title: 'Verify',
        subtitle: 'make sure a message / is by who claimed to write it / verify that shit',
        acceptLabel: 'Verify',
        onAccept: this.handleVerify,
        placeholder: 'Message to Verify',
      },
      'add key': {
        title: 'Add Key',
        subtitle: 'add a brand new key / to your ever-expanding / magical keychain',
        acceptLabel: 'Add',
        onAccept: this.handleAddKey,
        placeholder: 'Key to add to keychain',
      },
    }[this.props.composerType] || {}
  }

  render() {
    const props = this.getProps()

    return (
      <div is="wrap" ref="wrap">
        <h1>{ props.title }</h1>
        <label>Helpful Haiku</label>
        <p>{ props.subtitle }</p>
        <div is="text">
          <textarea is="textarea" ref="textarea" placeholder={ props.placeholder } onKeyDown={ this.props.handleKeyDown } />
        </div>
        <div is="actions">
          <a is="link cancel" onClick={ this.props.handleCancel }>Cancel</a>
          { this.props.isGeneratingKey ?
              <a is="link confirm">Generating Key... Pls wait</a>
            :
              <a is="link confirm" onClick={ props.onAccept }>{ props.acceptLabel }</a>
          }

        </div>
      </div>
    )
  }
}

export default ReactCSS(ComposerForm)
