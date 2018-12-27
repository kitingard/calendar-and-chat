import * as constants from '../constants'

export interface MeetingOpen {
    type: constants.OPEN_MEETING
}

export interface MeetingClose {
    type: constants.CLOSE_MEETING
}

export interface MeetingDisabled {
    type: constants.DISABLE_MEETING
}

export interface MemberAdd {
    type: constants.ADD_MEMBER
}

export interface ChatOpen {
    type: constants.OPEN_CHAT
}

export interface ChatClose {
    type: constants.CLOSE_CHAT
}

export type openModalAction = MeetingOpen | MeetingClose | ChatOpen | ChatClose | MeetingDisabled | MemberAdd

export function openMeeting(): MeetingOpen {
    return {
        type: constants.OPEN_MEETING
    }
}

export function closeMeeting(): MeetingClose {
    return {
        type: constants.CLOSE_MEETING
    }
}

export function addMember(): MemberAdd {
    return {
        type: constants.ADD_MEMBER
    }
}

export function openChat(): ChatOpen {
    return {
        type: constants.OPEN_CHAT
    }
}

export function closeChat(): ChatClose {
    return {
        type: constants.CLOSE_CHAT
    }
}

// export type disabledMeetingAction = MeetingDisabled

export function disableMeeting(): MeetingDisabled {
    return {
        type: constants.DISABLE_MEETING
    }
}
