import * as React from "react";
import CalendarDaysRender from "../CalendarDaysRender/CalendarDaysRender";
import Meeting from "../../../containers/Meeting";
import { IMeeting } from "../../../types";
import { Week } from "./CalendarTheme";

export interface CalendarProps {
  onCalendarClick: (day: Date) => void;
  onMeetingClick: (idNumber: number) => void;
  meetings: IMeeting[];
}

function Calendar({
  onCalendarClick,
  meetings,
  onMeetingClick
}: CalendarProps) {
  return (
    <Week>
      <CalendarDaysRender
        onCalendarClick={onCalendarClick}
        meetings={meetings}
        onMeetingClick={onMeetingClick}
      />
      <Meeting />
    </Week>
  );
}

export default Calendar;
