import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import {
  emailValidate,
  passwordValidate,
  usernameValidate,
} from '../../utils/validations'
import axios from 'axios'

const SignUp = () => {
  const [isLoading, setLoading] = useState(false)

  const navigate = useNavigate()
  const toast = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  async function handleLogin(data) {
    setLoading(true)
    try {
      let res = await axios.post(
        'https://carhub-mlki.onrender.com/user/register',
        data
      )

      if (res.status === 201) {
        toast({
          title: 'registered successfully',
          description: 'have a great day.',
          status: 'success',
          duration: 4000,
          position: 'top',
          isClosable: true,
        })
        reset()
        navigate('/signin')
      }

      setLoading(false)
    } catch (error) {
      toast({
        title: 'login failed',
        description: error.message,
        status: 'error',
        position: 'top',
        duration: 4000,
        isClosable: true,
      })
      setLoading(false)
      console.log(error)
    }
  }
  console.log(errors)
  // console.log("hello", register, handleSubmit);
  return (
    <Center w='100%' mt='8rem'>
      <Box
        mx='1'
        px='7rem'
        p='2rem'
        borderWidth='3px'
        borderRadius='lg'
        minW={{ base: '300px', md: '400px' }}
      >
        <Heading mb='4' size='lg' textAlign='center'>
          Sign Up
        </Heading>
        <form onSubmit={handleSubmit(handleLogin)}>
          <FormControl isInvalid={errors.userName}>
            <FormLabel>UserName</FormLabel>
            <Input
              textTransform={'none'}
              type='text'
              placeholder='Username'
              {...register('userName', usernameValidate)}
            />
            <FormErrorMessage>{errors.userName?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              textTransform={'none'}
              type='email'
              placeholder='email'
              {...register('email', emailValidate)}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>password</FormLabel>
            <Input
              type='password'
              placeholder='password'
              {...register('password', passwordValidate)}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            type='submit'
            colorScheme={'teal'}
            width='100%'
            isLoading={isLoading}
          >
            Submit
          </Button>
        </form>
        <Text mt={4}>
          Already have an account?{' '}
          <Link to={'/signin'} color='teal.500' as={RouterLink}>
            Log In
          </Link>{' '}
          instead
        </Text>
      </Box>
    </Center>
  )
}

export default SignUp
