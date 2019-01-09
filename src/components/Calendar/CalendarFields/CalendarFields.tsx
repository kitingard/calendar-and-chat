import * as moment from "moment";
import * as React from "react";
import { IMeeting } from "../../../types";
import CalendarFieldWrap from "../../../styles/CalendarFieldWrap";
import { Card } from "./CalendarFieldsTheme";

type CalendarFieldsProps = {
  onMeetingClick: (meetingId: number) => void;
  onCalendarClick: (day: Date) => void;
  meetings: IMeeting[];
  currentDate: Date;
};

const CalendarFields = ({
  onCalendarClick,
  meetings,
  currentDate,
  onMeetingClick
}: CalendarFieldsProps) => (
  <CalendarFieldWrap onDoubleClick={() => onCalendarClick(currentDate)}>
    {meetings.map((meeting, i: number) => (
      <Card key={i} onClick={() => onMeetingClick(meeting.id)}>
        {moment(meeting.start).format("HH:mm")} >> {meeting.title}
      </Card>
    ))}
  </CalendarFieldWrap>
);

export default CalendarFields;
