'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

import colors from '../../styles/variables/colors';
import { spacing, sizing } from '../../styles/variables/utils';

class FloatingButton extends Component {
  classes() {
    return {
      'default': {
        floatingButton: {
          height: '34px',
          width: '34px', // TODO: use utils for sizing
          borderRadius: '100%',
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0px 2px 9px 0px rgba(0,0,0,0.21)',
        },
      },
      hover: {
        floatingButton: {
          boxShadow: '0 8px 17px 0 rgba(34, 32, 32, 0.28)',
        },
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

export default ReactCSS.Hover(ReactCSS(FloatingButton));
