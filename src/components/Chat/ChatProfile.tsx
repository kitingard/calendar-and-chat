import * as React from "react";
import styled from "styled-components";
import profileicon from "../../assets/img/profile-icon.svg";
import ChatTitle from "../../styles/ChatTitle";
import CloseBtn from "../../styles/CloseBtn";
import CloseIcon from "../../styles/CloseIcon";
import Form from "../../styles/Form";
import ProfileBtn from "../../styles/ProfileBtn";

const ProfileForm = styled(Form)`
  padding: 14px 0px 24px;
`;
const ProfileIcon = styled.img``;
const ProfileTextarea = styled.textarea`
  width: 158px;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px 3px 6px 3px;
  font-size: 13px;
`;
const ProfileLabel = styled.label`
  width: 128px;
  height: 20px;
  margin: 5px 6px 0px 18px;
  font-size: 13px;
  text-indent: 5px;
`;
const ProfileInput = styled.input`
  width: 158px;
  height: 26px;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  font-size: 13px;
  text-indent: 5px;
`;

function ChatProfile(props: any) {
  return (
    <React.Fragment>
      <ChatTitle>
        <ProfileBtn onClick={props.onProfileOpenChange}>
          <ProfileIcon src={profileicon} />
        </ProfileBtn>
        Профиль
        <CloseBtn onClick={props.onChatOpenChange}>
          <CloseIcon />
        </CloseBtn>
      </ChatTitle>
      <ProfileForm>
        <ProfileLabel>Имя</ProfileLabel>
        <ProfileInput type="text" placeholder="Anonym" />
        <ProfileLabel>Проект</ProfileLabel>
        <ProfileInput type="text" placeholder="Project" />
        <ProfileLabel>О себе</ProfileLabel>
        <ProfileTextarea placeholder="Self description" />
      </ProfileForm>
    </React.Fragment>
  );
}

export default ChatProfile;
