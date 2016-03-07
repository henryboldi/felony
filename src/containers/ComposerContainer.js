import _ from 'lodash'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { toggleComposer } from '../actions/index'
import Composer from '../components/common/Composer'

const mapStateToProps = (state) => {
  return {
    isShowingComposer: state.uiReducer.get('isShowingComposer'),
    composerType: state.uiReducer.get('composerType'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleComposer: () => {
      dispatch(toggleComposer())
    },
  }
}

const ComposerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Composer)

export default ComposerContainer
