import * as types from './auth.types'
const initialState = {
  user: '' || localStorage.getItem('userName'),
  isLoading: false,
  isError: false,
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.USER_LOGIN:
      return { ...state, user: payload }
    case types.USER_LOGOUT:
      return { ...state, user: '' }
    default:
      return state
  }
}
