export interface StoreState {
  chatUsers: IUser[];
  currentMeeting: IMeeting | INewMeeting | null;
  currentUser: IUser;
  messages: string[];
  meetings: IMeeting[];
  members: IMember[];
}

export interface IMember {
  id: number;
  name: string;
  visited: boolean;
}

export interface INewMeeting {
  members: IMember[];
  start: Date;
  end: Date;
  title: string;
}

export interface IMeeting {
  id: number;
  members: IMember[];
  start: Date;
  end: Date;
  title: string;
}

export interface IUser {
  id: number;
  name: string;
  project: string;
  selfdescription: string;
}
