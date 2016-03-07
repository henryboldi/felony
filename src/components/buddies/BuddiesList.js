'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import _ from 'lodash'

import colors from '../../styles/variables/colors'

import BuddiesListBuddy from './BuddiesListBuddy'

class BuddiesList extends Component {
  classes() {
    return {
      'default': {

      },
    }
  }

  componentDidMount() {
    this.props.fetchBuddies()

    // this.props.addBuddy({ name: 'Medibuds' })
  }

  render() {
    return (
        <div is="list">
          { this.props.keys && _.map(this.props.keys, (key, j) => {
            return (
              <BuddiesListBuddy
                key={ key.id } // TODO: come up with a better variable name than key
                id={ key.id }
                name={ key.name }
                onSelect={ this.props.selectKey }
                active={ this.props.active[key.id] }
              />
            )
          }) }
        </div>
    )
  }
}

export default ReactCSS(BuddiesList)
