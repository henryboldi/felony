import { connect } from 'react-redux'
import { toggleComposer, setOutput, clearSelectedKeys } from '../actions/index'
import Output from '../components/output/Output'

const mapStateToProps = (state) => {
  const output = state.uiReducer.get('output')
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

    clearSelectedKeys: () => {
      dispatch(clearSelectedKeys())
    },

    setOutput: (output) => {
      dispatch(setOutput(output))
    },
  }
}

const OutputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Output)

export default OutputContainer
