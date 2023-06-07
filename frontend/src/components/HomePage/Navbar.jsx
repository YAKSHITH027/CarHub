import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex p={'0.5rem'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}>
      <Image
        px={'0.7rem'}
        py='0.3rem'
        borderRadius={'md'}
        src='https://i.ibb.co/TRDL2L6/Car-1-removebg-preview-removebg-preview.png'
        width={'15rem'}
      />
    </Flex>
  )
}

export default Navbar
