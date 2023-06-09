import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SingleCarCard from '../../components/HomePage/SingleCarCard'
import axios from 'axios'
import AddandEditModal from '../../components/Profile/AddandEditModal'
import { useDispatch, useSelector } from 'react-redux'
import { getDealerCars } from '../../redux/dealerCars/dealerCars.actions'

const Profile = () => {
  const dispatch = useDispatch()
  const userName = localStorage.getItem('userName')
  const token = localStorage.getItem('token')
  const { dealersCar, isLoading } = useSelector((store) => {
    return store.dealerCarsReducer
  })
  // console.log(dealerCars)

  useEffect(() => {
    dispatch(getDealerCars(token))
  }, [])
  if (isLoading)
    return (
      <Text textAlign={'center'} mt='3rem'>
        ...Loading
      </Text>
    )
  return (
    <Box>
      <Flex
        gap='4rem'
        minH={'5rem'}
        mt='2rem'
        justify={'center'}
        align={'center'}
      >
        <Heading fontSize={'1.4rem'} textTransform={'capitalize'}>
          Hello {userName}
        </Heading>
        <AddandEditModal />
      </Flex>
      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
          xl: 'repeat(4,1fr)',
        }}
        placeItems={'center'}
        gap={'1rem'}
        p={'1rem'}
      >
        {dealersCar?.map((item) => {
          return (
            <SingleCarCard key={item.price} {...item} currentUser={userName} />
          )
        })}
      </Grid>
    </Box>
  )
}

export default Profile
