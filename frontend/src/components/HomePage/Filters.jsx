import React, { useEffect, useState } from 'react'
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
import { useDispatch } from 'react-redux'
import { getCars } from '../../redux/cars/cars.actions'
const Filters = () => {
  const [priceRange, setPriceRange] = useState([0, 5000000])
  const [mileage, setMileageRange] = useState([0, 60])
  const [color, setColor] = useState([])
  const dispatch = useDispatch()

  const handlePriceRange = (e) => {
    setPriceRange(e)
  }
  const handleMileageRange = (e) => {
    setMileageRange(e)
  }
  const handleColor = (e) => {
    setColor(e)
  }
  useEffect(() => {
    let params = {}
    if (priceRange[0] > 0 || priceRange[1] < 3000000) {
      params.minPrice = priceRange[0]
      params.maxPrice = priceRange[1]
    }
    if (mileage[0] > 0 || mileage[1] < 60) {
      params.minMileage = mileage[0]
      params.maxMileage = mileage[1]
    }

    if (color.length) params.color = color
    console.log(params)
    dispatch(getCars(params))
  }, [priceRange, color, mileage])

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
        max={3000000}
        title={'Price'}
        priceRange={priceRange}
        step={100000}
      />
      <RangeFilter
        onChange={handleMileageRange}
        min={5}
        max={60}
        title={'Mileage'}
        priceRange={mileage}
        step={5}
      />
      <ColorCheckbox onChange={handleColor} />
    </Flex>
  )
}

export default Filters
