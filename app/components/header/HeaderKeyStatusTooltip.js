'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import dynamics from 'dynamics.js'

import { Icon } from '../common/index'

import colors from '../../assets/styles/variables/colors'

class HeaderKeyStatusTooltip extends Component {
  classes() {
    return {
      'default': {
        tooltip: {
          position: 'absolute',
          display: 'flex',
          top: '32px',
          right: '50px',
          background: colors.bgLight,
          borderRadius: '3px',
          height: '45%',
          padding: '0px 10px',
          alignItems: 'center',
          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.33)',

          transform: 'translateY(10px)', // for animation
          opacity: '0',
        },
        arrow: {
          position: 'absolute',
          right: '-10px',
          top: '8px',
          width: '0',
          height: '0',
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          borderLeft: `10px solid ${ colors.bgLight }`,
        },
      },
    }
  }

  componentDidMount = () => {
    dynamics.animate(this.refs.tooltip, {
      translateY: 0,
      opacity: 1,
    }, {
      type: dynamics.spring,
      duration: 500,
      friction: 400,
    })
  }

  render() {
    return (
      <div is="tooltip" ref="tooltip">
        <div is="arrow"></div>
        { this.props.isGeneratingKey ?
          <p>{ 'Generating Keys: <2min' }</p>
        :
          <p>{ this.props.isCopied ? 'Copied!' : 'Copy Public Key' }</p>
        }
      </div>
    )
  }
}

export default ReactCSS(HeaderKeyStatusTooltip)
