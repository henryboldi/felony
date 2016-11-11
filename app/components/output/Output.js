import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import CopyToClipboard from 'react-copy-to-clipboard'
import colors from '../../assets/styles/variables/colors'

import { Icon } from '../common/index'

class Output extends Component {
  state = { copied: false }

  classes() { // eslint-disable-line
    return {
      'default': {
        wrap: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
          zIndex: '9999999',
          flexDirection: 'column',
          background: colors.bgDark,
          display: 'flex',
          transform: 'translateY(100%)',
          opacity: '0px',
          transition: 'all 200ms ease-in-out',
        },
        head: {
          background: '#2B272C',
          fontWeight: '300',
          padding: '10px 20px',
          paddingTop: '35px',
        },

        title: {
          fontSize: '20px',
        },
        icon: {
          width: '20px',
          marginRight: '10px',
          display: 'inline-block',
          verticalAlign: 'middle',
        },
        subtitle: {
          fontSize: '16px',
          color: 'rgba(255,255,255,.7)',
          marginTop: '10px',
        },
        text: {
          flex: '1',
          position: 'relative',
          margin: '0 20px',
          marginTop: '-10px',
        },
        textarea: {
          Absolute: '23px auto 10px auto',
          border: 'none',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
          padding: '10px 3%',
          color: '#333',
          borderRadius: '2px',
          fontSize: '14px',
          fontFamily: 'Andale Mono',
          marginTop: '5px',
        },
        actions: {
          marginTop: '-18px',
          height: '55px',
          padding: '20px',
        },
        confirm: {
          color: colors.bgDark,
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: colors.green,
          textDecoration: 'none',
          cursor: 'pointer',
          textAlign: 'center',
          display: 'block',
        },
        cancel: {
          color: 'rgba(255,255,255,.4)',
          textAlign: 'center',
          display: 'block',
          marginTop: '7px',
          cursor: 'pointer',
        },
      },
      'isShowingOutput': {
        wrap: {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
    }
  }

  componentWillReceiveProps = () => {
    this.state = { copied: false }
  }

  handleCancel = () => {
    this.props.setOutput('')
    this.props.toggleComposer()
  }
  handleNevermind = () => {
    this.props.toggleOutput()
  }

  handleKeyDown = (e) => {
    (e.keyCode === 27 && this.props.isShowingOutput) && this.handleCancel()
  }


  render() {
    return (
      <div>
        <div is="wrap">
          <div is="head">
            <div is="title">
              <div is="icon">
                <Icon name="check" color="#00E676" />
              </div>
            Success
          </div>
            <div is="subtitle">Share this anywhere on the web.</div>
          </div>
          <div is="text">
            <textarea is="textarea" value={ this.props.output } />
          </div>

          <div is="actions">
            <CopyToClipboard
              text={ this.props.output }
              onCopy={ () => {
                this.setState({ copied: true })
                this.props.clearSelectedKeys()
                setTimeout(() => this.handleCancel(), 1500)
              } }
            >
              <a is="link confirm">
                { this.state.copied ?
                'Copied ...Closing'
              :
                'Copy & Close'
              }</a>

            </CopyToClipboard>
            <div>
              <a
                is="link cancel"
                onClick={ () => {
                  this.setState({ copied: true })
                  this.handleCancel()
                } }
              >
                nevermind
              </a>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReactCSS(Output)
