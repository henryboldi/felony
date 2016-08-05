'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../assets/styles/variables/colors'
import { spacing } from '../../assets/styles/variables/utils'

import Alias from '../alias/Alias'
import HeaderKeyStatus from './HeaderKeyStatus'

class Header extends Component {
  classes() {
    return {
      'default': {
        header: {
          background: colors.bgDark,
          display: 'flex',
          justifyContent: 'space-between',
          padding: `${ spacing.m + spacing.statusBarHeight }px ${ spacing.m }px ${ spacing.m }px`,
        },
        actions: {
          display: 'flex',
          alignItems: 'center',
        },
        icon: {
          width: '24px',
          marginBottom: '2px',
        },
        Decrypt: {
          background: colors.primaryGradient, // TODO: File issue as this should work
          color: colors.bgDark,
        },
      },
    }
  }

  componentDidMount = () => {
    this.props.showComposer('alias')
  }

  componentDidUpdate = (prevProps) => {
    console.log(prevProps.alias.privateKeyArmored)
    this.counter++
    if (prevProps.alias.privateKeyArmored !== this.props.alias.privateKeyArmored
      && this.counter < 3) {
      this.props.toggleComposer()
    }
  }

  counter = 0

  render() {
    return (
      <div is="header">
        <Alias
          { ...this.props }
        />
        <div is="actions">
          <div is="icon">
            <HeaderKeyStatus
              { ...this.props }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ReactCSS(Header)
