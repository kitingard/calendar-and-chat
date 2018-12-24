import * as constants from '../constants';

export interface Meeting {
    type: constants.OPEN_MEETING;
}

export interface Chat {
    type: constants.OPEN_CHAT;
}

export type openModalAction = Meeting | Chat;

export function openMeeting(): Meeting {
    return {
        type: constants.OPEN_MEETING
    }
}

export function openChat(): Chat {
    return {
        type: constants.OPEN_CHAT
    }
}