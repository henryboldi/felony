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

  render() {
    return <div>
      <button>Item</button>
    </div>;
  }
}

export default ReactCSS(FloatingButton);
