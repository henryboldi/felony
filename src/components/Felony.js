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
