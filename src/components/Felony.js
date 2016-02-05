'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

import colors from '../styles/variables/colors';
import 'normalize.css';
import '../fonts/work-sans/WorkSans.css!';
import '../styles/felony.css!';

import Header from './header/Header';
import EncryptKeyList from './encrypt/EncryptKeyList';
import EncryptCompose from './encrypt/EncryptCompose';
import FloatingButtonToggle from './floating-button/FloatingButtonToggle';

export class Felony extends Component {
  state = {
    selected: [], // replaced with redux
  };

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

  // this will be replaced with Redux
  handleAddToSelected = (selected) => {
    this.setState({
      selected: this.state.selected.concat([selected]),
    });
  };

  render() {
    return (
      <div is="app">
        <div is="header"
          onClick={ this.handleAddToSelected }>
          <Header />
        </div>
        <div is="encryptKeyList">
          <EncryptKeyList />
        </div>
        <FloatingButtonToggle />
        <EncryptCompose display={ this.state.selected.length > 0 } />
      </div>
    );
  }
}

export default ReactCSS(Felony);
