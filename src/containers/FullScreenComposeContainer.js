import _ from 'lodash'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { toggleCompose, addKey } from '../actions/index'
import FullScreenCompose from '../components/common/FullScreenCompose'

const mapStateToProps = (state) => {
  return {
    expanded: state.uiReducer.get('expandedCompose'),
    type: state.uiReducer.get('composeType'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCompose: () => {
      dispatch(toggleCompose())
    },

    addKey: (key) => {
      dispatch(addKey(key))
    },
  }
}

const FullScreenComposeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullScreenCompose)

export default FullScreenComposeContainer
