import styled from "styled-components";
import * as moment from "moment";
import * as React from "react";
import CalendarFieldWrap from "../../styles/CalendarFieldWrap";
import { IMeeting } from "../../types";

const Card = styled.div`
  position: relative;
  padding: 17px 0px;
  background-color: #2f81cd;
  font-size: 14px;
  text-indent: 5px;
  color: #ffffff;
`;

type MeetingCardProps = {
  onMeetingClick: (meetingId: number) => void;
  onCalendarClick: (day: Date) => void;
  meetings: IMeeting[];
  currentDate: Date;
};

const MeetingCard = ({
  onCalendarClick,
  meetings,
  currentDate,
  onMeetingClick
}: MeetingCardProps) => (
  <CalendarFieldWrap onDoubleClick={() => onCalendarClick(currentDate)}>
    {meetings.map((meeting, i: number) => (
      <Card key={i} onClick={() => onMeetingClick(meeting.id)}>
        {moment(meeting.start).format("HH:mm")} >> {meeting.title}
      </Card>
    ))}
  </CalendarFieldWrap>
);

export default MeetingCard;
