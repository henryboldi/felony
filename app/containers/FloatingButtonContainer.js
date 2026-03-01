import { connect } from 'react-redux'
import { showComposerWithType } from '../actions/index'
import FloatingButton from '../components/floating-button/FloatingButton'

const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showComposer: (type) => {
      dispatch(showComposerWithType(type))
    },
  }
}

const FloatingButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FloatingButton)

export default FloatingButtonContainer
