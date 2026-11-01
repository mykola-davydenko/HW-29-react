export const addContact = (name, number) => {
  return {
    type: 'addContact',
    payload: {
      id: Date.now().toString(),
      name,
      number,
    },
  }
}

export const deleteContact = id => {
  return {
    type: 'deleteContact',
    payload: id,
  }
}

export const setFilter = value => {
  return {
    type: 'setFilter',
    payload: value,
  }
}
