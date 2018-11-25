import * as actions from './index'

describe('message actions', () => {
  it('addTodo should create ADD_MESSAGE action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_MESSAGE',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleMessage should create TOGGLE_MESSAGE action', () => {
    expect(actions.toggleMessage(1)).toEqual({
      type: 'TOGGLE_MESSAGE',
      id: 1
    })
  })
})
