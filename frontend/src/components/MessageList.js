import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

const MessageList = ({ messages, toggleEditMode, editMessage, deleteMessage }) => (
  <ul>
    {messages.map(message =>
      <Message
        key={message._id}
        {...message}
        toggleEditMode={() => toggleEditMode(message._id)}
        onDeleteClick={() => deleteMessage(message._id)}
        onSaveClick={(text) => editMessage(message._id, text)}
      />
    )}
  </ul>
)

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    deleted: PropTypes.bool.isRequired,
    editMode: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onSaveClick: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  deleteMessage: PropTypes.func.isRequired
}

export default MessageList
