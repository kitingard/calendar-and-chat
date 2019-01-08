import { reduxActions } from "../actions";
import {
  CLOSE_MEETING,
  ADD_MESSAGE,
  NEW_MEETING,
  CREATE_MEETING,
  OPEN_MEETING
} from "../constants";
import { StoreState, IMeeting } from "../types";
import { saveToLocalStorage } from "src/helpers/localStorage";

export function openModal(state: StoreState, action: reduxActions): StoreState {
  switch (action.type) {
    case OPEN_MEETING:
      return {
        ...state,
        currentMeeting: (state.meetings.find(
          meeting => meeting.id === action.payload
        ) as any) as IMeeting
      };
    case CLOSE_MEETING:
      return { ...state, currentMeeting: null };
    case ADD_MESSAGE:
      const addMessage = action.payload;
      const messages = [...state.messages, addMessage];
      return {
        ...state,
        messages
      };
    case NEW_MEETING:
      return {
        ...state,
        currentMeeting: {
          members: [],
          start: action.payload,
          end: action.payload,
          title: ""
        }
      };
    case CREATE_MEETING:
      const newMeetingId = state.meetings.length;
      const newMeetingsArray = [
        ...state.meetings,
        { ...action.payload, id: newMeetingId }
      ];
      saveToLocalStorage("meetings", JSON.stringify(newMeetingsArray));
      return {
        ...state,
        meetings: newMeetingsArray,
        currentMeeting: null
      };
  }
  return state;
}
