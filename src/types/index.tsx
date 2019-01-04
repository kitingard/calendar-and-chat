export interface StoreState {
    meetingOpen: boolean
    meetingDisabled: boolean
    memberState: string
    memberAdd: boolean
    chatOpen: boolean
    profileOpen: boolean
    members: {[key:string]:{name: string, id: number, visited: boolean}}
}