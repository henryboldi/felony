import { connect } from 'react-redux'
import _ from 'lodash'
import { addKey, fetchKeychain, selectKey, showComposerWithType } from '../actions/index'
import Keychain from '../components/keychain/Keychain'

const mapStateToProps = (state) => {
  return {
    // For `KeychainList` component
    keychain: _.filter(state.keychainReducer.get('keychain').toJS(), (key) => {
      return key.privateKeyArmored === null
    }),
    selectedKeychain: state.uiReducer.get('selectedKeychain').toJS(),

    // For `KeychainComposerOpener` component
    isShowingOpener: _.some(_.values(state.uiReducer.get('selectedKeychain').toJS()), (value) => {
      return value
    }),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addKey: (key) => {
      dispatch(addKey(key))
    },

    fetchKeychain: () => {
      dispatch(fetchKeychain())
    },

    selectKey: (id) => {
      dispatch(selectKey(id))
    },

    showComposer: (type) => {
      dispatch(showComposerWithType(type))
    },
  }
}

const KeychainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Keychain)

export default KeychainContainer
