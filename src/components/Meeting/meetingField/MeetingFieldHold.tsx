import * as React from "react";
import styled from "styled-components";
import MeetingField from "../../../styles/MeetingField";
import MeetingFieldCreate from "./MeetingFieldCreate";

import "moment/locale/ru";

const MeetingText = styled.p`
  width: 128px;
  height: 20px;
  padding: 0px;
  margin-right: 6px;
  margin-top: 5px;
  font-size: 13px;
  text-indent: 5px;
`;
const MeetingFieldDisabled = styled(MeetingField)`
  background: rgba(196, 196, 196, 0.3);
  border: none;
`;

export default class MeetingFieldHold extends MeetingFieldCreate {
  // state = {
  //     meetingEndTime: '',
  //     meetingStartTime: '',
  //     meetingTheme: '',
  // }

  render() {
    return (
      <React.Fragment>
        <MeetingText>Тема встречи</MeetingText>
        <MeetingFieldDisabled>{}</MeetingFieldDisabled>
        <MeetingText>День встречи</MeetingText>
        <MeetingFieldDisabled>{}</MeetingFieldDisabled>
        <MeetingText>Начало встречи</MeetingText>
        <MeetingFieldDisabled>{}</MeetingFieldDisabled>
        <MeetingText>Окончание встречи</MeetingText>
        <MeetingFieldDisabled>{}</MeetingFieldDisabled>
      </React.Fragment>
    );
  }
}
