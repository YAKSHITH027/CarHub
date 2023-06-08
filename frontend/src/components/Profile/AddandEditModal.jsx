import React, { useState } from 'react'
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
  Box,
} from '@chakra-ui/react'
import axios from 'axios'
function AddandEditModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [suggesions, setSuggestions] = useState([])
  const [text, setText] = useState('')

  const handleChange = async (e) => {
    setText(e.target.value)
    try {
      const res = await axios(
        `https://carhub-mlki.onrender.com/oem?text=${text}`
      )
      setSuggestions(res.data)
    } catch (error) {
      console.log(error)
    }
  }

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
            <Box>
              <Input
                placeholder='Search for specification'
                onChange={handleChange}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddandEditModal
