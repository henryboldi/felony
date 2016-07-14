'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import { spacing } from '../../assets/styles/variables/utils'

import { Icon } from '../common/index'
import FloatingButtonItem from './FloatingButtonItem'

class FloatingButton extends Component {
  constructor(props) {
    super(props)
    this.showComposer = this.props.showComposer.bind(this)
    this.state = {
      isShowingActions: false,
    }
  }

  classes() {
    return {
      'default': {
        wrap: {
          position: 'fixed',
          right: `${ spacing.m }px`,
          bottom: `${ spacing.m }px`,
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

  showComposer(type) {
    return this.props.showComposer.bind(this, type)
  }

  render() {
    return (<div
      is="wrap"
      onMouseLeave={ this.handleClose }
    >
      { this.state.isShowingActions ?
        <div>
          <div is="buttons">
            <div is="item" onClick={ this.showComposer('add key') }>
              <FloatingButtonItem label="Add Key">
                <Icon name="add-key" />
              </FloatingButtonItem>
            </div>
            <div is="item" onClick={ this.showComposer('verify') }>
              <FloatingButtonItem label="Verify">
                <Icon name="verify" />
              </FloatingButtonItem>
            </div>
            <div is="item" onClick={ this.showComposer('sign') }>
              <FloatingButtonItem label="Sign">
                <Icon name="sign" />
              </FloatingButtonItem>
            </div>
            <div is="item" onClick={ this.showComposer('decrypt') }>
              <FloatingButtonItem size="large" label="Decrypt" >
                <Icon name="decrypt" />
              </FloatingButtonItem>
            </div>
          </div>
        </div>
        :
        <div onMouseEnter={ this.handleOpen }>
          <FloatingButtonItem size="large">
            <Icon name="plus" />
          </FloatingButtonItem>
        </div>
      }
    </div>)
  }
}

export default ReactCSS(FloatingButton)
