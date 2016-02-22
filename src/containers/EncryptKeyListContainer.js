import { connect } from 'react-redux'
import Immutable from 'immutable'
import { addKey, fetchKeys, selectKey } from '../actions/index'
import EncryptKeyList from '../components/encrypt/EncryptKeyList'

const mapStateToProps = (state) => {
  return {
    keys: state.keyReducer.get('store').toJS(),
    active: state.uiReducer.get('activeKeys').toJS(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addKey: (key) => {
      dispatch(addKey(key))
    },

    fetchKeys: () => {
      dispatch(fetchKeys())
    },

    selectKey: (id) => {
      dispatch(selectKey(id))
    },
  }
}

const EncryptKeyListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncryptKeyList)

export default EncryptKeyListContainer
