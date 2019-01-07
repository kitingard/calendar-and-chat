import { reduxActions } from "../actions";
import {
  ADD_MEMBER,
  CLOSE_MEETING,
  OPEN_MEETING,
  ADD_MESSAGE
} from "../constants/index";
import { StoreState } from "../types/index";

export function openModal(state: StoreState, action: reduxActions): StoreState {
  switch (action.type) {
    case OPEN_MEETING:
      return { ...state, meetingOpen: true };
    case CLOSE_MEETING:
      return { ...state, meetingOpen: false };
    case ADD_MEMBER:
      const addMember = action.payload;
      const members = [addMember];
      return {
        ...state,
        members
      };
    case ADD_MESSAGE:
      const addMessage = action.payload;
      const messages = [...state.messages, addMessage];
      return {
        ...state,
        messages
      };
  }
  return state;
}
