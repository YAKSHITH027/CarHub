import * as types from './dealerCars.types'
const initialState = {
  dealersCar: [],
  isLoading: false,
  isError: false,
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.DEALERS_REQUEST:
      return { ...state, isLoading: true }
    case types.DEALERS_ERROR:
      return { ...state, isLoading: false, isError: true }
    case types.DEALERS_GET:
      return { ...state, dealersCar: payload }
    default:
      return state
  }
}
