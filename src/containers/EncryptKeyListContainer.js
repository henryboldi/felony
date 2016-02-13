import { connect } from 'react-redux'
import Immutable from 'immutable'
import { addKey } from '../actions/index'
import EncryptKeyList from '../components/encrypt/EncryptKeyList'

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    keys: state.keys,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTestAdd: (key) => {
      dispatch(addKey(key))
    },
  }
}

const EncryptKeyListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncryptKeyList)

export default EncryptKeyListContainer
