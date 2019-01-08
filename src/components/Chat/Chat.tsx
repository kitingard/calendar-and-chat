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
  right: 25px;
  width: 58px;
  height: 58px;
  border: none;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;
const ChatIcon = styled.img`
  margin: -2px 0px 0px -6px;
`;
const ChatMinIcon = styled.img`
  margin: -2px 0px 0px -2px;
`;
const ChatMessageWrapper = styled.div`
  max-height: 318px;
  overflow-y: scroll;
  padding: 8px 14px;
`;
const MessageWrapper = styled.p`
  max-width: 130px;
  padding: 10px 9px 15px 9px;
  margin-bottom: 10px;
  background: #2f81cd;
  border-radius: 10px;
  font-weight: bold;
  font-size: 13px;
  color: #ffffff;
`;

export interface ChatProps {
  messages: string[];
  onAddMessage: (text: string) => void;
}

export interface ChatState {
  chatOpen: boolean;
  profileOpen: boolean;
  message: string;
  messages: string[];
}

class Chat extends React.Component<ChatProps, ChatState> {
  state = {
    chatOpen: false,
    profileOpen: false,
    message: "",
    messages: this.props.messages
  };

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
      messages: [...this.state.messages, text]
    }));

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
                  {this.state.messages.map((message: string, i: number) => (
                    <MessageWrapper key={i}>{message}</MessageWrapper>
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
