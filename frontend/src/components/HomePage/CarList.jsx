import React, { useEffect, useState } from 'react'
import SingleCarCard from './SingleCarCard'
import { Grid } from '@chakra-ui/react'
import axios from 'axios'

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
  const [list, setList] = useState([])
  let fetch = async () => {
    let res = await axios.get('https://carhub-mlki.onrender.com/cars')
    setList(res.data.allCars)
  }
  useEffect(() => {
    fetch()
  }, [])
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
      {list?.map((item) => {
        return <SingleCarCard key={item.price} {...item} />
      })}
    </Grid>
  )
}

export default CarList
