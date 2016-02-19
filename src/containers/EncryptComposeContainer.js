import _ from 'lodash'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { toggleEncryptCompose } from '../actions/index'
import EncryptCompose from '../components/encrypt/EncryptCompose'

const mapStateToProps = (state) => {
  return {
    isVisible: _.some(_.values(state.keys.get('active').toJS()), (value) => { return value }),
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
