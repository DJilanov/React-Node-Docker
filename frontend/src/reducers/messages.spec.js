import messages from './messages'

describe('inbox reducer', () => {
  it('should handle initial state', () => {
    expect(
      messages(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_MESSAGE', () => {
    expect(
      messages([], {
        type: 'ADD_MESSAGE',
        text: 'Run the tests',
        id: 0
      })
    ).toEqual([
      {
        text: 'Run the tests',
        deleted: false,
        editMode: false,
        id: 0
      }
    ])

    expect(
      messages([
        {
          text: 'Run the tests',
          deleted: false,
          editMode: false,
          id: 0
        }
      ], {
        type: 'ADD_MESSAGE',
        text: 'Use Redux',
        editMode: false,
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        deleted: false,
        editMode: false,
        id: 0
      }, {
        text: 'Use Redux',
        deleted: false,
        editMode: false,
        id: 1
      }
    ])

    expect(
      messages([
        {
          text: 'Run the tests',
          deleted: false,
          editMode: false,
          id: 0
        }, {
          text: 'Use Redux',
          deleted: false,
          editMode: false,
          id: 1
        }
      ], {
        type: 'ADD_MESSAGE',
        text: 'Fix the tests',
        id: 2
      })
    ).toEqual([
      {
        text: 'Run the tests',
        deleted: false,
        editMode: false,
        id: 0
      }, {
        text: 'Use Redux',
        deleted: false,
        editMode: false,
        id: 1
      }, {
        text: 'Fix the tests',
        deleted: false,
        editMode: false,
        id: 2
      }
    ])
  })

  it('should handle DELETE_MESSAGE', () => {
    expect(
      messages([
        {
          text: 'Run the tests',
          deleted: false,
          editMode: false,
          id: 1
        }, {
          text: 'Use Redux',
          deleted: false,
          editMode: false,
          id: 0
        }
      ], {
        type: 'DELETE_MESSAGE',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        deleted: true,
        editMode: false,
        id: 1
      }, {
        text: 'Use Redux',
        deleted: false,
        editMode: false,
        id: 0
      }
    ])
  })

  it('should handle TOGGLE_EDIT_MESSAGE', () => {
    expect(
      messages([
        {
          text: 'Run the tests',
          deleted: false,
          editMode: false,
          id: 1
        }, {
          text: 'Use Redux',
          deleted: false,
          editMode: false,
          id: 0
        }
      ], {
        type: 'TOGGLE_EDIT_MESSAGE',
        id: 1,
      })
    ).toEqual([
      {
        text: 'Run the tests',
        deleted: false,
        editMode: true,
        id: 1
      }, {
        text: 'Use Redux',
        deleted: false,
        editMode: false,
        id: 0
      }
    ])
  })

  it('should handle SAVE_MESSAGE_CHANGES', () => {
    expect(
      messages([
        {
          text: 'Run the tests',
          deleted: false,
          editMode: false,
          id: 1
        }, {
          text: 'Use Redux',
          deleted: false,
          editMode: false,
          id: 0
        }
      ], {
        type: 'SAVE_MESSAGE_CHANGES',
        id: 1,
        text: 'Dont use redux'
      })
    ).toEqual([
      {
        text: 'Dont use redux',
        deleted: false,
        editMode: true,
        id: 1
      }, {
        text: 'Use Redux',
        deleted: false,
        editMode: false,
        id: 0
      }
    ])
  })
})
