import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from './index'

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk))
}