'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

class FloatingButton extends Component {
  classes() {
    return {
      'default': {

      },
    };
  }

  handleClick = () => this.props.onClick && this.props.onClick();

  render() {
    return <div onClick={ this.handleClick }>
      <a is="floatingButton">Item</a>
    </div>;
  }
}

export default ReactCSS(FloatingButton);
