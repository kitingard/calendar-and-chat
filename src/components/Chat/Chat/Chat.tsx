import * as React from "react";
import styled from "styled-components";
import chaticon from "../../../assets/img/chat-icon.svg";
import icon from "../../../assets/img/icon.svg";
import ChatProfile from "../ChatProfile/ChatProfile";
import {
  ChatWrapper,
  ChatBtn,
  ChatIcon,
  ChatInput,
  ChatMinIcon,
  ChatMessageWrapper,
  MessageUserName
} from "./ChatTheme";
import ChatTitle from "../../../styles/ChatTitle";
import CloseBtn from "../../../styles/CloseBtn";
import CloseIcon from "../../../styles/CloseIcon";
import ProfileBtn from "../../../styles/ProfileBtn";
import { INewUser, IUser } from "src/types";

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: savedMessageType) =>
    props.savedMessage ? "flex-start" : "flex-end"};
`;
const MessageText = styled.p`
  max-width: 130px;
  padding: 10px 9px 15px 9px;
  margin-top: 2px;
  margin-bottom: 10px;
  background: ${(props: savedMessageType) =>
    props.savedMessage ? "#DEDEDE" : "#2f81cd"};
  border-radius: 10px;
  font-weight: bold;
  font-size: 13px;
  color: ${(props: savedMessageType) =>
    props.savedMessage ? "#000000" : "#ffffff"};
`;

// const MessageAboutUser = styled.div`
//   max-width: 130px;
//   padding: 4px 6px;
//   background: rgba(61, 69, 76, 0.75);
//   border-radius: 10px;
// `;
// const MessageAboutUserText = styled.p`
//   margin: 0px;
//   font-size: 13px;
//   text-indent: 5px;
//   color: #ffffff;
// `;

export interface savedMessageType {
  savedMessage: boolean;
}

export interface ChatProps {
  chatUsers: IUser[];
  currentUser: INewUser | IUser;
  messages: string[];
  onCreateChatUser: (user: INewUser) => void;
  onAddMessage: (text: string) => void;
}

export interface ChatState {
  chatOpen: boolean;
  profileOpen: boolean;
  message: string;
  messages: string[];
  defaultUser: IUser;
  currentUser: INewUser | IUser;
  defaultMessages: string[];
}

class Chat extends React.Component<ChatProps, ChatState, savedMessageType> {
  constructor(props: ChatProps) {
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      defaultUser: this.props.chatUsers[0],
      chatOpen: false,
      profileOpen: false,
      message: "",
      messages: [],
      defaultMessages: this.props.messages.slice(-3)
    };
  }

  onChatOpenChange = () =>
    this.setState(state => ({
      chatOpen: !state.chatOpen,
      profileOpen: false
    }));

  onProfileOpenChange = () =>
    this.setState(state => ({
      profileOpen: !state.profileOpen
    }));

  onMessageChange = (evt: any) =>
    this.setState({
      message: evt.target.value
    });

  addNewMessage = (text: string) =>
    this.setState(state => ({
      messages: [...state.messages, text]
    }));

  addCurrentUser = (user: IUser) =>
    this.setState({
      currentUser: user
    });

  keyPress = (evt: any) => {
    if (evt.keyCode == 13) {
      this.props.onAddMessage(this.state.message);
      this.addNewMessage(this.state.message);
      evt.target.value = "";
    }
  };

  render() {
    return (
      <React.Fragment>
        <ChatBtn onClick={this.onChatOpenChange}>
          <ChatIcon src={icon} />
        </ChatBtn>
        {this.state.chatOpen && (
          <ChatWrapper>
            {this.state.profileOpen ? (
              <ChatProfile
                chatUsers={this.props.chatUsers}
                currentUser={this.props.currentUser}
                onCreateChatUser={this.props.onCreateChatUser}
                onProfileOpenChange={this.onProfileOpenChange}
                onChatOpenChange={this.onChatOpenChange}
              />
            ) : (
              <React.Fragment>
                <ChatTitle>
                  <ProfileBtn onClick={this.onProfileOpenChange}>
                    <ChatMinIcon src={chaticon} />
                  </ProfileBtn>
                  Чат-Форум
                  <CloseBtn onClick={this.onChatOpenChange}>
                    <CloseIcon />
                  </CloseBtn>
                </ChatTitle>
                <ChatMessageWrapper>
                  {this.state.defaultMessages.map(
                    (message: string, i: number) => (
                      <MessageWrapper key={i} savedMessage>
                        <MessageUserName>
                          {this.state.defaultUser.name}
                        </MessageUserName>
                        <MessageText savedMessage>{message}</MessageText>
                      </MessageWrapper>
                    )
                  )}
                  {this.state.messages.map((message: string, i: number) => (
                    <MessageWrapper key={i} savedMessage={false}>
                      {/* <MessageAboutUser>
                        <MessageAboutUserText>
                          {this.props.currentUser
                            ? this.props.currentUser.project
                            : "Нет описания"}
                        </MessageAboutUserText>
                        <MessageAboutUserText>
                          {this.props.currentUser
                            ? this.props.currentUser.selfdescription
                            : "Нет описания"}
                        </MessageAboutUserText>
                      </MessageAboutUser> */}
                      <MessageUserName>
                        {this.props.currentUser
                          ? this.props.currentUser.name
                          : this.state.defaultUser.name}
                      </MessageUserName>
                      <MessageText savedMessage={false}>{message}</MessageText>
                    </MessageWrapper>
                  ))}
                </ChatMessageWrapper>
                <ChatInput
                  onKeyDown={this.keyPress}
                  onChange={this.onMessageChange}
                />
              </React.Fragment>
            )}
          </ChatWrapper>
        )}
      </React.Fragment>
    );
  }
}

export default Chat;
