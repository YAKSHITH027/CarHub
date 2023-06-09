import * as types from './auth.types'
export const userLogin = (payload) => {
  return { type: types.USER_LOGIN, payload }
}
export const userLogout = () => {
  return { type: types.USER_LOGOUT }
}
