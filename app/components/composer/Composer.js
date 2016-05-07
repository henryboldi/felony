'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import dynamics from 'dynamics.js'
import { verify, sign, decrypt, encrypt, getPublicKeysFromKeychain } from '../../utils/pgp'

import ComposerForm from './ComposerForm'
import ComposerAliasForm from './ComposerAliasForm'

import colors from '../../assets/styles/variables/colors'

class Composer extends Component {
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
      },
      'isShowingComposer': {
      wrap: {
        transform: 'translateY(0)',
        opacity: '1',
      },
    },
    }
  }

  handleCancel = () => {
    this.props.toggleComposer()
  }

  handleKeyDown = (e) => {
    (e.keyCode === 27 && this.props.isShowingComposer) && this.handleCancel()
  }

  render() {

    return (
      <div is="wrap" ref="wrap">
        { this.props.composerType == 'alias' ?
          <ComposerAliasForm
            handleKeyDown={ this.handleKeyDown }
            handleCancel={ this.handleCancel }
            {...this.props }
          />
        :
          <ComposerForm
            handleKeyDown={ this.handleKeyDown }
            handleCancel={ this.handleCancel }
            {...this.props }
          />
        }

      </div>
    )
  }
}

export default ReactCSS(Composer)
