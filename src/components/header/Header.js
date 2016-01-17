'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

import { User, Button, Icon } from '../common/index';

class Header extends Component {
  classes() {
    return {
      'default': {
        header: {
          height: '58px',
          paddingTop: '16px',
          background: '#48505C',
          display: 'flex',
          justifyContent: 'space-between',
        },
        user: {
          color: '#fff',
        },
        actions: {
          padding: '14px 12px',
          display: 'flex',
          alignItems: 'center',
        },
        Decrypt: {
          background: '#F4C97A',
          color: '#48505C',
        },
      },
    };
  }

  render() {
    return (
      <div is="header">
        <div is="user">
          <User name="Henry" />
        </div>
        <div is="actions">
          <Icon name="more" color="#F4C97A"/>
          <Button is="Decrypt"><Icon name="unlock" /> Decrypt</Button>
        </div>
      </div>
    );
  }
}

export default ReactCSS(Header);
