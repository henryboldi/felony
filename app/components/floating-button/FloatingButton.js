import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import { spacing } from '../../assets/styles/variables/utils'

import { Icon } from '../common/index'
import FloatingButtonItem from './FloatingButtonItem'

class FloatingButton extends Component {
  state = { isShowingActions: false }

  classes() { // eslint-disable-line
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

  renderFloatingButtonDiv(type) {
    const action = type.toLowerCase()
    const iconName = action.replace(/ /g, '-')

    return (
      <div is="item" onClick={ () => this.props.showComposer(action) }>
        <FloatingButtonItem label={ type }>
          <Icon name={ iconName } />
        </FloatingButtonItem>
      </div>
    )
  }

  render() {
    return (<div
      is="wrap"
      onMouseLeave={ this.handleClose }
    >
      { this.state.isShowingActions ?
        <div>
          <div is="buttons">
            { this.renderFloatingButtonDiv('Add Key') }
            { this.renderFloatingButtonDiv('Verify') }
            { this.renderFloatingButtonDiv('Sign') }
            { this.renderFloatingButtonDiv('Decrypt') }
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
