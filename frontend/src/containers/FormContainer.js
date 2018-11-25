import { connect } from 'react-redux'
import { addMessage, toggleAddForm } from '../actions'
import MessageForm from '../components/MessageForm'

const mapStateToProps = state => {
  return {
    visible: state.form.visible,
    currentText: state.form.currentText
  };
}

const mapDispatchToProps = (dispatch) => ({
  addMessage: (value) => {
    dispatch(addMessage(value))
    dispatch(toggleAddForm())
  },
  toggleAddForm: () => dispatch(toggleAddForm()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm)
