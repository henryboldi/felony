import _ from 'lodash'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { toggleCompose } from '../actions/index'
import EncryptCompose from '../components/encrypt/EncryptCompose'

const mapStateToProps = (state) => {
  return {
    isVisible: _.some(_.values(state.keys.get('active').toJS()), (value) => { return value }),
    expanded: state.ui.get('expandedCompose'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleCompose: () => {
      dispatch(toggleCompose())
    },
  }
}

const EncryptComposeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncryptCompose)

export default EncryptComposeContainer
