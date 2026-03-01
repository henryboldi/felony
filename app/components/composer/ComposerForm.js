import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import { readArmored, encrypt, decrypt, sign, verify } from '../../utils/pgp'

import { Icon } from '../common/index'
import ComposerFormSubmit from './ComposerFormSubmit'

import colors from '../../assets/styles/variables/colors'

class ComposerForm extends Component {

  classes() { // eslint-disable-line
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
          padding: '10px 20px',
          paddingTop: '35px',
        },

        title: {
          fontSize: '20px',
          fontWeight: '400',
        },
        icon: {
          width: '20px',
          marginRight: '10px',
          display: 'inline-block',
          verticalAlign: 'middle',
        },
        subtitle: {
          fontSize: '16px',
          color: 'rgba(255,255,255,.7)',
          marginTop: '6px',
          marginBottom: '3px',
          lineHeight: '23px',
        },
        text: {
          flex: '1',
          position: 'relative',
          margin: '0 20px',
          marginTop: '-10px',
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
          marginTop: '5px',
        },
        actions: {
          marginTop: '-18px',
          height: '55px',
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
        cancel: {
          color: 'rgba(255,255,255,.4)',
          textAlign: 'center',
          display: 'block',
          marginTop: '7px',
          cursor: 'pointer',
        },
      },
    }
  }

  pgp = (pgpFn, ...options) => {
    return () => {
      const data = this.textarea.value
      const output = pgpFn(data, ...options)
      return output
    }
  }

  readKey = this.pgp(readArmored)

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * ((max - min) + 1)) + min
  }

  handleAddKey = async () => {
    const avatar = this.getRandomInt(1, 23)
    const key = await this.readKey()
    key.avatar = avatar
    await this.props.addKey(key)
  }

  handleEncrypt = async () => {
    const encryptMessage = await this.pgp(
      encrypt,
      this.props.selectedKeychain,
      this.props.alias.privateKeyArmored,
    )()
    this.props.setOutput(encryptMessage)
  }

  handleDecrypt = async () => {
    const message = await this.pgp(decrypt, this.props.alias.privateKeyArmored)()
    this.props.setOutput(message)
  }

  handleSign = async () => {
    const signedMessage = await this.pgp(sign, this.props.alias.privateKeyArmored)()
    this.props.setOutput(signedMessage)
  }

  handleVerify = async () => {
    const match = await this.pgp(verify, this.props.keychain)()
    if (typeof match.name === 'undefined') {
      this.props.setOutput('The author of this message appears to not be in your contact list')
    } else {
      this.props.setOutput(`Signed message is verified to match: ${ match.name } <${ match.email }>`)
    }
  }

  getProps = () => {
    return {
      'encrypt': {
        title: 'Encrypt',
        subtitle: 'Encrypting creates a locked message for your recipients.',
        acceptLabel: 'Encrypt',
        onAccept: this.handleEncrypt,
        placeholder: 'Write a message',
        icon: 'encrypt',
      },
      'decrypt': {
        title: 'Decrypt',
        subtitle: 'Decrypting a message lets you read for you.',
        acceptLabel: 'Decrypt',
        onAccept: this.handleDecrypt,
        placeholder: 'Paste an encrypted message',
        icon: 'decrypt',
      },
      'sign': {
        title: 'Sign',
        subtitle: 'Signing a message lets others know that it’s really you.',
        acceptLabel: 'Sign',
        onAccept: this.handleSign,
        placeholder: 'Write a message',
        icon: 'sign',
      },
      'verify': {
        title: 'Verify',
        subtitle: 'Verifying confirms who authored a message is as they claim.',
        acceptLabel: 'Verify',
        onAccept: this.handleVerify,
        placeholder: 'Paste a signed message',
        icon: 'verify',
      },
      'add key': {
        title: 'Add Key',
        subtitle: 'Add someone’s public key to your buddies list.',
        acceptLabel: 'Add',
        onAccept: this.handleAddKey,
        placeholder: 'Paste a public key',
        icon: 'add-key',
      },
    }[this.props.composerType] || {}
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.isShowingComposer) {
      this.textarea.value = ''
      this.textarea.focus()
    }
  }

  render() {
    const props = this.getProps()

    return (
      <div is="wrap">
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
          <textarea
            is="textarea"
            ref={ textarea => (this.textarea = textarea) }
            placeholder={ props.placeholder }
            onKeyDown={ this.props.handleKeyDown }
          />
        </div>
        <div is="actions">
          { this.props.isGeneratingKey ? (
            <a is="link confirm">Generating Key... Pls wait</a>
          ) : (
          <ComposerFormSubmit
            onClick={ props.onAccept }
            value={ props.acceptLabel }
          />
          ) }
          <a is="link cancel" onClick={ this.props.handleCancel }>nevermind</a>
        </div>
      </div>
    )
  }
}

export default ReactCSS(ComposerForm)
