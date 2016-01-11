'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

export class Avatar extends Component {
  classes() {
    return {
      'default': {
        avatar: {
          width: '100%',
          paddingBottom: '100%',
          borderRadius: '50%',
          background: '#aeee00',
        },
      },
    };
  }

  render() {
    return <div is="avatar" />;
  }
}

export default ReactCSS(Avatar);
