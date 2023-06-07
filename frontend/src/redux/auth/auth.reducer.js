const auth = {
  user: '',
}

export const reducer = (state = auth, action) => {
  const { type, payload } = action
  switch (type) {
    case 'this':
      return state

    default:
      return state
  }
}
