const initialState = {
  contacts: [],
  filter: '',
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      }
    case 'deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      }
    case 'setFilter':
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state
  }
}
