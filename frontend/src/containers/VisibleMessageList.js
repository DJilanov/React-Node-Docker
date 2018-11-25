import { connect } from 'react-redux'
import { toggleEditMode, deleteMessage, VisibilityFilters, onSaveChanges } from '../actions'
import MessageList from '../components/MessageList'

const getVisibleTodos = (messages, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return messages
    case VisibilityFilters.SHOW_DELETED:
      return messages.filter(t => t.deleted)
    case VisibilityFilters.SHOW_ACTIVE:
      return messages.filter(t => !t.deleted)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  messages: getVisibleTodos(state.messages, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  deleteMessage: id => dispatch(deleteMessage(id)),
  toggleEditMode: id => dispatch(toggleEditMode(id)),
  onSaveChanges: (id, text) => dispatch(onSaveChanges(id, text)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList)