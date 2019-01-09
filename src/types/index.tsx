export interface StoreState {
  chatUsers: IUser[];
  currentMeeting: IMeeting | INewMeeting | null;
  currentUser: INewUser;
  messages: string[];
  meetings: IMeeting[];
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

export interface INewUser {
  name: string;
  project: string;
  selfdescription: string;
}
