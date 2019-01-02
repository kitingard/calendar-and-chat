export interface StoreState {
    meetingOpen: boolean
    meetingDisabled: boolean
    memberState: string
    memberAdd: boolean
    chatOpen: boolean
    profileOpen: boolean
    members: Array<{name: string, id: number, visited: boolean}>
}