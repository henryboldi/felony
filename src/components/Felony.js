'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

import Header from './header/Header';

export class Felony extends Component {
  classes() {
    return {
      'default': {
        app: {
          WebkitFontSmoothing: 'antialiased',
          Absolute: '0 0 0 0',
          background: '#EEF1F8',
        },
      },
    };
  }

  render() {
    return (
      <div is="app">
        <style>{`
          body, html {
            -webkit-overflow-scrolling: touch;
            overflow: hidden;
          }
        `}</style>
        <Header />
      </div>
    );
  }
}

export default ReactCSS(Felony);
