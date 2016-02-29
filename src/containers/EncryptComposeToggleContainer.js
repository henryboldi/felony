import _ from 'lodash'
import { connect } from 'react-redux'
import { showComposeWithType } from '../actions/index'
import EncryptComposeToggle from '../components/encrypt/EncryptComposeToggle'

const mapStateToProps = (state) => {
  return {
    isVisible: _.some(_.values(state.uiReducer.get('activeKeys').toJS()), (value) => { return value }),
    expanded: state.uiReducer.get('expandedCompose'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showCompose: (type) => {
      dispatch(showComposeWithType(type))
    },
  }
}

const EncryptComposeToggleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncryptComposeToggle)

export default EncryptComposeToggleContainer
