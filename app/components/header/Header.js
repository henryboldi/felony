'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../assets/styles/variables/colors'
import { spacing } from '../../assets/styles/variables/utils'

import { Button, Icon } from '../common/index'
import AliasContainer from '../../containers/AliasContainer'

import { generateKey } from '../../utils/pgp'

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
        actions: {
          display: 'flex',
          alignItems: 'center',
        },
        icon: {
          width: '24px',
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
        <AliasContainer />
        <div is="actions">
          <div is="icon">
            <Icon name="more" color="#F4C97A"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ReactCSS(Header)
