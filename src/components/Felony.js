'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

import colors from '../styles/variables/colors';
import 'normalize.css';
import '../fonts/work-sans/WorkSans.css!';
import '../styles/felony.css!';

import Header from './header/Header';

export class Felony extends Component {
  classes() {
    return {
      'default': {
        app: {
          Absolute: '0 0 0 0',
          background: colors.bgLight,
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
