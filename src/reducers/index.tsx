import { reduxActions } from "../actions";
import { ADD_MEMBER, CLOSE_MEETING, OPEN_MEETING } from "../constants/index";
import { StoreState } from "../types/index";

export function openModal(state: StoreState, action: reduxActions): StoreState {
  switch (action.type) {
    case OPEN_MEETING:
      return { ...state, meetingOpen: true };
    case CLOSE_MEETING:
      return { ...state, meetingOpen: false };
    case ADD_MEMBER:
      const addMember = action.payload;
      const members = { ...state.members, addMember };
      return {
        ...state,
        members
      };
  }
  return state;
}
