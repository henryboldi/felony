'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../styles/variables/colors'
import { spacing } from '../../styles/variables/utils'

import { User, Button, Icon } from '../common/index'

class Header extends Component {
  classes() {
    return {
      'default': {
        header: {
          background: colors.bgDark,
          display: 'flex',
          justifyContent: 'space-between',
          padding: `${spacing.m + spacing.statusBarHeight }px ${spacing.m}px ${spacing.m}px`,
        },
        user: {
          color: '#fff',
          flex: '1',
          fontWeight: '500',
        },
        actions: {
          display: 'flex',
          alignItems: 'center',
        },
        Decrypt: {
          background: colors.primaryGradient, // TODO: File issue as this should work
          color: colors.bgDark,
        },
      },
    }
  }

  render() {
    return (
      <div is="header">
        <div is="user">
          <User name="Cali-Connection" />
        </div>
        <div is="actions">
          <Icon name="more" color="#F4C97A"/>
        </div>
      </div>
    )
  }
}

export default ReactCSS(Header)
