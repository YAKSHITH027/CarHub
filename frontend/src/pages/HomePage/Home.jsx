import {
  Box,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react'
import React from 'react'
import Filters from '../../components/HomePage/Filters'
import CarList from '../../components/HomePage/CarList'

const Home = () => {
  return (
    <Flex paddingTop={'2rem'}>
      <Box display={{ base: 'none', lg: 'block' }}>
        <Filters />
      </Box>
      <Box flexGrow={'1'}>
        <CarList />
      </Box>
    </Flex>
  )
}

export default Home
