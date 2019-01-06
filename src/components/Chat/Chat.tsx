import * as React from "react";
import styled from "styled-components";
import chaticon from "../../assets/img/chat-icon.svg";
import icon from "../../assets/img/icon.svg";
import ChatProfile from "./ChatProfile";
import ChatTitle from "../../styles/ChatTitle";
import CloseBtn from "../../styles/CloseBtn";
import CloseIcon from "../../styles/CloseIcon";
import ProfileBtn from "../../styles/ProfileBtn";

const ChatWrapper = styled.div`
  position: absolute;
  bottom: 81px;
  right: 21px;
  width: 332px;
  height: 444px;
  background: #ffffff;
  border-radius: 6px 6px 0px 0px;
`;
const ChatInput = styled.textarea`
  position: absolute;
  bottom: 22px;
  left: 16px;
  width: 302px;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px 3px 6px 3px;
`;
const ChatBtn = styled.button`
  position: absolute;
  bottom: 13px;
  right: 21px;
  width: 58px;
  height: 58px;
  border: none;
  background-color: transparent;
`;
const ChatIcon = styled.img`
  margin: -2px 0px 0px -2px;
`;

export interface ChatProps {}

export interface ChatState {
  chatOpen: boolean;
  profileOpen: boolean;
}

class Chat extends React.Component<ChatProps, ChatState> {
  public state = {
    chatOpen: false,
    profileOpen: false
  };

  onChatOpenChange = () =>
    this.setState(state => ({
      chatOpen: !state.chatOpen
    }));

  onProfileOpenChange = () =>
    this.setState(state => ({
      profileOpen: !state.profileOpen
    }));

  public render() {
    return (
      <React.Fragment>
        <ChatBtn onClick={this.onChatOpenChange}>
          <ChatIcon src={icon} />
        </ChatBtn>
        {this.state.chatOpen && (
          <ChatWrapper>
            {this.state.profileOpen ? (
              <ChatProfile
                onProfileOpenChange={this.onProfileOpenChange}
                onChatOpenChange={this.onChatOpenChange}
              />
            ) : (
              <React.Fragment>
                <ChatTitle>
                  <ProfileBtn onClick={this.onProfileOpenChange}>
                    <ChatIcon src={chaticon} />
                  </ProfileBtn>
                  Чат-Форум
                  <CloseBtn onClick={this.onChatOpenChange}>
                    <CloseIcon />
                  </CloseBtn>
                </ChatTitle>
                <ChatInput />
              </React.Fragment>
            )}
          </ChatWrapper>
        )}
      </React.Fragment>
    );
  }
}

export default Chat;
