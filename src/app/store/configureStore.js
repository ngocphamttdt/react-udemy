import {createStore} from 'redux'
import testReducer from '../../features/sanbox/testReducer'

export function configureStore(){
  return createStore(testReducer)
}