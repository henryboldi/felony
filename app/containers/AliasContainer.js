import { connect } from 'react-redux'
import { showComposerWithType } from '../actions/index'
import Alias from '../components/alias/Alias'

const mapStateToProps = (state) => {
  return {
    aliases: _.filter(state.keychainReducer.get('keychain').toJS(), key => { return key.privateKeyArmored == '' }),
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
