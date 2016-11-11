import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../assets/styles/variables/colors'

class AliasComposer extends Component {
  classes() { // eslint-disable-line
    return {
      'default': {
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
          cursor: 'pointer',
        },
        cancel: {
          color: '#999',
        },
        confirm: {
          color: colors.primary,
        },
      },
    }
  }

  handleCancel = () => {
    this.props.toggleAliasComposer()
  }

  handleKeyDown = (e) => {
    (e.keyCode === 27 && this.props.isShowingAliasComposer) && this.handleCancel()
  }

  render() {
    return (
      <div is="wrap">
        <div is="text">
          <textarea
            is="textarea"
            placeholder={ this.props.placeholder }
            onKeyDown={ this.handleKeyDown }
          />
        </div>
      </div>
    )
  }
}

export default ReactCSS(AliasComposer)
