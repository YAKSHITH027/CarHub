import React, { useEffect, useState } from 'react'
import SingleCarCard from './SingleCarCard'
import { Box, Grid, Skeleton } from '@chakra-ui/react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const CarList = () => {
  const data = [
    {
      kms: 50000,
      majorScratches: 'Yes',
      price: 150300,
      orginalPaint: 'No',
      numberOfAccidents: 1,
      prevBuyers: 2,
      registrationPlace: 'City XYZ',
      OEM: {
        modelName: 'Toyota Camry',
        yearOfModel: 2022,
        color: 'Red',
        mileage: 5000,
        power: 200,
        maxSpeed: 180,
      },
      userId: '1234567890',
      img: 'https://images10.gaadi.com/usedcar_image/original/usedcar_1_727151686224004_1686224042.jpg?imwidth=640',
      title: 'Duster this',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      kms: 50000,
      majorScratches: 'Yes',
      price: 160300,
      orginalPaint: 'No',
      numberOfAccidents: 1,
      prevBuyers: 2,
      registrationPlace: 'City XYZ',
      OEM: {
        modelName: 'Toyota Camry',
        yearOfModel: 2022,
        color: 'Red',
        mileage: 5000,
        power: 200,
        maxSpeed: 180,
      },
      userId: '1234567890',
      img: 'https://images10.gaadi.com/usedcar_image/original/usedcar_1_727151686223886_1686223920.jpg?imwidth=640',
      title: 'Duster',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      kms: 50000,
      majorScratches: 'Yes',
      price: 150040,
      orginalPaint: 'No',
      numberOfAccidents: 1,
      prevBuyers: 2,
      registrationPlace: 'City XYZ',
      OEM: {
        modelName: 'Toyota Camry',
        yearOfModel: 2022,
        color: 'Red',
        mileage: 5000,
        power: 200,
        maxSpeed: 180,
      },
      userId: '1234567890',
      img: 'https://images10.gaadi.com/usedcar_image/original/usedcar_1_727151686224004_1686224042.jpg?imwidth=640',
      title: 'Duster',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      kms: 50000,
      majorScratches: 'Yes',
      price: 1500520,
      orginalPaint: 'No',
      numberOfAccidents: 1,
      prevBuyers: 2,
      registrationPlace: 'City XYZ',
      OEM: {
        modelName: 'Toyota Camry',
        yearOfModel: 2022,
        color: 'Red',
        mileage: 5000,
        power: 200,
        maxSpeed: 180,
      },
      userId: '1234567890',
      img: 'https://images10.gaadi.com/usedcar_image/original/usedcar_1_727151686224004_1686224042.jpg?imwidth=640',
      title: 'Duster',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]
  // const [list, setList] = useState([])
  // let fetch = async () => {
  //   let res = await axios.get('https://carhub-mlki.onrender.com/cars')
  //   setList(res.data.allCars)
  // }
  // useEffect(() => {
  //   fetch()
  // }, [])
  const { cars, isLoading } = useSelector((store) => {
    return store.carsReducer
  })
  console.log('is', isLoading)
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
