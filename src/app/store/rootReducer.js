import {combineReducers} from 'redux'
import eventReducer from '../../features/events/Reducer'
import testReducer from '../../features/sanbox/testReducer'

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer
})

export default rootReducer