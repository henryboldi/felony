'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import dynamics from 'dynamics.js'

import colors from '../../styles/variables/colors'

class FullScreenCompose extends Component {
  classes() {
    return {
      'default': {
        wrap: {
          position: 'fixed',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          zIndex: '10',
          flexDirection: 'column',
          background: colors.bgDark,
          display: 'flex',
          transform: 'translateY(100%)',
          opacity: '0',
          transition: 'all 100ms linear',
        },
        text: {
          flex: '1',
          position: 'relative',
        },
        textarea: {
          Absolute: '23px 10px 10px 10px',
          border: 'none',
          outline: 'none',
          width: '94%',
          boxSizing: 'border-box',
          padding: '10px 3%',
          color: '#333',
          borderRadius: '2px',
          fontSize: '14px',
          fontFamily: 'Andale Mono',
        },
        actions: {
          marginTop: '-10px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 10px',
        },
        link: {
          textDecoration: 'none',
        },
        cancel: {
          color: '#999',
        },
        confirm: {
          color: colors.primary,
        },
      },
      'expanded': {
        wrap: {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (!this.props.expanded && nextProps.expanded) {
  //     dynamics.animate(this.refs.wrap, {
  //       translateY: 0,
  //       opacity: 1,
  //     }, {
  //       type: dynamics.spring,
  //       duration: 100,
  //       frequency: 110,
  //       friction: 400,
  //     })
  //   }
  // }

  handleClick = () => {
    this.props.handleToggleEncrypt()
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 27 && this.props.expanded) { // escape key
      this.props.handleToggleEncrypt()
    }
  }

  render() {
    return (
      <div is="wrap" ref="wrap">
        <div is="text">
          <textarea is="textarea" placeholder="Write a Message" onKeyDown={ this.handleKeyDown } />
        </div>
        <div is="actions">
          <a is="link cancel" href="#" onClick={ this.handleClick }>Cancel</a>
          <a is="link confirm" href="#">Encrypt</a>
        </div>
      </div>
    )
  }
}

export default ReactCSS(FullScreenCompose)
