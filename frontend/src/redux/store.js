import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from 'redux'
import thunk from 'redux-thunk'
import { reducer as authReducer } from './auth/auth.reducer'
import { reducer as dealerCarsReducer } from './dealerCars/dealerCars.reducer'
import { reducer as carsReducer } from './cars/cars.reducer'
const middleware = [thunk]

const rootReducer = combineReducers({
  authReducer,
  dealerCarsReducer,
  carsReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)
export default store
