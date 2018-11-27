let nextMessageId = 0
// TODO: Move it to enviroment variables
const messagesUrl = `https://www.reddit.com/r/test.json`

export const fetchMessages = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_MESSAGES'
    })
    return fetch(messagesUrl)
      .then(response => response.json())
      .then(json => dispatch(setMessages(json)))
  }
}

export const setMessages = (messages) => ({
  type: 'SET_MESSAGES',
  messages: messages
})

export const addMessage = text => ({
  type: 'ADD_MESSAGE',
  id: nextMessageId++,
  text
})

export const editMessage = id => ({
  type: 'EDIT_MESSAGE',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleEditMode = id => ({
  type: 'TOGGLE_EDIT_MESSAGE',
  id
})

export const onSaveChanges = (id, text) => ({
  type: 'SAVE_MESSAGE_CHANGES',
  id,
  text
})

export const deleteMessage = id => ({
  type: 'DELETE_MESSAGE',
  id
})

export const toggleAddForm = text => ({
  type: 'TOGGLE_MESSAGE_FORM'
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DELETED: 'SHOW_DELETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
