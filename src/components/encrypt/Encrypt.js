'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import EncryptComposeContainer from '../../containers/EncryptComposeContainer'
import EncryptKeyListContainer from '../../containers/EncryptKeyListContainer'

class Encrypt extends Component {
  classes() {
    return {
      'default': {
        list: {
          position: 'fixed',
          top: 78,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: 'scroll', // TODO: elastic scroll
        },
      },
    }
  }

  render() {
    return (
      <div>
        <div is="list">
          <EncryptKeyListContainer />
        </div>
        <EncryptComposeContainer />
      </div>
    )
  }
}

export default ReactCSS(Encrypt)
