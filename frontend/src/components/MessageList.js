import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

const MessageList = ({ messages, toggleEditMode, deleteMessage, onSaveChanges }) => (
  <ul>
    {messages.map(message =>
      <Message
        key={message.id}
        {...message}
        onSaveChanges={(text) => onSaveChanges(message.id, text)}
        toggleEditMode={() => toggleEditMode(message.id)}
        onDeleteClick={() => deleteMessage(message.id)}
      />
    )}
  </ul>
)

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    editMode: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onSaveChanges: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  deleteMessage: PropTypes.func.isRequired
}

export default MessageList
