import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/HomePage/Navbar'
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>
          <Navbar />
          <MainRoutes />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
