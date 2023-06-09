import * as types from './cars.types'
const initialState = {
  cars: [],
  isLoading: false,
  isError: false,
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.CAR_REQUEST:
      return { ...state, isLoading: true }
    case types.CAR_ERROR:
      return { ...state, isLoading: false, isError: true }
    case types.CAR_GET:
      return { ...state, cars: payload, isLoading: false }
    default:
      return state
  }
}
