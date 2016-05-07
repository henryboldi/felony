'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import _ from 'lodash'

import colors from '../../assets/styles/variables/colors'

import KeychainListItem from './KeychainListItem'

class KeychainList extends Component {
  classes() {
    return {
      'default': {

      },
    }
  }

  componentDidMount() {
    this.props.fetchKeychain()
  }

  render() {
    return (
        <div is="list">
          { this.props.keychain && _.map(this.props.keychain, (key, j) => {
            return (
              <KeychainListItem
                key={ key.id }
                id={ key.id }
                name={ key.name }
                email={ key.email }
                onSelect={ this.props.selectKey }
                active={ this.props.selectedKeychain[key.id] }
              />
            )
          }) }
        </div>
    )
  }
}

export default ReactCSS(KeychainList)
