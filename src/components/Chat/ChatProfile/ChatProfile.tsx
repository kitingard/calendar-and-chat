import * as React from "react";
import { INewUser, IUser } from "src/types";
import { TEXT_LENGHT } from "../../../constants";
import profileicon from "../../../assets/img/profile-icon.svg";
import ChatTitle from "../../../styles/ChatTitle";
import CloseBtn from "../../../styles/CloseBtn";
import CloseIcon from "../../../styles/CloseIcon";
import {
  ProfileForm,
  ProfileIcon,
  ProfileLabel,
  ProfileInput,
  ProfileSaveBtn,
  ProfileTextarea
} from "./ChatProfileTheme";
import ProfileBtn from "../../../styles/ProfileBtn";

export interface ChatProfileProps {
  chatUsers: IUser[];
  currentUser: INewUser;
  onCreateChatUser: (user: INewUser) => void;
  onProfileOpenChange: () => void;
  onChatOpenChange: () => void;
}

export interface ChatProfileState {
  chatUsers: IUser[];
  userName: string;
  userProject: string;
  userSelfdescription: string;
}

class ChatProfile extends React.Component<ChatProfileProps, ChatProfileState> {
  constructor(props: ChatProfileProps) {
    super(props);

    this.state = {
      chatUsers: this.props.chatUsers,
      userName: "",
      userProject: "",
      userSelfdescription: ""
    };
  }

  onUserNameChange = (evt: any) => {
    this.setState({
      userName: evt.target.value
    });
  };

  onUserProjectChange = (evt: any) => {
    this.setState({
      userProject: evt.target.value
    });
  };

  onUserSelfdescriptionChange = (evt: any) => {
    this.setState({
      userSelfdescription: evt.target.value
    });
  };

  createUser = () => {
    const { userName, userProject, userSelfdescription } = this.state;
    this.props.onCreateChatUser({
      name: userName,
      project: userProject,
      selfdescription: userSelfdescription
    });
    this.props.onProfileOpenChange();
  };

  render() {
    return (
      <React.Fragment>
        <ChatTitle>
          <ProfileBtn onClick={this.props.onProfileOpenChange}>
            <ProfileIcon src={profileicon} />
          </ProfileBtn>
          Профиль
          <CloseBtn onClick={this.props.onChatOpenChange}>
            <CloseIcon />
          </CloseBtn>
        </ChatTitle>
        <ProfileForm>
          <ProfileLabel htmlFor="userName">Имя</ProfileLabel>
          <ProfileInput
            id="userName"
            type="text"
            maxLength={TEXT_LENGHT}
            placeholder="Anonym"
            onChange={this.onUserNameChange}
          />
          <ProfileLabel htmlFor="userProject">Проект</ProfileLabel>
          <ProfileInput
            id="userProject"
            type="text"
            maxLength={TEXT_LENGHT}
            placeholder="Project"
            onChange={this.onUserProjectChange}
          />
          <ProfileLabel htmlFor="userSelfdescription">О себе</ProfileLabel>
          <ProfileTextarea
            id="userSelfdescription"
            maxLength={200}
            placeholder="Self description"
            onChange={this.onUserSelfdescriptionChange}
          />
        </ProfileForm>
        <ProfileSaveBtn onClick={this.createUser}>Coxpaнить</ProfileSaveBtn>
      </React.Fragment>
    );
  }
}

export default ChatProfile;
