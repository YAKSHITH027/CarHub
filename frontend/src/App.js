import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import MainRoutes from './routes/MainRoutes'
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>
          <MainRoutes />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
