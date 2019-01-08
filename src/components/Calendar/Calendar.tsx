import * as React from "react";
import styled from "styled-components";
import CalendarDaysRender from "./CalendarDaysRender";
import Meetings from "../../containers/Meetings";
import { Meeting } from "../../types";

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
  onMeetingOpen?: () => void;
  meetings: Meeting[];
}

function Calendar({ onMeetingOpen, meetings }: CalendarProps) {
  return (
    <Week>
      <CalendarDaysRender onMeetingOpen={onMeetingOpen} meetings={meetings} />
      <Meetings meetings={meetings} />
    </Week>
  );
}

export default Calendar;
