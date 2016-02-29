import _ from 'lodash'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { toggleCompose } from '../actions/index'
import Compose from '../components/common/Compose'

const mapStateToProps = (state) => {
  return {
    expanded: state.uiReducer.get('expandedCompose'),
    type: state.uiReducer.get('composeType'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleCompose: () => {
      dispatch(toggleCompose())
    },
  }
}

const ComposeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Compose)

export default ComposeContainer
