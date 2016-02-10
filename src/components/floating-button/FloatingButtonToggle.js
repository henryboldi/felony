'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import { spacing } from '../../styles/variables/utils'

import { Overlay } from '../common/index'
import FloatingButton from './FloatingButton'

class FloatingButtonToggle extends Component {
  state = {
    isShowingActions: false,
  }

  classes() {
    return {
      'default': {
        button: {
          position: 'fixed',
          right: spacing.m,
          bottom: spacing.m,
        },
        floatingButtons: {
          zIndex: '9990',
          position: 'relative',
        },
      },
    }
  }

  handleOpen = () => this.setState({ isShowingActions: true })

  handleClose = () => this.setState({ isShowingActions: false })

  render() {
    return <div is="button">
      { this.state.isShowingActions ?
        <div>
          <div is="floatingButtons">
            <FloatingButton />
            <FloatingButton onClick={this.handleClose}/>
          </div>
          <Overlay onClick={this.handleClose}/>
        </div>
        :
        <FloatingButton onClick={this.handleOpen}/>
      }
    </div>
  }
}

export default ReactCSS(FloatingButtonToggle)
