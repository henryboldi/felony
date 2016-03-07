'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import BuddiesList from './BuddiesList'
import BuddiesComposerOpener from './BuddiesComposerOpener'

class Buddies extends Component {
  classes() {
    return {
      'default': {
        buddies: {
          position: 'fixed',
          top: 78,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: 'scroll', // TODO: elastic scroll
        },
      },
    }
  }

  render() {
    return (
      <div>
        <div is="buddies">
          <BuddiesList
            buddies={ this.props.buddies }
            selectedBuddies={ this.props.selectedBuddies }
            fetchBuddies={ this.props.fetchBuddies }
          />
        </div>
        <BuddiesComposerOpener {...this.props } />
      </div>
    )
  }
}

export default ReactCSS(Buddies)
