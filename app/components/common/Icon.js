/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import { getIcon } from '../../utils/icons'

class Icon extends Component {
  classes() {
    return {
      'default': {
        icon: {
          color: this.props.color,
          display: 'inline-block',
        },
      },
    }
  }

  render() {
    return <div is="icon" dangerouslySetInnerHTML={{ __html: getIcon(this.props.name) }} />
  }
}

export default ReactCSS(Icon)
