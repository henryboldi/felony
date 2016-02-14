'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import { User } from '../common/index'

import colors from '../../styles/variables/colors'
import { spacing, sizing } from '../../styles/variables/utils'

class EncryptKeyListItem extends Component {
  classes() {
    return {
      'default': {
        user: {
          padding: `${spacing.m}px ${spacing.m}px ${spacing.m}px`,
          display: 'flex',
        },
        spaceLine: {
          borderBottom: `solid 1px ${colors.bgDark}`,
          margin: `0px ${spacing.m}px 0px ${spacing.m + sizing.avatar + spacing.s}px`,
          item: 1,
        },
      },
    }
  }

  handleClick = () => {
    this.props.onSelect && this.props.onSelect(this.props.id)
  }

  render() {
    return <div onClick={ this.handleClick }>
      <div is="user">
        <User name={ this.props.name } active={ this.props.active } />
      </div>
      <div is="spaceLine"/>
    </div>
  }
}

export default ReactCSS(EncryptKeyListItem)
