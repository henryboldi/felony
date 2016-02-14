'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import { spacing } from '../../styles/variables/utils'

import { Overlay, Icon } from '../common/index'
import FloatingButtonItem from './FloatingButtonItem'

class FloatingButton extends Component {
  state = { isShowingActions: false }

  classes() {
    return {
      'default': {
        wrap: {
          position: 'fixed',
          right: spacing.m,
          bottom: spacing.m,
        },
        buttons: {
          zIndex: '9990',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '10px',
        },
        item: {
          marginTop: '10px',
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
