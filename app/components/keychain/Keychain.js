import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import KeychainList from './KeychainList'
import KeychainComposerOpener from './KeychainComposerOpener'

class Keychain extends Component {
  classes() { // eslint-disable-line
    return {
      'default': {
        keychain: {
          position: 'fixed',
          top: '78px',
          left: '0px',
          right: '0px',
          bottom: '0px',
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
            { ...this.props }
          />
        </div>
        <KeychainComposerOpener
          isShowingOpener={ this.props.isShowingOpener }
          showComposer={ this.props.showComposer }
        />
      </div>
    )
  }
}

export default ReactCSS(Keychain)
