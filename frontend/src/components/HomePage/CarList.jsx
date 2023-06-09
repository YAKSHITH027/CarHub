import React, { useEffect, useState } from 'react'
import SingleCarCard from './SingleCarCard'
import { Box, Grid, Skeleton } from '@chakra-ui/react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const CarList = () => {
  const { cars, isLoading } = useSelector((store) => {
    return store.carsReducer
  })

  return (
    <Grid
      templateColumns={{
        base: 'repeat(1,1fr)',
        md: 'repeat(2,1fr)',
        xl: 'repeat(3,1fr)',
      }}
      placeItems={'center'}
      gap={'1rem'}
      p={'1rem'}
    >
      {isLoading
        ? new Array(6).fill(1).map((item) => {
            return (
              <Box>
                <Skeleton minW={'350px'} height={'200px'} />
                <Skeleton my='0.7rem' minW={'350px'} height={'15px'} />
                <Skeleton my='0.7rem' minW={'350px'} height={'15px'} />
                <Skeleton minW={'350px'} height={'15px'} />
              </Box>
            )
          })
        : cars?.map((item) => {
            return <SingleCarCard key={item._id} {...item} />
          })}
    </Grid>
  )
}

export default CarList
