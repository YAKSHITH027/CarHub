import axios from 'axios'
import * as types from './cars.types'
export const carsRequest = () => {
  return { type: types.CAR_REQUEST }
}
export const carsError = () => {
  return { type: types.CAR_ERROR }
}
export const carsGet = (payload) => {
  return { type: types.CAR_GET, payload }
}

export const getCars = (params) => async (dispatch) => {
  console.log('hello', params)
  try {
    dispatch(carsRequest())
    let res = await axios.get('https://carhub-mlki.onrender.com/cars', {
      params: params,
    })
    dispatch(carsGet(res.data.allCars))
  } catch (error) {
    dispatch(carsError())
  }
}
