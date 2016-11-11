import React, { Component } from 'react'
import ReactCSS from 'reactcss'
import CopyToClipboard from 'react-copy-to-clipboard'

import { Icon } from '../common/index'

import colors from '../../assets/styles/variables/colors'

class HeaderKeyCopy extends Component {

  classes() { // eslint-disable-line
    return {
      'default': {
        copy: {
          cursor: 'pointer',
          alignSelf: 'flex-end',
          marginTop: '5px',
        },
      },
    }
  }

  render() {
    return (
      <div is="copy">
        <CopyToClipboard
          text={ this.props.alias.publicKeyArmored }
          onCopy={ () => {
            this.props.toggleIsCopied()
            setTimeout(() => {
              this.props.toggleIsCopied()
            }, 2000)
          } }
        >
          { this.props.isCopied ?
            <Icon
              name="check"
              color={ colors.green }
            />
          :
          <a>
            <Icon
              name="copy"
              color={ colors.primary }
            />
          </a>
          }
        </CopyToClipboard>
      </div>
    )
  }
}

export default ReactCSS(HeaderKeyCopy)
