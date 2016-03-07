'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import dynamics from 'dynamics.js'

import colors from '../../styles/variables/colors'

class BuddiesComposerOpener extends Component {
  classes() {
    return {
      'default': {
        opener: {
          position: 'fixed',
          zIndex: '12',
          bottom: '-10px',
          right: '0',
          left: '0',
          boxShadow: '0 0 14px rgba(0,0,0,0.08), 0 0 4px rgba(0,0,0,0.10)',
          height: '55px',
          background: colors.bgDark,
          padding: '10px',
          transform: 'translateY(64px)',
        },
        button: {
          background: '#fff',
          height: '45px',
          lineHeight: '45px',
          borderRadius: '2px',
          padding: '0 12px',
          color: '#aaa',
        },
      },
      'isShowingBuddiesComposerOpener': {
        opener: {
          transform: 'translateY(0)',
        },
      },
    }
  }

  handleClick = () => {
    (!this.props.isShowingOpener) && this.props.showComposer('encrypt')
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isShowingOpener && nextProps.isShowingOpener) {
      dynamics.animate(this.refs.opener, {
        translateY: 0,
      }, {
        type: dynamics.spring,
        duration: 700,
        friction: 400,
      })
    }
  }

  render() {
    return (
      <div is="opener" ref="opener" onClick={ this.handleClick }>
        <div is="button">Write a Message</div>
      </div>
    )
  }
}

export default ReactCSS(BuddiesComposerOpener)
