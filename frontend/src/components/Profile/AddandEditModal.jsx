import React, { useEffect, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  useDisclosure,
  Input,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  useToast,
  Box,
  Image,
  Textarea,
} from '@chakra-ui/react'
import axios from 'axios'
import { emptyValidate } from '../../utils/validations'
import { useForm } from 'react-hook-form'
import { storage } from '../../utils/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useDispatch } from 'react-redux'
import { addDealerCars } from '../../redux/dealerCars/dealerCars.actions'
function AddandEditModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [suggesions, setSuggestions] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [text, setText] = useState('')
  const [picked, setPicked] = useState({})
  const [file, setFile] = useState('')
  const [url, setUrl] = useState('')
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const fetchSuggestion = async () => {
    if (!text) return

    try {
      const res = await axios(
        `https://carhub-mlki.onrender.com/oem?text=${text}`
      )

      setSuggestions(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleClickSuggetion = (data) => {
    setPicked(data)
    setText('')
    setSuggestions([])
  }
  const toast = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const handleChangeFile = (e) => {
    if (e.target.files.length) {
      setUrl(URL.createObjectURL(e.target.files[0]))
      setFile(e.target.files[0])
    }
  }

  async function handleLogin(data) {
    if (!picked.modelName) {
      toast({
        title: 'Please select car Specification',

        status: 'success',
        duration: 4000,
        position: 'top',
        isClosable: true,
      })
      return
    }
    if (!file) {
      toast({
        title: 'Please select car Image',

        status: 'success',
        duration: 4000,
        position: 'top',
        isClosable: true,
      })
      return
    }
    setLoading(true)
    data.OEM = picked

    dispatch(addDealerCars(token, data, file))
    setLoading(false)
    toast({
      title: 'Car added successfully',
      description: 'have a great day.',
      status: 'success',
      duration: 4000,
      position: 'top',
      isClosable: true,
    })
    onClose()
  }
  useEffect(() => {
    fetchSuggestion()
  }, [text])

  return (
    <>
      <Button onClick={onOpen} colorScheme='teal'>
        Add Car
      </Button>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size={'5xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Car</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text my='0.5rem'>Search Car Specification</Text>
            <Box pos={'relative'}>
              <Input
                placeholder='Search for specification ex: mahindra'
                value={text}
                onChange={handleChange}
              />
              {text && (
                <Box
                  pos={'absolute'}
                  top='3rem'
                  borderWidth={'1px'}
                  width={'full'}
                  bg={'white'}
                  zIndex={'100'}
                >
                  {suggesions.map((item) => {
                    return (
                      <Text
                        key={item._id}
                        p='0.4rem'
                        bg='white'
                        onClick={() => {
                          handleClickSuggetion(item)
                        }}
                      >
                        {item.modelName}
                      </Text>
                    )
                  })}
                </Box>
              )}
            </Box>

            {picked.modelName && (
              <Flex flexDir={'column'} gap='1rem' mt='1rem' p='1rem'>
                <Flex gap={'3rem'}>
                  <Text>ModelName:{picked.modelName}</Text>
                  <Text>Year of Model:{picked.yearOfModel}</Text>
                  <Text>Original Price:{picked.price}</Text>
                </Flex>
                <Flex gap={'3rem'}>
                  <Text>color:{picked.colors}</Text>
                  <Text>mileage:{picked.mileage}</Text>
                  <Text>power:{picked.power}</Text>
                  <Text>maxSpeed:{picked.maxSpeed}</Text>
                </Flex>
              </Flex>
            )}
            <Text my='1rem'>Extra details</Text>
            <Box>
              <form onSubmit={handleSubmit(handleLogin)}>
                <FormControl isInvalid={errors.title}>
                  <FormLabel>Title</FormLabel>
                  <Input
                    textTransform={'none'}
                    type='text'
                    placeholder='title'
                    {...register('title', emptyValidate)}
                  />
                  <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
                </FormControl>

                <Box my='1rem'>
                  <Image
                    width='300px'
                    height='200px'
                    borderRadius={'md'}
                    opacity={url ? 0.8 : 0.5}
                    src={
                      url
                        ? url
                        : 'https://cdn.dribbble.com/users/264129/screenshots/3520651/drbl_daily_ui_031.gif'
                    }
                  />
                  <Button colorScheme='blackAlpha' mt='1rem'>
                    <FormLabel
                      fontSize={'1.2rem'}
                      pt='5px'
                      width={'full'}
                      textAlign={'center'}
                    >
                      select image
                      <Input
                        type='file'
                        accept='image/*'
                        onChange={handleChangeFile}
                        display={'none'}
                      />
                    </FormLabel>
                  </Button>
                </Box>
                {/* kms */}
                <Flex gap='1rem' justify={'space-around'}>
                  <FormControl isInvalid={errors.kms}>
                    <FormLabel>kms</FormLabel>
                    <Input
                      type='number'
                      placeholder='ex: 1200'
                      {...register('kms', emptyValidate)}
                    />
                    <FormErrorMessage>{errors.kms?.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.price}>
                    <FormLabel>price</FormLabel>
                    <Input
                      type='number'
                      placeholder='ex : 400000'
                      {...register('price', emptyValidate)}
                    />
                    <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.majorScratches}>
                    <FormLabel>majorScratches</FormLabel>
                    <Input
                      type='text'
                      placeholder='ex : Yes/No'
                      {...register('majorScratches', emptyValidate)}
                    />
                    <FormErrorMessage>
                      {errors.majorScratches?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.orginalPaint}>
                    <FormLabel>orginalPaint</FormLabel>
                    <Input
                      type='text'
                      placeholder='ex : Red'
                      {...register('orginalPaint', emptyValidate)}
                    />
                    <FormErrorMessage>
                      {errors.orginalPaint?.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex gap='1rem' justify={'space-around'} mt='2rem'>
                  <FormControl isInvalid={errors.numberOfAccidents}>
                    <FormLabel>numberOfAccidents</FormLabel>
                    <Input
                      type='number'
                      placeholder='ex: 3'
                      {...register('numberOfAccidents', emptyValidate)}
                    />
                    <FormErrorMessage>
                      {errors.numberOfAccidents?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.prevBuyers}>
                    <FormLabel>prevBuyers</FormLabel>
                    <Input
                      type='number'
                      placeholder='ex : 2'
                      {...register('prevBuyers', emptyValidate)}
                    />
                    <FormErrorMessage>
                      {errors.prevBuyers?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.registrationPlace}>
                    <FormLabel>registrationPlace</FormLabel>
                    <Input
                      type='text'
                      placeholder='ex : udupi'
                      {...register('registrationPlace', emptyValidate)}
                    />
                    <FormErrorMessage>
                      {errors.registrationPlace?.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
                <FormControl isInvalid={errors.desc}>
                  <FormLabel>desc</FormLabel>
                  <Textarea
                    type='text'
                    placeholder='desc'
                    {...register('desc', emptyValidate)}
                  />
                  <FormErrorMessage>{errors.desc?.message}</FormErrorMessage>
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
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddandEditModal
