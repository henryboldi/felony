'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

import { spacing } from '../../styles/variables/utils';

import FloatingButton from './FloatingButton';

class FloatingButtonToggle extends Component {
  state = {
    isShowingActions: false,
  };

  handleOpen = () => this.setState({ isShowingActions: true });

  handleClose = () => this.setState({ isShowingActions: false });

  classes() {
    return {
      'default': {
        button: {
          position: 'fixed',
          right: spacing.m,
          bottom: spacing.m,
        },
      },
    };
  }

  render() {
    return <div is="button">
      {
        this.state.isShowingActions ?
        <div>
          <FloatingButton />
          <button onClick={this.handleClose}>Close</button>
        </div>
        :
        <button onClick={this.handleOpen}>Open</button>
      }
    </div>;
  }
}

export default ReactCSS(FloatingButtonToggle);
