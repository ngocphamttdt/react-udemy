import { LISTEN_TO_CURRENT_USER_PROFILE, LISTEN_TO_SELECTED_USER_PROFILE,
   LISTEN_TO_USER_PHOTO, LIST_TO_USER_EVENT ,
   LISTEN_TO_FOLLOWERS, LISTEN_TO_FOLLOWINGS, SET_FOLLOW_USER, SET_UNFOLLOW_USER
  } from './profileConstants'

export function listenToCurrentUserProfile(profile) {
  return {
    type: LISTEN_TO_CURRENT_USER_PROFILE,
    payload: profile
  }
}

export function listenToSelectedUserProfile(profile) {
  return {
    type: LISTEN_TO_SELECTED_USER_PROFILE,
    payload: profile
  }
}

export function listenToUserPhotos(photos) {
  return {
    type: LISTEN_TO_USER_PHOTO,
    payload: photos
  }
}
export function listenToUserEvents(events){
  return{
    type: LIST_TO_USER_EVENT,
    payload: events
  }
}

export function listenToFollowers(followers){
  return{
    type: LISTEN_TO_FOLLOWERS,
    payload: followers
  }
}

export function listenToFollowings(followings){
  return{
    type: LISTEN_TO_FOLLOWINGS,
    payload: followings
  }
}

export function setFollowUser(){
  return{
    type: SET_FOLLOW_USER
  }
}

export function setUnfollowUser(){
  return{
    type: SET_UNFOLLOW_USER
  }
}