import { SIGN_IN_USER, SIGN_OUT_USER } from "./authContants";
import user from '../assets/user.png'

const initialState = {
  authenticated: true,
  currentUser: {
    email: 'bob@test.com',
    photoUrl: user
  }
}

export default function authReducer(state = initialState, {type, payload}){
  switch(type){
    case SIGN_IN_USER:
      return{
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoUrl: user
        }
      }
      case SIGN_OUT_USER:
        return {
          ...state,
          authenticated: false,
          currentUser: null
        }
        default: return state
  }
}