import * as constants from "../constants";
import { INewMeeting, INewUser, IMeeting } from "../types";

export interface MessageAdd {
  type: constants.ADD_MESSAGE;
  payload: string;
}

export interface MeetingClose {
  type: constants.CLOSE_MEETING;
}

export interface MeetingCreate {
  type: constants.CREATE_MEETING;
  payload: INewMeeting;
}

export interface MeetingDelete {
  type: constants.DELETE_MEETING;
  payload: number;
}

export interface MeetingEdit {
  type: constants.EDIT_MEETING;
  payload: IMeeting;
}

export interface MeetingNew {
  type: constants.NEW_MEETING;
  payload: Date;
}

export interface MeetingOpen {
  type: constants.OPEN_MEETING;
  payload: number;
}

export interface UserCreate {
  type: constants.CREATE_USER;
  payload: INewUser;
}

export type reduxActions =
  | MessageAdd
  | MeetingClose
  | MeetingCreate
  | MeetingDelete
  | MeetingEdit
  | MeetingNew
  | MeetingOpen
  | UserCreate;

export function addMessage(text: string): MessageAdd {
  return {
    payload: text,
    type: constants.ADD_MESSAGE
  };
}

export function closeMeeting(): MeetingClose {
  return {
    type: constants.CLOSE_MEETING
  };
}

export function createUser(user: INewUser): UserCreate {
  return {
    type: constants.CREATE_USER,
    payload: user
  };
}

export function createMeeting(object: INewMeeting): MeetingCreate {
  return {
    payload: object,
    type: constants.CREATE_MEETING
  };
}

export function deleteMeeting(meetingId: number): MeetingDelete {
  return {
    payload: meetingId,
    type: constants.DELETE_MEETING
  };
}

export function editMeeting(object: IMeeting): MeetingEdit {
  return {
    payload: object,
    type: constants.EDIT_MEETING
  };
}

export function newMeeting(day: Date): MeetingNew {
  return {
    payload: day,
    type: constants.NEW_MEETING
  };
}

export function openMeeting(meetingId: number): MeetingOpen {
  return {
    type: constants.OPEN_MEETING,
    payload: meetingId
  };
}
