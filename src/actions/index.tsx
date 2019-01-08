import * as constants from "../constants";
import { Member, Meeting } from "../types";

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

export interface MeetingCreate {
  type: constants.CREATE_MEETING;
  payload: Meeting;
}

export type reduxActions =
  | MeetingOpen
  | MeetingClose
  | MeetingCreate
  | MemberAdd
  | MessageAdd;

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

export function createMeeting(object: Meeting): MeetingCreate {
  return {
    payload: object,
    type: constants.CREATE_MEETING
  };
}

export function addMessage(text: string): MessageAdd {
  return {
    payload: text,
    type: constants.ADD_MESSAGE
  };
}
