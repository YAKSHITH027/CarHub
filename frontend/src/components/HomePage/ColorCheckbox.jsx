import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { easeIn } from 'framer-motion'
import React from 'react'

const ColorCheckbox = () => {
  return (
    <CheckboxGroup
      colorScheme='orange'
      defaultValue={[]}
      onChange={(e) => console.log(e)}
    >
      <Stack spacing={[1, 5]} direction={['column']}>
        <Checkbox value='naruto'>Naruto</Checkbox>
        <Checkbox value='sasuke'>Sasuke</Checkbox>
        <Checkbox value='kakashi'>Kakashi</Checkbox>
      </Stack>
    </CheckboxGroup>
  )
}

export default ColorCheckbox
