import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import { spacing } from '../../assets/styles/variables/utils'

class Button extends Component {
  classes() {
    return {
      'default': {
        button: {
          height: '30px',
          padding: `0 ${ spacing.s }px`,
          borderRadius: '4px',
          backgroundColor: this.props.background,
          color: this.props.color || 'inherit',
          display: 'flex',
          alignItems: 'center',
        },
      },
    }
  }

  render() {
    return <div is="button">{ this.props.children || this.props.label }</div>
  }
}

export default ReactCSS(Button)
