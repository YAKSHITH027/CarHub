import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/HomePage/Home'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'
import Profile from '../pages/Profile/Profile'
import SingleCarDetail from '../pages/SingleCarDetail/SingleCarDetail'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<SingleCarDetail />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default MainRoutes
