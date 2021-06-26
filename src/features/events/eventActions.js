import { CREATE_EVENT, DELETE_EVENT, FETCH_EVENT, UPDATE_EVENT } from "./eventConstants";
import {asyncActionStart, asyncActionFinish, asyncActionError} from '../../app/async/asyncReducer'
import { fectchSampleData } from "../../app/api/mockApi";

export function loadEvents(){
  return async function(dispatch){
    dispatch(asyncActionStart())
    try {
      const events = await fectchSampleData()
      dispatch({type: FETCH_EVENT, payload: events})
      dispatch(asyncActionFinish())
    } catch (error) {
      dispatch(asyncActionError(error))
    }
  }
}

export function createEvent(event){
  return{
    type: CREATE_EVENT,
    payload: event
  }
}

export function updateEvent(event){
  return{
    type: UPDATE_EVENT,
    payload: event
  }
}

export function deleteEvent(event){
  return{
    type: DELETE_EVENT,
    payload: event
  }
}

