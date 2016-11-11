import React, { Component } from 'react'
import ReactCSS from 'reactcss'

class Avatar extends Component {
  classes() {
    return {
      'default': {
        avatar: {
          width: '100%',
          paddingBottom: '100%',
          borderRadius: '50%',
          background: `url(${ this.props.href }) #666`,
          backgroundSize: 'cover',
        },
      },
    }
  }

  render() {
    return <div is="avatar" />
  }
}

export default ReactCSS(Avatar)
