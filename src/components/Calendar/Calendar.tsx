import * as React from "react";
import styled from "styled-components";
import { Meeting } from "../../types";
import CalendarDaysRender from "./CalendarDaysRender";

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

// const CurrentDayWrapper = styled(DayWrapper)`
//     background: rgba(47, 129, 205, 0.1);
// `
// const CurrentDay = styled(Day)`
//     border-left: 1px solid #DEDEDE;
//     border-right: 1px solid #DEDEDE;
// `

export interface CalendarProps {
  onMeetingOpen?: () => void;
  onChatOpen?: () => void;
  meetings: Meeting[];
}

function Calendar({ onMeetingOpen, onChatOpen, meetings }: CalendarProps) {
  return (
    <Week>
      <CalendarDaysRender onMeetingOpen={onMeetingOpen} meetings={meetings} />
    </Week>
  );
}

export default Calendar;
