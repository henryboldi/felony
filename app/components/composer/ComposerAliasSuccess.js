import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import ComposerFormSubmit from './ComposerFormSubmit'

import colors from '../../assets/styles/variables/colors'

class ComposerAliasSuccess extends Component {
  classes() { // eslint-disable-line
    return {
      'default': {
        title: {
          textAlign: 'center',
          fontSize: '24px',
          width: '80%',
          margin: '0 auto',
          marginBottom: '20px',
        },
        body: {
          width: '80%',
          textAlign: 'center',
          margin: '0px auto 20px',
        },
        iframe: {
          border: 'none',
          margin: '0 auto',
          display: 'block',
          marginTop: '35px',
          marginBottom: '35px',
        },
        actions: {
          marginTop: '-10px',
          height: '40px',
          padding: '20px',
        },
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
        input: {
          border: 'solid 1px red',
        },
        confirm: {
          backgroundColor: '#BF1B23',
        },
      },
    }
  }

  render() {
    return (
      <div>
        <p is="title">Your keys are generating.</p>
        <p is="body">In the meantime, support easy to use encryption 😊</p>
        <iframe
          is="iframe"
          src="https://ghbtns.com/github-btn.html?user=henryboldi&repo=felony&type=star&count=true&size=large"
          frameBorder="0"
          scrolling="0"
          width="160px"
          height="30px"
        />
        <div is="actions">
          <ComposerFormSubmit
            onClick={ this.props.handleCancel }
            value="Enter Felony"
          />
        </div>
      </div>
    )
  }
}

export default ReactCSS.Hover(ReactCSS(ComposerAliasSuccess))
