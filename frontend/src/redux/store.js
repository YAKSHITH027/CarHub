import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from 'redux'
import thunk from 'redux-thunk'
import { reducer as authReducer } from './auth/auth.reducer'
const middleware = [thunk]

const rootReducer = combineReducers({ authReducer })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)
export default store
