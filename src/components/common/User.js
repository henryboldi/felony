'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

import Avatar from './Avatar';

class User extends Component {
  classes() {
    return {
      'default': {
        user: {
          display: 'flex',
          alignItems: 'center',
          padding: '12px',
        },
        avatar: {
          width: '34px',
        },
        name: {
          flex: '1',
          marginLeft: '12px',
          fontSize: '18px',
          fontWeight: '600',
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
