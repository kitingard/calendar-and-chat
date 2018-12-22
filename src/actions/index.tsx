import * as constants from '../constants';

export interface IMeeting {
    type: constants.OPEN_MEETING;
}

export type openMeetingAction = IMeeting;

export function openMeeting(): IMeeting {
    return {
        type: constants.OPEN_MEETING
    }
}