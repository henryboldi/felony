import { connect } from 'react-redux'
import Immutable from 'immutable'
import { addBuddy, fetchBuddies, selectBuddy, showComposer } from '../actions/index'
import Buddies from '../components/buddies/Buddies'

const mapStateToProps = (state) => {
  return {
    // For `BuddiesList` component
    buddies: state.buddiesReducer.get('buddies').toJS(),
    selectedBuddies: state.uiReducer.get('selectedBuddies').toJS(),

    // For `BuddiesComposerOpener` component
    isShowingOpener: _.some(_.values(state.uiReducer.get('selectedBuddies').toJS()), (value) => { return value }),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBuddy: (key) => {
      dispatch(addBuddy(key))
    },

    fetchBuddies: () => {
      dispatch(fetchBuddies())
    },

    selectBuddy: (id) => {
      dispatch(selectBuddy(id))
    },

    showComposer: (type) => {
      dispatch(showComposer(type))
    },
  }
}

const BuddiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buddies)

export default BuddiesContainer
