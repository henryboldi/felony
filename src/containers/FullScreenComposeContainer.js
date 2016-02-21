import _ from 'lodash'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { toggleEncryptCompose } from '../actions/index'
import FullScreenCompose from '../components/common/FullScreenCompose'

const mapStateToProps = (state) => {
  return {
    expanded: state.app.get('expandedEncryptCompose'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleEncrypt: () => {
      dispatch(toggleEncryptCompose())
    },
  }
}

const FullScreenComposeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullScreenCompose)

export default FullScreenComposeContainer
