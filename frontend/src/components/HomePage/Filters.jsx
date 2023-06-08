import React, { useState } from 'react'
import {
  Box,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react'
import RangeFilter from './RangeFilter'
import ColorCheckbox from './ColorCheckbox'
import SortPrice from './SortPrice'
const Filters = () => {
  const [priceRange, setPriceRange] = useState([0, 5000000])
  const [mileage, setMileageRange] = useState([0, 100])
  const [color, setColor] = useState([])
  const handlePriceRange = (e) => {
    setPriceRange(e)
  }
  const handleMileageRange = (e) => {
    setMileageRange(e)
  }
  return (
    <Flex
      flexDir={'column'}
      gap='2rem'
      width='25%'
      minW={'300px'}
      px='2rem'
      py='2rem'
    >
      <SortPrice />
      <RangeFilter
        onChange={handlePriceRange}
        min={0}
        max={5000000}
        title={'Price'}
        priceRange={priceRange}
        step={100000}
      />
      <RangeFilter
        onChange={handleMileageRange}
        min={5}
        max={100}
        title={'Mileage'}
        priceRange={mileage}
        step={5}
      />
      <ColorCheckbox />
    </Flex>
  )
}

export default Filters
