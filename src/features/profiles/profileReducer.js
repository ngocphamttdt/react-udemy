import {
  LISTEN_TO_CURRENT_USER_PROFILE,
  LISTEN_TO_SELECTED_USER_PROFILE,
  LISTEN_TO_USER_PHOTO,
  LIST_TO_USER_EVENT
} from "./profileConstants";

const initialState = {
  currentUserProfile: null,
  selectedUserProfile: null,
  photos: [],
  profileEvents: []
}

export default function profileReducer(state = initialState, { type, payload }) {
  switch (type) {

    case LISTEN_TO_CURRENT_USER_PROFILE:
      return {
        ...state,
        currentUserProfile: payload
      }
    case LISTEN_TO_SELECTED_USER_PROFILE:
      return {
        ...state,
        selectedUserProfile: payload
      }
    case LISTEN_TO_USER_PHOTO:
      return {
        ...state,
        photos: payload
      }
    case LIST_TO_USER_EVENT:
      return {
        ...state,
        profileEvents: payload

      }
    default: {
      return state
    }
  }
}