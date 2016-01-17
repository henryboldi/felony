'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';
import 'normalize.css';
import '../fonts/work-sans/WorkSans.css!';
import '../styles/felony.css!';

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
        <Header />
      </div>
    );
  }
}

export default ReactCSS(Felony);
