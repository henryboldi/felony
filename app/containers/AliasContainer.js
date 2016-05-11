import { connect } from 'react-redux'
import { showComposerWithType } from '../actions/index'
import Alias from '../components/alias/Alias'

const mapStateToProps = (state) => {
  const aliases = _.filter(state.keychainReducer.get('keychain').toJS(), key => {
    return key.privateKeyArmored !== null
  })
  const first = aliases[0] || { name: '', email: '' }
  return {
    alias: first,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showComposer: (type) => {
      dispatch(showComposerWithType(type))
    },
  }
}

const AliasContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Alias)

export default AliasContainer
