'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import EncryptKeyListItem from './EncryptKeyListItem'

class EncryptKeyList extends Component {
  classes() {
    return {
      'default': {

      },
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.props.onTestAdd('Case')
    }, 1000)
  }

  render() {
    return (
        <div>
        { this.props.keys && this.props.keys.map((key, j) => {
          return <EncryptKeyListItem ref="input"
            key={ key.id } // TODO: come up with a better variable name than key
            name={ key.name }
          />
        }) }
        </div>
    )
  }
}

export default ReactCSS(EncryptKeyList)
