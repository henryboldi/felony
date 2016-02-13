'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import { spacing } from '../../styles/variables/utils'

import { Overlay, Icon } from '../common/index'
import FloatingButtonItem from './FloatingButtonItem'

class FloatingButton extends Component {
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
            <FloatingButtonItem />
            <FloatingButtonItem onClick={this.handleClose}/>
          </div>
          <Overlay onClick={this.handleClose}/>
        </div>
        :
        <div>
            <FloatingButtonItem onClick={this.handleOpen}>
                <Icon name="compose" />
            </FloatingButtonItem>
        </div>
      }
    </div>
  }
}

export default ReactCSS(FloatingButton)
