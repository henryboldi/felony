import _ from 'lodash'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { toggleComposer, addKey, setOutput } from '../actions/index'
import Composer from '../components/composer/Composer'

const mapStateToProps = (state) => {
  const keychain = state.keychainReducer.get('keychain').toJS()
  const aliases = _.filter(keychain, key => {
    return key.privateKeyArmored !== null
  })
  const first = aliases[0] || null

  console.log(aliases)
  console.log('first', first)
  return {
    isShowingComposer: state.uiReducer.get('isShowingComposer'),
    composerType: state.uiReducer.get('composerType'),
    selectedKeychain: _.values(_.pick(keychain, (value, key) => {
      return state.uiReducer.get('selectedKeychain').toJS()[key]
    })),
    keychain: _.filter(keychain, key => {
      console.log(key)
      return key.privateKeyArmored === null
    }),
    alias: first,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleComposer: () => {
      dispatch(toggleComposer())
    },

    addKey: (key) => {
      dispatch(addKey(key))
    },

    setOutput: (output) => {
      dispatch(setOutput(output))
    },
  }
}

const ComposerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Composer)

export default ComposerContainer
