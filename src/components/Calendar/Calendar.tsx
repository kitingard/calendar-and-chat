import * as React from "react";
import styled from "styled-components";
import CalendarDaysRender from "./CalendarDaysRender";
import Meeting from "../../containers/Meeting";
import { IMeeting } from "../../types";

const Week = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  font-style: normal;
  font-weight: normal;
  background: #ffffff;
  border: 1px solid #dedede;
  box-sizing: border-box;
`;

export interface CalendarProps {
  onMeetingOpen: (day: Date) => void;
  onMeetingClick: (idNumber: number) => void;
  meetings: IMeeting[];
}

function Calendar({ onMeetingOpen, meetings, onMeetingClick }: CalendarProps) {
  return (
    <Week>
      <CalendarDaysRender
        onMeetingOpen={onMeetingOpen}
        meetings={meetings}
        onMeetingClick={onMeetingClick}
      />
      <Meeting />
    </Week>
  );
}

export default Calendar;
