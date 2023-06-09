import axios from 'axios'
import * as types from './dealerCars.types'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../utils/firebase'
export const dealerCarsRequest = () => {
  return { type: types.DEALERS_REQUEST }
}
export const dealerCarsError = () => {
  return { type: types.DEALERS_ERROR }
}
export const dealerCarsGet = (payload) => {
  return { type: types.DEALERS_GET, payload }
}

export const getDealerCars = (token) => async (dispatch) => {
  dispatch(dealerCarsRequest())
  try {
    let res = await axios.get('https://carhub-mlki.onrender.com/cars/dealer', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    })

    dispatch(dealerCarsGet(res.data))
  } catch (error) {
    dispatch(dealerCarsError())
  }
}
export const addDealerCars = (token, data, file) => async (dispatch) => {
  dispatch(dealerCarsRequest())
  try {
    const fileRef = ref(storage, 'avatars/' + `image${Date.now()}`)
    const metadata = {
      contentType: 'image/jpeg',
    }

    await uploadBytes(fileRef, file, metadata)

    const avatarURL = await getDownloadURL(fileRef)
    console.log(avatarURL)
    data.img = avatarURL
    console.log(data)
    await axios.post('https://carhub-mlki.onrender.com/cars/add', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    })

    dispatch(getDealerCars(token))
  } catch (error) {
    dispatch(dealerCarsError())
  }
}
export const editDealerCars = (token, data, file, _id) => async (dispatch) => {
  dispatch(dealerCarsRequest())
  if (file) {
    const fileRef = ref(storage, 'avatars/' + `image${Date.now()}`)
    const metadata = {
      contentType: 'image/jpeg',
    }

    await uploadBytes(fileRef, file, metadata)

    const avatarURL = await getDownloadURL(fileRef)
    console.log(avatarURL)
    data.img = avatarURL
    console.log(data)
  }

  try {
    await axios.patch(
      `https://carhub-mlki.onrender.com/cars/update/${_id}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      }
    )
    dispatch(getDealerCars(token))
  } catch (error) {
    dispatch(dealerCarsError())
  }
}
export const deleteDealerCars = (token, _id) => async (dispatch) => {
  dispatch(dealerCarsRequest())

  try {
    await axios.delete(
      `https://carhub-mlki.onrender.com/cars/delete/${_id}`,

      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      }
    )
    dispatch(getDealerCars(token))
  } catch (error) {
    dispatch(dealerCarsError())
  }
}
