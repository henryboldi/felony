'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

export class Felony extends Component {
  classes() {
    return {
      'default': {

      },
    };
  }

  render() {
    return <div>Felony</div>;
  }
}

export default ReactCSS(Felony);
