'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../styles/variables/colors'

import EncryptKeyListItem from './EncryptKeyListItem'

class EncryptKeyList extends Component {
  classes() {
    return {
      'default': {

      },
    }
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.props.onTestAdd('Case')
    // }, 5000)
    this.props.onTestAdd('Medibuds')
    this.props.onTestAdd('Case')
    this.props.onTestAdd('Foo Bar')
    this.props.onTestAdd('Middle Earth Dude')
    this.props.onTestAdd('Colin')
  }

  render() {
    return (
        <div is="list">
        { this.props.keys && this.props.keys.map((key, j) => {
          return <EncryptKeyListItem ref="input"
            key={ key.id } // TODO: come up with a better variable name than key
            id={ key.id }
            name={ key.name }
            onSelect={ this.props.selectKey }
            active={ this.props.active[key.id] }
            untouched={ !this.props.active.length === 0 }
          />
        }) }
        </div>
    )
  }
}

export default ReactCSS(EncryptKeyList)
