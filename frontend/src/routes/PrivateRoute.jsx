import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const PrivateRoute = ({ children }) => {
  const user = useSelector((store) => {
    return store.authReducer.user
  })

  if (!user) {
    return <Navigate to='/signin' />
  }
  return children
}

export default PrivateRoute
