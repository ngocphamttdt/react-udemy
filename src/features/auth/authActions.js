import { SIGN_IN_USER, SIGN_OUT_USER } from "./authContants";
import firebase from '../../app/config/firebase'
import { APP_LOADED } from '../../app/async/asyncReducer'

export function signInUser(user) {
  const obj =
  {
    type: SIGN_IN_USER,
    payload: user
  }
  return obj
}

export function verifyAuth() {
  return function (dispatch) {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(signInUser(user))
        dispatch({ type: APP_LOADED })
      }
      else {
        dispatch(signOutUser())
        dispatch({ type: APP_LOADED })
      }
    })
  }
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER
  }
}