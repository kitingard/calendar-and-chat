export interface StoreState {
  chatUsers: User[];
  currentDate: Date;
  currentMeeting?: Meeting;
  currentUser: User;
  messages: string[];
  meetings: Meeting[];
  meetingOpen: boolean;
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

export interface User {
  id: number;
  name: string;
  project: string;
  selfdescription: string;
}
