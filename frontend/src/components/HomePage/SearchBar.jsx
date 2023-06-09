import { Box, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [text, setText] = useState('')
  const [suggesions, setSuggestions] = useState([])
  const navigate = useNavigate()

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const fetchSuggestion = async () => {
    if (!text) return
    console.log('gone')
    try {
      const res = await axios(
        `https://carhub-mlki.onrender.com/cars?text=${text}`
      )
      console.log('came')
      setSuggestions(res.data.allCars)
    } catch (error) {
      console.log(error)
    }
  }
  const handleClickSuggetion = (item) => {
    navigate(`/${item._id}`)
    setText('')
    setSuggestions([])
  }

  useEffect(() => {
    fetchSuggestion()
  }, [text])
  return (
    <Box pos={'relative'}>
      <Input
        placeholder='Search for specification'
        value={text}
        onChange={handleChange}
      />
      <Box
        pos={'absolute'}
        top='3rem'
        borderWidth={'1px'}
        width={'full'}
        bg={'white'}
      >
        {suggesions.map((item) => {
          return (
            <Text
              key={item._id}
              cursor={'pointer'}
              p='0.4rem'
              onClick={() => {
                handleClickSuggetion(item)
              }}
            >
              {item.title}
            </Text>
          )
        })}
      </Box>
    </Box>
  )
}

export default SearchBar
