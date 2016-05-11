'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import { spacing, sizing } from '../../assets/styles/variables/utils'
import colors from '../../assets/styles/variables/colors'

import Avatar from './Avatar'

class User extends Component {
  classes() {
    return {
      'default': {
        user: {
          display: 'flex',
          alignItems: 'center',
        },
        'avatar-wrap': {
          width: sizing.avatar,
          position: 'relative',
        },
        outline: {
          Absolute: '0px 0px 0px 0px',
          borderRadius: '50%',
          border: `2px solid ${ colors.primary }`,
        },
        avatar: {
          transform: 'scale(1)',
          transition: 'transform 100ms ease-in-out',
        },
        name: {
          flex: '1',
          marginLeft: spacing.s,
          fontSize: '16px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
      'active': {
        avatar: {
          transform: 'scale(.6)',
        },
      },
    }
  }

  render() {
    return (
      <div is="user">
        <div is="avatar-wrap">
          <div is="outline" />
          <div is="avatar">
            <Avatar href="images/avatar.png" />
          </div>
        </div>
        <div is="name">
          { this.props.name }
        </div>
      </div>
    )
  }
}

export default ReactCSS(User)
