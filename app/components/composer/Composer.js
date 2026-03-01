import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import ComposerForm from './ComposerForm'
import ComposerAliasForm from './ComposerAliasForm'

import colors from '../../assets/styles/variables/colors'

class Composer extends Component {
  classes() { // eslint-disable-line
    return {
      'default': {
        wrap: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
          zIndex: '13',
          flexDirection: 'column',
          background: colors.bgDark,
          display: 'flex',
          transform: 'translateY(100%)',
          opacity: '0px',
          transition: 'all 200ms ease-in-out',
        },
      },
      'isShowingComposer': {
        wrap: {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
    }
  }

  handleCancel = () => {
    this.props.toggleComposer()
  }

  render() {
    return (
      <div is="wrap">
        { this.props.composerType === 'alias' ?
          <ComposerAliasForm
            handleCancel={ this.handleCancel }
            { ...this.props }
          />
        :
        <ComposerForm
          handleCancel={ this.handleCancel }
          { ...this.props }
        />
        }

      </div>
    )
  }
}

export default ReactCSS(Composer)
