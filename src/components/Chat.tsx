import * as React from "react";
import styled from "styled-components";
import chaticon from "../assets/img/chat-icon.svg";
import profileicon from "../assets/img/profile-icon.svg";
import ModalTitle from "../styles/ModalTitle";

export interface Props {
  chatOpen: boolean;
  profileOpen: boolean;
  onChatClose?: () => void;
  onProfileOpen?: () => void;
  onProfileClose?: () => void;
}

const ChatWrapper = styled.div`
  position: absolute;
  bottom: 81px;
  right: 21px;
  width: 332px;
  height: 444px;
  background: #ffffff;
  border-radius: 6px 6px 0px 0px;
`;
const ChatTitle = styled(ModalTitle)`
  padding: 10px 125px 10px 103px;
  color: #ffffff;
  background: #3d454c;
  border-radius: 6px 6px 0px 0px;
`;
const ProfileBtn = styled.button`
  position: absolute;
  top: 5px;
  left: 16px;
  padding: 0px;
  background: transparent;
  border: none;
`;
const ChatIcon = styled.img``;
const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 21px;
  width: 19px;
  height: 10px;
  background: transparent;
  border: none;
`;
const CloseIcon = styled.div`
  width: 19px;
  height: 2px;
  background: #ffffff;
  border-radius: 0px 0px 6px 0px;
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
const ProfileInput = styled.textarea`
  width: 158px;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px 3px 6px 3px;
  font-size: 13px;
`;
const MeetingForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 14px 24px 24px 16px;
`;
const MeetingLabel = styled.label`
  width: 128px;
  height: 20px;
  margin-right: 6px;
  margin-top: 5px;
  font-size: 13px;
  text-indent: 5px;
`;

const MeetingInput = styled.input`
  width: 158px;
  height: 26px;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  font-size: 13px;
  text-indent: 5px;
`;

function Chat({
  chatOpen,
  onChatClose,
  onProfileClose,
  onProfileOpen,
  profileOpen
}: Props) {
  return (
    <React.Fragment>
      {chatOpen && (
        <ChatWrapper>
          {profileOpen ? (
            <React.Fragment>
              <ChatTitle>
                <ProfileBtn onClick={onProfileClose}>
                  <ChatIcon src={profileicon} />
                </ProfileBtn>
                Профиль{!chatOpen}
                <CloseBtn onClick={onChatClose}>
                  <CloseIcon />
                </CloseBtn>
              </ChatTitle>
              <MeetingForm>
                <MeetingLabel>Имя</MeetingLabel>
                <MeetingInput type="text" placeholder="Anonym" />
                <MeetingLabel>Проект</MeetingLabel>
                <MeetingInput type="text" placeholder="Project" />
                <MeetingLabel>О себе</MeetingLabel>
                <ProfileInput placeholder="Self description" />
              </MeetingForm>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <ChatTitle>
                <ProfileBtn onClick={onProfileOpen}>
                  <ChatIcon src={chaticon} />
                </ProfileBtn>
                Чат-Форум{chatOpen}
                <CloseBtn onClick={onChatClose}>
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

export default Chat;
