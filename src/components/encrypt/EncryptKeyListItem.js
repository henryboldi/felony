'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

import { User } from '../common/index';

import colors from '../../styles/variables/colors';
import { spacing, sizing } from '../../styles/variables/utils';

class EncryptKeyListItem extends Component {
  classes() {
    return {
      'default': {
        user: {
          padding: `${spacing.m}px ${spacing.m}px ${spacing.m}px`,
          display: 'flex',
        },
        spaceLine: {
          borderBottom: `solid 1px ${colors.offBgLight}`,
          margin: `0px ${spacing.m}px 0px ${spacing.m + sizing.avatar + spacing.s}px`,
          item: 1,
        },
      },
    };
  }

  render() {
    return <div></div>;
  }
}

export default ReactCSS(EncryptKeyListItem);
