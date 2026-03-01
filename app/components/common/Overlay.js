/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react'
import ReactCSS from 'reactcss'

class Overlay extends Component {
  classes() { // eslint-disable-line
    return {
      'default': {
        overlay: {
          position: 'fixed',
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px',
          background: 'rgba(0, 0, 0, 0.7)', // TODO: color package for hex code opacity
        },
      },
    }
  }

  handleClick = () => this.props.onClick && this.props.onClick()

  render() {
    return <div is="overlay" onClick={ this.handleClick } />
  }
}

export default ReactCSS(Overlay)
