import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { easeIn } from 'framer-motion'
import React from 'react'

const ColorCheckbox = ({ onChange }) => {
  return (
    <CheckboxGroup colorScheme='orange' defaultValue={[]} onChange={onChange}>
      <Stack spacing={[1, 5]} direction={['column']}>
        <Checkbox value='white'>White</Checkbox>
        <Checkbox value='red'>Red</Checkbox>
        <Checkbox value='black'>Black</Checkbox>
        <Checkbox value='grey'>Grey</Checkbox>
      </Stack>
    </CheckboxGroup>
  )
}

export default ColorCheckbox
