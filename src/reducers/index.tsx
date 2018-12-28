import { openModalAction } from '../actions'
import { ADD_MEMBER, CLOSE_CHAT, CLOSE_MEETING, CLOSE_PROFILE, DISABLE_MEETING, OPEN_CHAT, OPEN_MEETING, OPEN_PROFILE, STOP_ADD_MEMBER } from '../constants/index'
import { StoreState } from '../types/index'

export function openModal(state: StoreState, action: openModalAction):StoreState {
    switch (action.type) {
        case OPEN_MEETING:
            return { ...state, meetingOpen: true }
        case CLOSE_MEETING:
            return { ...state, meetingOpen: false }
        case OPEN_CHAT:
            return { ...state, chatOpen: true }
        case CLOSE_CHAT:
            return { ...state, chatOpen: false }
        case OPEN_PROFILE:
            return { ...state, profileOpen: true }
        case CLOSE_PROFILE:
            return { ...state, profileOpen: false }
        case DISABLE_MEETING: 
            return { ...state, meetingDisabled: true }
        case ADD_MEMBER: 
            return { ...state, memberAdd: true }
        case STOP_ADD_MEMBER: 
            return { ...state, memberAdd: false }
      }
      return state
  }

//   export function disableMeeting(state: StoreState, action: disabledMeetingAction):StoreState {
    // if (action.type === DISABLE_MEETING) {
    //         return { ...state, meetingDisabled: true }
    //   }
//       return state
//   }
