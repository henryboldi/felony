import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import keytar from 'keytar'
import { generateKey } from '../../utils/pgp'

import ComposerAliasFormInput from './ComposerAliasFormInput'
import ComposerFormSubmit from './ComposerFormSubmit'
import ComposerAliasSuccess from './ComposerAliasSuccess'

import colors from '../../assets/styles/variables/colors'

class ComposerAliasForm extends Component {
  state = {
    submitted: false,
    invalidName: false,
    invalidEmail: false,
    invalidPassphrase: false,
  }

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
        },
        welcome: {
          width: '35px',
          margin: '0 auto',
          marginTop: '43px',
          marginBottom: '-70px',
        },
        instructions: {
          width: '200px',
          textAlign: 'center',
          margin: '0 auto',
          marginTop: '0px',
          marginBottom: '20px',
        },
        form: {
          flex: '1',
          position: 'relative',
          margin: '0 20px',
        },
        formItem: {
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '15px',
        },
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
        },
        actions: {
          marginTop: '-10px',
          height: '40px',
          padding: '20px',
        },
        confirm: {
          color: '#fff',
          padding: '10px 30px',
          borderRadius: '5px',
          backgroundColor: colors.primary,
          textDecoration: 'none',
          cursor: 'pointer',
          textAlign: 'center',
          display: 'block',
          transition: '200ms ease-in-out',
        },
        bgGrey: {
          backgroundColor: colors.bgGrey,
          color: colors.bgDark,
          position: 'fixed',
          left: '0',
          right: '0',
          bottom: '0',
        },
      },
      'hover': {
        input: {
          border: 'solid 1px red',
        },
        confirm: {
          backgroundColor: '#BF1B23',
        },
      },
    }
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleConfirm()
    }
  }

  handleConfirm = async () => {
    const name = this.form[0].value
    const email = this.form[1].value
    const passphrase = this.form[2].value

    if (name === '' || email === '' || passphrase === '') {
      this.setState({ invalidName: false, invalidEmail: false, invalidPassphrase: false })

      if (name === '') {
        this.setState({ invalidName: true })
      }
      if (email === '') {
        this.setState({ invalidEmail: true })
      }
      if (passphrase === '') {
        this.setState({ invalidPassphrase: true })
      }
      return
    }

    const notification = {
      title: 'Keys Done Generating',
      body: 'Copy your public key by clicking the icon to the right of your name.',
    }

    this.props.toggleGeneratingKey()
    this.setState({ submitted: true })
    await this.props.addKey({ id: 999, name, privateKeyArmored: 'generating' })
    const key = await generateKey({ name, email }, passphrase)
    key.avatar = 9
    key.id = 999

    new Notification(notification.title, notification) // eslint-disable-line no-new
    keytar.addPassword('felony', `${ name } <${ email }>`, passphrase)
    await this.props.addKey(key)
    this.props.toggleGeneratingKey()
  }

  render() {
    return (
      <div is="wrap">
        <img
          alt="Welcome"
          is="welcome"
          src="assets/images/logo@2x.png"
        />
        <object
          type="image/svg+xml"
          data="assets/images/slant.svg"
        />
        <div is="bgGrey">
          { !this.state.submitted ?
            <div>
              <p is="instructions">To get started, generate your keys.</p>
              <form is="form" ref={ form => (this.form = form) }>
                <div is="formItem">
                  <ComposerAliasFormInput
                    type="text"
                    placeholder={ 'Name' }
                    onKeyDown={ this.handleKeyDown }
                    error={ this.state.invalidName }
                  />
                </div>
                <div is="formItem">
                  <ComposerAliasFormInput
                    type="email"
                    placeholder={ 'Email' }
                    onKeyDown={ this.handleKeyDown }
                    error={ this.state.invalidEmail }
                  />
                </div>
                <div is="formItem">
                  <ComposerAliasFormInput
                    type="password"
                    is="input"
                    placeholder={ 'Passphrase' }
                    onKeyDown={ this.handleKeyDown }
                    error={ this.state.invalidPassphrase }
                  />
                </div>
              </form>
              <div is="actions">
                <ComposerFormSubmit
                  onClick={ this.handleConfirm }
                  value="Generate"
                />
              </div>
            </div>
          :
          <ComposerAliasSuccess
            handleCancel={ this.props.handleCancel }
          />
          }
        </div>
      </div>
    )
  }
}

export default ReactCSS.Hover(ReactCSS(ComposerAliasForm))
