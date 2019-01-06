export interface StoreState {
  meetings: Meeting[];
  currentMeeting?: Meeting;
  meetingOpen: boolean;
  meetingDisabled: boolean;
  memberState: string;
  memberAdd: boolean;
  chatOpen: boolean;
  profileOpen: boolean;
  members: Member[];
}

export interface Member {
  [key: string]: { name: string; id: number; visited: boolean };
}

export interface Meeting {
  members: Member[];
  start: Date;
  end: Date;
  title: string;
}
