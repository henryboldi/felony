'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import _ from 'lodash'

import colors from '../../styles/variables/colors'

import EncryptKeyListItem from './EncryptKeyListItem'

class EncryptKeyList extends Component {
  classes() {
    return {
      'default': {

      },
    }
  }

  render() {
    return (
        <div is="list">
        { this.props.keys && _.map(this.props.keys, (key, j) => {
          return <EncryptKeyListItem ref="input"
            key={ key.id } // TODO: come up with a better variable name than key
            id={ key.id }
            name={ key.name }
            onSelect={ this.props.selectKey }
            active={ this.props.active[key.id] }
          />
        }) }
        </div>
    )
  }
}

export default ReactCSS(EncryptKeyList)
