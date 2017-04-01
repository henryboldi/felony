import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../assets/styles/variables/colors'

class ComposerFormSubmit extends Component {
  state = { value: this.props.value }

  classes() { // eslint-disable-line
    return {
      'default': {
        confirm: {
          color: '#fff',
          padding: '10px 30px',
          borderRadius: '5px',
          backgroundColor: colors.primary,
          textDecoration: 'none',
          cursor: 'pointer',
          textAlign: 'center',
          display: 'block',
          transition: '200ms ease-in-out',
        },
      },
      'hover': {
        confirm: {
          backgroundColor: '#BF1B23',
        },
      },
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ value: nextProps.value })
  }

  handleClick = (clickFn) => {
    return () => {
      this.setState({ value: 'Hold Your Breath...' })
      clickFn()
    }
  }

  render() {
    return (
      <a
        is="link confirm"
        onClick={ this.handleClick(this.props.onClick) }
      >
        { this.state.value }
      </a>
    )
  }
}

export default ReactCSS.Hover(ReactCSS(ComposerFormSubmit))
