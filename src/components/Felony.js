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
import EncryptCompose from './encrypt/EncryptCompose'

export class Felony extends Component {
  state = {
    selected: [], // replaced with redux
  }

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

  // this will be replaced with Redux
  handleAddToSelected = (selected) => {
    this.setState({
      selected: this.state.selected.concat([selected]),
    })
  }

  render() {
    return (
      <div is="app">
        <div is="header"
          onClick={ this.handleAddToSelected }>
          <Header />
        </div>
        <div is="encryptKeyList">
          <EncryptKeyListContainer />
        </div>
        <FloatingButton />
        <EncryptCompose display={ this.state.selected.length > 0 } />
      </div>
    )
  }
}

export default ReactCSS(Felony)
