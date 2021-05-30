import {createStore} from 'redux'
import{devToolsEnhancer} from 'redux-devtools-extension'
import testReducer from '../../features/sanbox/testReducer'


export function configureStore(){
  return createStore(testReducer, devToolsEnhancer())
}