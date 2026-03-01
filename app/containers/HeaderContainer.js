import { connect } from 'react-redux'
import _ from 'lodash'
import { showComposerWithType, toggleIsCopied, toggleComposer } from '../actions/index'
import Header from '../components/header/Header'

const mapStateToProps = (state) => {
  const aliases = _.filter(state.keychainReducer.get('keychain').toJS(), (key) => {
    return key.privateKeyArmored !== null
  })
  const first = aliases[0] || {
    name: '',
    email: '',
    privateKeyArmored: '',
    publicKeyArmored: '',
    avatar: '',
  }

  return {
    isCopied: state.uiReducer.get('isCopied'),
    isGeneratingKey: state.uiReducer.get('isGeneratingKey'),
    alias: first,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showComposer: (type) => {
      dispatch(showComposerWithType(type))
    },

    toggleIsCopied: () => {
      dispatch(toggleIsCopied())
    },

    toggleComposer: () => {
      dispatch(toggleComposer())
    },
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)

export default HeaderContainer
