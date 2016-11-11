import React, { Component } from 'react'

import HeaderKeyCopy from './HeaderKeyCopy'
import HeaderKeyStatusSpinner from './HeaderKeyStatusSpinner'
import HeaderKeyStatusTooltip from './HeaderKeyStatusTooltip'

class HeaderKeyStatus extends Component {
  state = { isShowingTooltip: false }

  setTooltip = (b) => {
    this.setState({ isShowingTooltip: b })
  }

  handleMouseEnter = () => {
    this.setTooltip(true)
  }

  handleMouseLeave = () => {
    this.setTooltip(false)
  }

  render() {
    return (
      <div>
        <div
          onMouseEnter={ this.handleMouseEnter }
          onMouseLeave={ this.handleMouseLeave }
        >
          { this.props.isGeneratingKey ?
            <div>
              <HeaderKeyStatusSpinner />
            </div>
          :
          <div>
            <HeaderKeyCopy
              alias={ this.props.alias }
              isCopied={ this.props.isCopied }
              toggleIsCopied={ this.props.toggleIsCopied }
            />
          </div>
          }
          { this.state.isShowingTooltip ?
            <div>
              <HeaderKeyStatusTooltip
                isGeneratingKey={ this.props.isGeneratingKey }
                isCopied={ this.props.isCopied }
              />
            </div>
          :
            null
          }
        </div>
      </div>
    )
  }
}

export default HeaderKeyStatus
