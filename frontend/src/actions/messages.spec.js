import * as actions from './index'

describe('message actions', () => {
  it('addMessage should create ADD_MESSAGE action', () => {
    expect(actions.addMessage('Use Redux')).toEqual({
      type: 'ADD_MESSAGE',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('editMessage should create EDIT_MESSAGE action', () => {
    expect(actions.editMessage(0)).toEqual({
      type: 'EDIT_MESSAGE',
      id: 0,
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleEditMode should create TOGGLE_EDIT_MESSAGE action', () => {
    expect(actions.toggleEditMode(1)).toEqual({
      type: 'TOGGLE_EDIT_MESSAGE',
      id: 1
    })
  })

  it('onSaveChanges should create SAVE_MESSAGE_CHANGES action', () => {
    expect(actions.onSaveChanges(1, 'Hey')).toEqual({
      type: 'SAVE_MESSAGE_CHANGES',
      id: 1,
      text: 'Hey'
    })
  })

  it('deleteMessage should create DELETE_MESSAGE action', () => {
    expect(actions.deleteMessage(1)).toEqual({
      type: 'DELETE_MESSAGE',
      id: 1
    })
  })

  it('toggleAddForm should create TOGGLE_MESSAGE_FORM action', () => {
    expect(actions.toggleAddForm()).toEqual({
      type: 'TOGGLE_MESSAGE_FORM'
    })
  })
})
