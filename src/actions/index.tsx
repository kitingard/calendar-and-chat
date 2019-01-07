import * as constants from "../constants";
import { Member } from "../types";

export interface MeetingOpen {
  type: constants.OPEN_MEETING;
}

export interface MeetingClose {
  type: constants.CLOSE_MEETING;
}

export interface MemberAdd {
  type: constants.ADD_MEMBER;
  payload: Member;
}

export interface MessageAdd {
  type: constants.ADD_MESSAGE;
  payload: string;
}

export type reduxActions = MeetingOpen | MeetingClose | MemberAdd | MessageAdd;

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

export function addMember(object: Member): MemberAdd {
  return {
    payload: object,
    type: constants.ADD_MEMBER
  };
}

export function addMessage(text: string): MessageAdd {
  return {
    payload: text,
    type: constants.ADD_MESSAGE
  };
}
