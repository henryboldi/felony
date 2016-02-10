'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../styles/variables/colors'
import { spacing, sizing } from '../../styles/variables/utils'

class FloatingButtonItem extends Component {
  classes() {
    return {
      'default': {
        floatingButton: {
          backgroundColor: colors.primary,
          height: '34px',
          width: '34px', // TODO: use utils for sizing
          borderRadius: '100%',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0px 4px 10px 0px rgba(221, 33, 48, 0.33)',
        },
      },
      hover: {
        floatingButton: {
          boxShadow: '0 8px 17px 0 rgba(221, 33, 48, 0.28)',
        },
      },
    }
  }

  handleClick = () => this.props.onClick && this.props.onClick()

  render() {
    return <div onClick={ this.handleClick }>
      <a is="floatingButton">Item</a>
    </div>
  }
}

export default ReactCSS.Hover(ReactCSS(FloatingButtonItem))
