import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SingleCarCard from '../../components/HomePage/SingleCarCard'
import axios from 'axios'
import AddandEditModal from '../../components/Profile/AddandEditModal'

const Profile = () => {
  const [addedCars, setAddedCars] = useState([])
  const { userName } = JSON.parse(localStorage.getItem('userInfo'))
  let fetch = async () => {
    let res = await axios.get('https://carhub-mlki.onrender.com/cars/dealer', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${JSON.parse(localStorage.getItem('userInfo')).token}`,
      },
    })
    console.log(res)
    setAddedCars(res.data)
  }
  useEffect(() => {
    fetch()
  }, [])
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
        {addedCars?.map((item) => {
          return (
            <SingleCarCard
              key={item.price}
              {...item}
              currentUser='yes'
              handleEdit={(id) => {
                console.log('hello', id)
              }}
            />
          )
        })}
      </Grid>
    </Box>
  )
}

export default Profile
