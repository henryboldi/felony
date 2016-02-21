import { connect } from 'react-redux'
import { showComposeWithType } from '../actions/index'
import FloatingButton from '../components/floating-button/FloatingButton'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showCompose: (type) => {
      console.log(type)
      dispatch(showComposeWithType(type))
    },
  }
}

const FloatingButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FloatingButton)

export default FloatingButtonContainer
