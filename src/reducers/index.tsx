import { openMeetingAction } from '../actions';
import { OPEN_MEETING } from '../constants/index';
import { StoreState } from '../types/index';

export function openMeeting(state: StoreState, action: openMeetingAction):StoreState {
    if (action.type === OPEN_MEETING) {
        return {
            ...state,
            meetingOpen: true  
        }
      }
      return state;
  }
