import * as constants from "../constants";
import { INewMeeting } from "../types";

export interface MeetingOpen {
  type: constants.OPEN_MEETING;
  payload: number;
}

export interface MeetingClose {
  type: constants.CLOSE_MEETING;
}

export interface MessageAdd {
  type: constants.ADD_MESSAGE;
  payload: string;
}

export interface MeetingCreate {
  type: constants.CREATE_MEETING;
  payload: INewMeeting;
}

export interface MeetingNew {
  type: constants.NEW_MEETING;
  payload: Date;
}

export type reduxActions =
  | MeetingClose
  | MeetingOpen
  | MeetingCreate
  | MeetingNew
  | MessageAdd;

export function openMeeting(meetingId: number): MeetingOpen {
  return {
    type: constants.OPEN_MEETING,
    payload: meetingId
  };
}

export function closeMeeting(): MeetingClose {
  return {
    type: constants.CLOSE_MEETING
  };
}

export function createMeeting(object: INewMeeting): MeetingCreate {
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

export function newMeeting(day: Date): MeetingNew {
  return {
    payload: day,
    type: constants.NEW_MEETING
  };
}
