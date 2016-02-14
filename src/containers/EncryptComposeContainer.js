import { connect } from 'react-redux'
import Immutable from 'immutable'
import { toggleEncryptCompose } from '../actions/index'
import EncryptCompose from '../components/encrypt/EncryptCompose'

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

const EncryptComposeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncryptCompose)

export default EncryptComposeContainer
