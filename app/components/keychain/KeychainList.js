import React, { Component } from 'react'
import _ from 'lodash'

import KeychainListItem from './KeychainListItem'

class KeychainList extends Component {
  componentDidMount() { this.props.fetchKeychain() }

  render() {
    return (
      <div is="list">
        { _.map(this.props.keychain, key => (
          <KeychainListItem
            key={ key.id }
            id={ key.id }
            name={ key.name }
            email={ key.email }
            onSelect={ this.props.selectKey }
            active={ this.props.selectedKeychain[key.id] }
            avatar={ key.avatar }
          />
        )) }
      </div>
    )
  }
}

export default KeychainList
