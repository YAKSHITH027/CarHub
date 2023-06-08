import { Select } from '@chakra-ui/react'
import React from 'react'

const SortPrice = () => {
  return (
    <div>
      <Select placeholder='Sort by Price'>
        <option value={'asc'}>option1</option>
        <option value={'desc'}>option1</option>
      </Select>
    </div>
  )
}

export default SortPrice
