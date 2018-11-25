const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          deleted: false,
          editMode: false
        }
      ]
    case 'TOGGLE_EDIT_MESSAGE':
      return state.map(message =>
        (message.id === action.id)
          ? {...message, editMode: !message.editMode}
          : message
      )
    case 'SAVE_MESSAGE_CHANGES':
      return state.map(message =>
        (message.id === action.id)
          ? {...message, text: action.text, editMode: !message.editMode}
          : message
      )
    case 'DELETE_MESSAGE':
      return state.map(message =>
        (message.id === action.id)
          ? {...message, deleted: !message.deleted}
          : message
      )
    default:
      return state
  }
}

export default messages
