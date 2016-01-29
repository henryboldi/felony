'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

import colors from '../styles/variables/colors';
import 'normalize.css';
import '../fonts/work-sans/WorkSans.css!';
import '../styles/felony.css!';

import Header from './header/Header';
import EncryptKeyList from './encrypt/EncryptKeyList';
import FloatingButtonToggle from './floating-button/FloatingButtonToggle';

export class Felony extends Component {
  classes() {
    return {
      'default': {
        app: {
          Absolute: '0 0 0 0',
          background: colors.bgLight,
        },
        header: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
        },
        encryptKeyList: {
          position: 'fixed',
          top: 78,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: 'scroll', // TODO: elastic scroll
        },
      },
    };
  }

  render() {
    return (
      <div is="app">
        <div is="header">
          <Header />
        </div>
        <div is="encryptKeyList">
          <EncryptKeyList />
        </div>
        <FloatingButtonToggle />
      </div>
    );
  }
}

export default ReactCSS(Felony);
