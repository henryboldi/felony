'use strict'

import 'normalize.css'
import React, { Component } from 'react'
import ReactCSS  from 'reactcss'

import '../fonts/work-sans/WorkSans.css!'
import '../styles/felony.css!'
import colors  from '../styles/variables/colors'

import EncryptKeyListContainer  from '../containers/EncryptKeyListContainer'
import FloatingButton  from './floating-button/FloatingButton'
import Header  from './header/Header'

export class Felony extends Component {
  classes() {
    return {
      'default': {
        app: {

          // NOTE: Set here and not in felony.css in order to use color variable
          background: colors.bgLight,
          position: 'absolute',
          width: '100%',
          height: '100%',
          color: 'white',
        },
        header: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
        },
        encryptKeyList: {
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
      <div is="app">
        <div is="header">
          <Header />
        </div>
        <div is="encryptKeyList">
          <EncryptKeyListContainer />
        </div>
        <FloatingButton />
      </div>
    )
  }
}

export default ReactCSS(Felony)
