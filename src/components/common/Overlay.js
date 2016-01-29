'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

class Overlay extends Component {
  classes() {
    return {
      'default': {
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(225, 225, 225, 0.7)', // TODO: color package for hex code opacity
        },
      },
    };
  }

  handleClick = () => this.props.onClick && this.props.onClick();

  render() {
    return <div is="overlay" onClick={ this.handleClick } />;
  }
}

export default ReactCSS(Overlay);
