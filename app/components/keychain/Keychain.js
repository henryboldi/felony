'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import KeychainList from './KeychainList'
import KeychainComposerOpener from './KeychainComposerOpener'

class Keychain extends Component {
  classes() {
    return {
      'default': {
        keychain: {
          position: 'fixed',
          top: '78px',
          left: '0',
          right: '0',
          bottom: '0',
          overflowY: 'scroll', // TODO: elastic scroll
        },
      },
    }
  }

  render() {
    return (
      <div>
        <div is="keychain">
          <KeychainList
            {...this.props }
          />
        </div>
        <KeychainComposerOpener
          isShowingOpener= { this.props.isShowingOpener }
          showComposer={ this.props.showComposer }
        />
      </div>
    )
  }
}

export default ReactCSS(Keychain)
