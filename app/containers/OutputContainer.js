import _ from 'lodash'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { toggleComposer, setOutput } from '../actions/index'
import Output from '../components/output/Output'

const mapStateToProps = (state) => {
  const output = state.uiReducer.get('output')
  console.log('output!!!!!!!', output)
  let isShowingOutput = false
  if (output.length > 1) {
    isShowingOutput = true
  }

  return {
    output,
    isShowingOutput,
    composerType: state.uiReducer.get('composerType'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleComposer: () => {
      dispatch(toggleComposer())
    },

    setOutput: (output) => {
      dispatch(setOutput(output))
    },
  }
}

const OutputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Output)

export default OutputContainer
