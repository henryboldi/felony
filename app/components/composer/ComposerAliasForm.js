'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import dynamics from 'dynamics.js'
var keytar = require("keytar")
import { generateKey } from '../../utils/pgp'

import colors from '../../assets/styles/variables/colors'

class ComposerAliasForm extends Component {
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
        text: {
          flex: '1',
          position: 'relative',
        },
        formItem: {
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '94%',
        },
        input: {
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
    }
  }

  handleConfirm = async () => {
    const name = this.refs.form[0].value
    const email = this.refs.form[1].value
    const passphrase = this.refs.form[2].value

    console.log(name, email, passphrase)
    this.props.toggleGeneratingKey()
    const key = await generateKey({ name, email }, passphrase)
    console.log(key)

    keytar.addPassword('felony', `${name} <${email}>`, passphrase)

    await this.props.addKey(key)
    this.props.toggleGeneratingKey()
    console.log('added key!')
  }

  render() {
    return (
      <div is="wrap" ref="wrap">
        <form is="form" ref="form">
          <div is="formItem">
            <label>Name</label>
            <input
              is="input"
              ref="textarea"
              placeholder={ 'Name' }
              onKeyDown={ this.props.handleKeyDown }
            />
          </div>
          <div is="formItem">
            <label>Email</label>
            <input
              type="email"
              is="input"
              ref="textarea"
              placeholder={ 'Email' }
              onKeyDown={ this.props.handleKeyDown }
            />
          </div>
          <div is="formItem">
            <label>Passphrase</label>
            <input
              type="password"
              is="input"
              ref="textarea"
              placeholder={ 'Passphrase' }
              onKeyDown={ this.props.handleKeyDown }
            />
          </div>
        </form>
        <div is="actions">
          <a is="link cancel" onClick={ this.props.handleCancel }>Cancel</a>
          <a is="link confirm" onClick={ this.handleConfirm }>Generate Key Pair</a>
        </div>
      </div>
    )
  }
}

export default ReactCSS(ComposerAliasForm)
