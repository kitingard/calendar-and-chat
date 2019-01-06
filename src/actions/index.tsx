import * as constants from "../constants";

export interface MeetingOpen {
  type: constants.OPEN_MEETING;
}

export interface MeetingClose {
  type: constants.CLOSE_MEETING;
}

export interface MemberAdd {
  type: constants.ADD_MEMBER;
  payload: object;
}

export type reduxActions = MeetingOpen | MeetingClose | MemberAdd;

export function openMeeting(): MeetingOpen {
  return {
    type: constants.OPEN_MEETING
  };
}

export function closeMeeting(): MeetingClose {
  return {
    type: constants.CLOSE_MEETING
  };
}

export function addMember(array: any): MemberAdd {
  return {
    payload: array,
    type: constants.ADD_MEMBER
  };
}
