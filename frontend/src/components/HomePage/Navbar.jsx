import { Avatar, Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../../redux/auth/auth.actions'
import SearchBar from './SearchBar'

const Navbar = () => {
  const user = useSelector((store) => store.authReducer.user)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(userLogout())
    localStorage.setItem('userName', '')
  }
  return (
    <Flex
      p={'0.5rem'}
      boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
      align={'center'}
      justify={'space-between'}
      px='1rem'
    >
      <Link to='/'>
        <Image
          px={'0.7rem'}
          py='0.6rem'
          borderRadius={'md'}
          src='https://i.ibb.co/FnGS38Q/Buy-Car-removebg-preview.png'
          width={'10rem'}
          bg={'gray.300'}
        />
      </Link>
      <Box maxW='400px' width={'50%'}>
        <SearchBar />
      </Box>
      {!user ? (
        <Flex gap='1rem'>
          <Link to='/signin'>
            <Button variant={'outline'}>Sign In</Button>
          </Link>
          <Link to='/signup'>
            <Button colorScheme='orange'>Sign Up</Button>
          </Link>
        </Flex>
      ) : (
        <Flex gap={'1rem'} align={'center'}>
          <Link to='/profile'>
            <Button>
              <Flex align={'center'} gap={'1rem'}>
                <Text fontSize={'1rem'}>Profile</Text>
                <Avatar size={'sm'} name={user} />
              </Flex>
            </Button>
          </Link>
          <Button onClick={handleClick}>Logout</Button>
        </Flex>
      )}
    </Flex>
  )
}

export default Navbar
