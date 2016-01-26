'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

import { spacing } from '../../styles/variables/utils';

import Avatar from './Avatar';

class User extends Component {
  classes() {
    return {
      'default': {
        user: {
          display: 'flex',
          alignItems: 'center',
        },
        avatar: {
          width: '34px',
        },
        name: {
          flex: '1',
          marginLeft: spacing.s,
          fontSize: '16px',
          fontWeight: '500',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    };
  }

  render() {
    return (
      <div is="user">
        <div is="avatar">
          <Avatar />
        </div>
        <div is="name">
          { this.props.name }
        </div>
      </div>
    );
  }
}

export default ReactCSS(User);
