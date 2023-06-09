import React, { useEffect, useRef, useState } from 'react'

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
  const [priceRange, setPriceRange] = useState([0, 3000000])
  const [mileage, setMileageRange] = useState([0, 40])
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
  const debounce = useRef(null)
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
    debounce.current = setTimeout(() => {
      dispatch(getCars(params))
    }, 300)
    return () => {
      clearTimeout(debounce.current)
    }
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
      {/* <SortPrice /> */}
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
        min={0}
        max={40}
        title={'Mileage'}
        priceRange={mileage}
        step={3}
      />
      <ColorCheckbox onChange={handleColor} />
    </Flex>
  )
}

export default Filters
