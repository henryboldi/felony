import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import dynamics from 'dynamics.js'

import colors from '../../assets/styles/variables/colors'

class KeychainComposerOpener extends Component {
  classes() { // eslint-disable-line
    return {
      'default': {
        opener: {
          position: 'fixed',
          zIndex: '12',
          bottom: '-10px',
          right: '0px',
          left: '0px',
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
      'isShowingOpener': {
        opener: {
          transform: 'translateY(0)',
        },
      },
    }
  }

  handleClick = () => {
    this.props.showComposer('encrypt')
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isShowingOpener && nextProps.isShowingOpener) {
      this.moveOpener(0, 'spring', 700, 400)
    } else if (this.props.isShowingOpener && !nextProps.isShowingOpener) {
      this.moveOpener(64, 'easeInOut', 400, 250)
    }
  }

  moveOpener(y, style, duration, friction) {
    dynamics.animate(this.opener, {
      translateY: y,
    }, {
      type: dynamics[style],
      duration,
      friction,
    })
  }

  render() {
    return (
      <div
        is="opener"
        ref={ opener => (this.opener = opener) }
        onClick={ this.handleClick }
      >
        <div is="button">Write a Message</div>
      </div>
    )
  }
}

export default ReactCSS(KeychainComposerOpener)
