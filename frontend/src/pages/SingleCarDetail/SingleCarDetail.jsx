import { Box, Flex, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleCarDetail = () => {
  const { id } = useParams()
  const [carData, setCarData] = useState({})

  const fetchData = async () => {
    try {
      let res = await axios.get(`https://carhub-mlki.onrender.com/cars/${id}`)
      setCarData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!carData.OEM)
    return (
      <Text textAlign={'center'} mt='3rem'>
        ...loading
      </Text>
    )
  return (
    <Box>
      <Flex justify={'center'} padding={'2rem'}>
        <Image
          src={carData?.img}
          alt='carimage'
          width='400px'
          height='300px'
          borderRadius={'1rem'}
        />
      </Flex>
      <Flex gap='4rem' p={'2rem'} justify={'center'}>
        <Flex flexDir={'column'} gap='0.5rem'>
          {Object.keys(carData)?.map((item) => {
            return (
              typeof carData[item] != 'object' &&
              item != 'img' &&
              item != 'userId' &&
              item != '_id' && (
                <Text key={item._id} textTransform={'capitalize'}>
                  {item} : {carData[item]}
                </Text>
              )
            )
          })}
        </Flex>
        <Flex flexDir={'column'} gap='0.5rem'>
          {Object.keys(carData?.OEM)?.map((item) => {
            return (
              item != '_id' && (
                <Text key={item._id}>
                  {item} : {carData?.OEM[item]}
                </Text>
              )
            )
          })}
        </Flex>
      </Flex>
    </Box>
  )
}

export default SingleCarDetail
