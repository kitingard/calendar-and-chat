import * as React from "react";
import * as moment from "moment";
import { SELECT_FORMAT } from "../../../constants";
import { MeetingText } from "../../../styles/MeetingTheme";
import { MeetingDisabled } from "./MeetingFieldDisabledTheme";
import { IMeeting } from "src/types";

export interface MeetingFieldDisabledProps {
  currentMeeting: IMeeting;
}

function MeetingFieldDisabled({ currentMeeting }: MeetingFieldDisabledProps) {
  return (
    <React.Fragment>
      <MeetingText>Тема встречи</MeetingText>
      <MeetingDisabled>{currentMeeting.title}</MeetingDisabled>
      <MeetingText>День встречи</MeetingText>
      <MeetingDisabled>
        {moment(currentMeeting.start).format("dd DD.MM.YYYY")}
      </MeetingDisabled>
      <MeetingText>Начало встречи</MeetingText>
      <MeetingDisabled>
        {moment(currentMeeting.start).format(SELECT_FORMAT)}
      </MeetingDisabled>
      <MeetingText>Окончание встречи</MeetingText>
      <MeetingDisabled>
        {moment(currentMeeting.end).format(SELECT_FORMAT)}
      </MeetingDisabled>
    </React.Fragment>
  );
}

export default MeetingFieldDisabled;
