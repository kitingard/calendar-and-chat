import styled from "styled-components";
import Button from "../../../styles/Button";
import MeetingWrapper from "../../../styles/MeetingWrapper";

export const ProfileForm = styled(MeetingWrapper)`
  padding: 14px 0px 24px;
`;
export const ProfileIcon = styled.img``;
export const ProfileTextarea = styled.textarea`
  width: 158px;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px 3px 6px 3px;
  font-size: 13px;
`;
export const ProfileLabel = styled.label`
  width: 128px;
  height: 20px;
  margin: 5px 6px 0px 18px;
  font-size: 13px;
  text-indent: 5px;
`;
export const ProfileInput = styled.input`
  width: 158px;
  height: 26px;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  font-size: 13px;
  text-indent: 5px;
`;
export const ProfileSaveBtn = styled(Button)`
  position: absolute;
  bottom: 24px;
  right: 29px;
  background: #3d454c;
  color: #ffffff;
`;
