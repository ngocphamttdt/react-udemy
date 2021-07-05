import { toast } from 'react-toastify'
import firebase from '../config/firebase'
import { setUserProfileData } from './fireStoreService'

export async function signInWithEmail(creds) {
  return await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
}

export function signOutFirebase() {
  return firebase.auth().signOut()
}

export async function registerInFirebase(creds) {
  try {
    const result = await firebase.auth().createUserWithEmailAndPassword(creds.email, creds.password)
    await result.user.updateProfile({
      displayName: creds.displayName
    })
    await setUserProfileData(result.user)
  } catch (error) {
    throw error
  }
}

export const providerObj = {
  FACEBOOK: 'facebook',
  GOOGLE: 'google'

}

export async function socialLogin(selectedProvider) {
  let provider
  if (selectedProvider === providerObj.FACEBOOK) {
    provider = new firebase.auth.FacebookAuthProvider()

  }
  if (selectedProvider === providerObj.GOOGLE) {
    provider = new firebase.auth.GoogleAuthProvider()
  }
  try {
    const  result = await firebase.auth().signInWithPopup(provider)
    if(result.additionalUserInfo.isNewUser){
      await setUserProfileData(result.user)
    }
  } catch (error) {
    toast.error(error.message)
  }
}

export function updateUserPassword(creds){
  const user = firebase.auth().currentUser
  return user.updatePassword(creds.newPassword1)
}