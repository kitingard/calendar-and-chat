import { reduxActions } from "../actions";
import {
  CLOSE_MEETING,
  ADD_MESSAGE,
  NEW_MEETING,
  CREATE_MEETING,
  CREATE_USER,
  DELETE_MEETING,
  EDIT_MEETING,
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
      saveToLocalStorage("chat", JSON.stringify(messages));
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
    case DELETE_MEETING:
      const idDelete = action.payload;
      const stateMeetingDelete = state.meetings.filter(
        elem => elem.id !== idDelete
      );
      saveToLocalStorage("meetings", JSON.stringify(stateMeetingDelete));
      return {
        ...state,
        meetings: stateMeetingDelete,
        currentMeeting: null
      };
    case EDIT_MEETING:
      const idDeleteEdit = action.payload.id;
      const stateMeetingEdites = state.meetings.filter(
        elem => elem.id !== idDeleteEdit
      );
      const editedMeetingsArray = [...stateMeetingEdites, action.payload];
      saveToLocalStorage("meetings", JSON.stringify(editedMeetingsArray));
      return {
        ...state,
        meetings: editedMeetingsArray,
        currentMeeting: null
      };
    case CREATE_USER:
      const newUserId = state.chatUsers.length;
      const newUsersArray = [
        ...state.chatUsers,
        { ...action.payload, id: newUserId }
      ];
      return {
        ...state,
        chatUsers: newUsersArray,
        currentUser: action.payload
      };
  }
  return state;
}
