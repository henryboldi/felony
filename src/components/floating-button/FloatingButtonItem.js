'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../styles/variables/colors'
import { spacing, sizing } from '../../styles/variables/utils'
import FloatingButtonItemLabel from './FloatingButtonItemLabel'

class FloatingButtonItem extends Component {
  classes() {
    const floatingButtonSize = 40

    return {
      'default': {
        wrap: {
          display: 'inline-flex',
          alignItems: 'center',
          position: 'relative',
        },
        label: {
          position: 'absolute',
          right: '100px',
          top: '0',
          bottom: '0',
        },
        button: {
          backgroundColor: colors.primary,
          height: floatingButtonSize,
          width: floatingButtonSize, // TODO: use utils for sizing
          borderRadius: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 10px 0px rgba(221, 33, 48, 0.33)',
        },
        buttonContent: {
          width: '24px',
        },
      },
      hover: {
        floatingButton: {
          boxShadow: '0 8px 17px 0 rgba(221, 33, 48, 0.28)',
        },
      },
      'size-large': {
        button: {
          height: floatingButtonSize * 1.3,
          width: floatingButtonSize * 1.3,
          right: '900px',
        },
        label: {
          right: '105px',
        },
      },
    }
  }

  render() {
    return <div is="wrap">
      { this.props.label &&
        <div is="label">
          <FloatingButtonItemLabel
            label={ this.props.label }
          />
        </div>
      }
      <a is="button">
        <span is="buttonContent">{ this.props.children }</ span>
      </a>
    </div>
  }
}

export default ReactCSS.Hover(ReactCSS(FloatingButtonItem))
