import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import EditModal from '../Profile/EditModal'
import { useDispatch } from 'react-redux'
import { deleteDealerCars } from '../../redux/dealerCars/dealerCars.actions'

const SingleCarCard = (props) => {
  const {
    _id,
    img,
    title,
    price,
    kms,
    OEM,
    orginalPaint,
    handleEdit,

    currentUser,
  } = props
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast()
  const { userName, token } = JSON.parse(localStorage.getItem('userInfo'))

  const handleRoute = () => {
    navigate(`/${_id}`)
  }
  const handleDelete = (_id) => {
    dispatch(deleteDealerCars(token, _id))
    toast({
      title: 'Car deleted successfully',
      description: 'have a great day.',
      status: 'success',
      duration: 4000,
      position: 'top',
      isClosable: true,
    })
  }
  return (
    <Flex
      minW={'250px'}
      flexDir={'column'}
      borderRadius={'md'}
      boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
    >
      <Box onClick={handleRoute} cursor={'pointer'}>
        <Image src={img} alt={title} width='350px' height='200px' />
        <Box p={'1rem'}>
          <Flex gap={'1rem'} align={'center'}>
            <Heading fontWeight={'500'} fontSize={'1.2rem'}>
              {title.substring(0, 20)}
              {title.length >= 20 && '...'}
            </Heading>
            <Text
              fontWeight={'500'}
              fontSize={{ base: '0.9rem', md: '1.1rem', lg: '1.3rem' }}
            >
              ₹{price} Lacks
            </Text>
          </Flex>
          <Flex my='5px'>
            <Text fontSize={'1.1rem'} fontWeight={'700'}>
              {' '}
              Color:{orginalPaint}
            </Text>
            <Text fontSize={'1.1rem'} fontWeight={'700'}>
              | Mileage:{OEM.mileage}
            </Text>
          </Flex>
          <Flex gap={'0.7rem'} align={'center'}>
            <Text>{kms}kms</Text>
            <Text>| Petrol</Text>
            <Text>| Manual</Text>
          </Flex>
          <Text color={'orange.500'}>More Details</Text>
        </Box>
      </Box>
      {currentUser && (
        <Flex justify={'space-between'} px='1rem' pb='0.5rem'>
          <EditModal {...props} />
          <Button onClick={() => handleDelete(_id)} colorScheme='red'>
            Delete
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

export default SingleCarCard
