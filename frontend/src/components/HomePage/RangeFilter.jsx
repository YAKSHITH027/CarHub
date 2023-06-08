import React from 'react'
import {
  Box,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react'
const RangeFilter = ({ min, max, title, priceRange, onChange, step }) => {
  return (
    <Box>
      <Text mb='1rem'>Select {title} Range</Text>
      <RangeSlider
        aria-label={['min', 'max']}
        defaultValue={priceRange}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack bg={'#F75D34'} />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} bg='#F75D34' />
        <RangeSliderThumb index={1} bg='#F75D34' />
      </RangeSlider>
      <Flex justify={'space-between'} textTransform={'capitalize'}>
        <Box>min:{priceRange[0]}</Box>
        <Box>max:{priceRange[1]}</Box>
      </Flex>
    </Box>
  )
}

export default RangeFilter
