import { Avatar, Button, Flex, Image, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex
      p={'0.5rem'}
      boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
      align={'center'}
      justify={'space-between'}
      px='1rem'
    >
      <Image
        px={'0.7rem'}
        py='0.6rem'
        borderRadius={'md'}
        src='https://i.ibb.co/TRDL2L6/Car-1-removebg-preview-removebg-preview.png'
        width={'15rem'}
        bg={'gray.300'}
      />
      <Input placeholder='Search car' maxW='400px' />
      {false ? (
        <Flex gap='1rem'>
          <Button variant={'outline'}>Sign In</Button>
          <Button colorScheme='orange'>Sign Up</Button>
        </Flex>
      ) : (
        <Link to='/profile'>
          <Avatar name='yakshith' />
        </Link>
      )}
    </Flex>
  )
}

export default Navbar
