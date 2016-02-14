import { connect } from 'react-redux'
import Immutable from 'immutable'
import { addKey, selectKey } from '../actions/index'
import EncryptKeyList from '../components/encrypt/EncryptKeyList'

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    keys: state.keys.get('store'),
    active: state.keys.get('active').toJS(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTestAdd: (key) => {
      dispatch(addKey(key))
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
