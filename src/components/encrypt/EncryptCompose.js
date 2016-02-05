'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

class EncryptCompose extends Component {
  classes() {
    return {
      'default': {
        compose: {
          position: 'fixed',
          bottom: '0',
          right: '0',
          left: '0',
          boxShadow: '0 0 14px rgba(0,0,0,0.08), 0 0 4px rgba(0,0,0,0.10)',
          display: 'none',
        },
        textarea: {
          width: '94%',
          padding: '3%',
          border: 'none',
          display: 'block',
          outline: 'none',
        },
      },
      'display': {
        compose: {
          display: 'block',
        },
      },
    };
  }

  render() {
    return (
      <div is="compose">
        <textarea is="textarea" placeholder="Write a Message" />
      </div>
    );
  }
}

export default ReactCSS(EncryptCompose);
