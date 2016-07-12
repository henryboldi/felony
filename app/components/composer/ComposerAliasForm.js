'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import keytar from 'keytar'
import { generateKey, readArmoredPrivate } from '../../utils/pgp'

import ComposerAliasFormInput from './ComposerAliasFormInput'
import ComposerAliasFormTextArea from './ComposerAliasFormTextArea'
import ComposerFormSubmit from './ComposerFormSubmit'
import ComposerAliasSuccess from './ComposerAliasSuccess'

import dynamics from 'dynamics.js'
import colors from '../../assets/styles/variables/colors'

class ComposerAliasForm extends Component {
  state = {
    submitted: false,
    invalidName: false,
    invalidEmail: false,
    invalidPassphrase: false,
    invalidKey: false,
    isImporting: false,
  }

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
          overflow: 'hidden',
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
        action: {
          marginTop: '-10px',
          height: '40px',
          padding: '10px 20px',
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

  componentWillUpdate(nextProps, nextState) {
    const opts = { duration: 500 }
    // slide the form and logo up if user switches between import and generate
    if (this.state.isImporting !== nextState.isImporting) {
      dynamics.animate(this.refs.form, {
        // the height of the form + the negative margin on the submit button
        height: nextState.isImporting ? 219 : 160,
      }, opts)
      // don't move the logo and svg when full screened (window is normally 410)
      if (window.innerHeight < 500) {
        dynamics.animate(this.refs.welcome, {
          marginTop: nextState.isImporting ? 0 : 43,
        }, opts)
        dynamics.animate(this.refs.bg, {
          marginTop: nextState.isImporting ? -5 : 0,
        }, opts)
      }
    }
  }

  handleKeyDown = (e) => {
    if(e.keyCode === 13){
      this.handleConfirm();
    }
  }

  toggleImport = () => {
    // get rid of markers in case of errors here too
    this.setState({
      isImporting: !this.state.isImporting,
      invalidName: false,
      invalidEmail: false,
      invalidPassphrase: false,
      invalidKey: false,
    })
  }

  handleConfirm = async () => {
    const name = this.refs.form[0].value
    const email = this.refs.form[1].value
    const passphrase = this.refs.form[2].value

    if(name === "" || email === "" || passphrase === ""){
      this.setState({invalidName: false, invalidEmail: false, invalidPassphrase: false});

      if(name === ""){
        this.setState({invalidName: true});
      }
      if(email === ""){
        this.setState({invalidEmail: true});
      }
      if(passphrase === ""){
        this.setState({invalidPassphrase: true});
      }
      return;
    }

    const notification = {
      title: 'Keys Done Generating',
      body: 'Copy your public key by clicking the icon to the right of your name.',
    }

    console.log(name, email, passphrase)
    this.props.toggleGeneratingKey()
    this.setState({ submitted: true })
    await this.props.addKey({ id: 999, name, privateKeyArmored: 'generating' })
    const key = await generateKey({ name, email }, passphrase)
    key.avatar = 9
    key.id = 999
    console.log(key)

    new Notification(notification.title, notification)
    keytar.addPassword('felony', `${ name } <${ email }>`, passphrase)
    await this.props.addKey(key)
    this.props.toggleGeneratingKey()

    console.log('added key!')
  }

  handleImport = async () => {
    const passphrase = this.refs.form[0].value
    const key = await readArmoredPrivate(this.refs.form[1].value)

    if (key.err) {
      this.setState({ invalidKey: true })
      return;
    }
    this.setState({ invalidKey: false })

    const notification = {
      title: 'Keys Successfully Imported',
      body: 'Copy your public key by clicking the icon to the right of your name.'
    }

    new Notification(notification.title, notification)
    key.avatar = 9
    key.id = 999
    console.log(key)

    if (passphrase) {
      keytar.addPassword('felony', `${ key.name } <${ key.email }>`, passphrase)
    }

    await this.props.addKey(key)

    console.log('added key!')
  }

  render() {
    return (
      <div is="wrap" ref="wrap">
        <img
          is="welcome"
          ref="welcome"
          src="assets/images/logo@2x.png"
        />
        <object
          ref="bg"
          type="image/svg+xml"
          data="assets/images/slant.svg"
        ></object>
        <div is="bgGrey">
          { !this.state.submitted ?
            <div>
              <p is="instructions">To get started, generate or import your keys.</p>
              <form is="form" ref="form">
                { this.state.isImporting ?
                  <div>
                    <div is="formItem">
                      <ComposerAliasFormInput
                        type="password"
                        is="input"
                        ref="textarea"
                        placeholder={ 'Passphrase (if applicable)' }
                      />
                    </div>
                    <div is="formItem">
                      <ComposerAliasFormTextArea
                        placeholder={ 'Paste your private key here' }
                        error={ this.state.invalidKey }
                      />
                    </div>
                  </div>
                :
                  <div>
                    <div is="formItem">
                      <ComposerAliasFormInput
                        is="input"
                        type="text"
                        ref="textarea"
                        placeholder={ 'Name' }
                        onKeyDown={ this.handleKeyDown }
                        error={ this.state.invalidName }
                      />
                    </div>
                    <div is="formItem">
                      <ComposerAliasFormInput
                        is="input"
                        type="email"
                        ref="textarea"
                        placeholder={ 'Email' }
                        onKeyDown={ this.handleKeyDown }
                        error={ this.state.invalidEmail }
                      />
                    </div>
                    <div is="formItem">
                      <ComposerAliasFormInput
                        is="input"
                        type="password"
                        ref="textarea"
                        placeholder={ 'Passphrase' }
                        onKeyDown={ this.handleKeyDown }
                        error={ this.state.invalidPassphrase }
                      />
                    </div>
                  </div>
                }
              </form>
              <div is="action">
                <ComposerFormSubmit
                  onClick={ this.state.isImporting ? this.toggleImport : this.handleConfirm }
                  value={ this.state.isImporting ? "Generate keys" : "Confirm" }
                />
              </div>
              <div is="action">
                <ComposerFormSubmit
                  onClick={ this.state.isImporting ? this.handleImport : this.toggleImport }
                  value={ this.state.isImporting ? "Confirm" : "Import keys" }
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
