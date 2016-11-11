import 'normalize.css'
import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import '../assets/fonts/work-sans/WorkSans.css'
import '../assets/styles/felony.css'
import '../assets/styles/spinner.css'
import colors from '../assets/styles/variables/colors'

import HeaderContainer from '../containers/HeaderContainer'
import FloatingButtonContainer from '../containers/FloatingButtonContainer'
import ComposerContainer from '../containers/ComposerContainer'
import OutputContainer from '../containers/OutputContainer'
import KeychainContainer from '../containers/KeychainContainer'

export class Felony extends Component {
  state = {
    selected: [], // replaced with redux
  }

  classes() { // eslint-disable-line
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
          top: '0px',
          left: '0px',
          right: '0px',
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
        <div is="header" onClick={ this.handleAddToSelected }>
          <HeaderContainer />
        </div>

        <KeychainContainer />

        <FloatingButtonContainer />
        <ComposerContainer />
        <OutputContainer />
      </div>
    )
  }
}

export default ReactCSS(Felony)
