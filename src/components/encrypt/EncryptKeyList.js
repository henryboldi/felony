'use strict';

import React, { Component } from 'react';
import ReactCSS from 'reactcss';

import EncryptKeyListItem from './EncryptKeyListItem';

class EncryptKeyList extends Component {
  classes() {
    return {
      'default': {

      },
    };
  }

  render() {
    const keys = [
      {
        id: 1,
        name: 'Medibuds',
      },
      {
        id: 2,
        name: 'TripWithScience',
      },
      {
        id: 3,
        name: 'HumboltFarms',
      },
      {
        id: 4,
        name: 'HouseOfSpirits',
      },
      {
        id: 5,
        name: 'HouseOfSpirits',
      },
      {
        id: 6,
        name: 'HouseOfSpirits',
      },
      {
        id: 7,
        name: 'HouseOfSpirits',
      },
      {
        id: 8,
        name: 'HouseOfSpirits',
      },
    ];

    return <div>
      { keys.map((key, j) => {
        return <EncryptKeyListItem
          key={ key.id } // TODO: come up with a better variable name than key
          name={ key.name }
        />;
      }) }
    </div>;
  }
}

export default ReactCSS(EncryptKeyList);
