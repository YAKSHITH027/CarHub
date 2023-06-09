import * as types from './dealerCars.types'
export const dealerCarsRequest = () => {
  return { type: types.DEALERS_REQUEST }
}
export const dealerCarsError = () => {
  return { type: types.DEALERS_ERROR }
}
export const dealerCarsGet = (payload) => {
  return { type: types.DEALERS_GET, payload }
}
