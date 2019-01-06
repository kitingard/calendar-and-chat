import * as React from "react";
import styled from "styled-components";
import icon from "../../assets/img/icon.svg";
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

const ChatButton = styled.button`
  position: absolute;
  bottom: 13px;
  right: 21px;
  width: 58px;
  height: 58px;
  border: none;
  background-color: transparent;
`;
const ChatIcon = styled.img`
  margin: -2px 0px 0px -6px;
`;

export interface CalendarProps {
  onMeetingOpen?: () => void;
  onChatOpen?: () => void;
  meetings: Meeting[];
}

function Calendar({ onMeetingOpen, onChatOpen, meetings }: CalendarProps) {
  return (
    <Week>
      <CalendarDaysRender onMeetingOpen={onMeetingOpen} meetings={meetings} />
      <ChatButton onClick={onChatOpen}>
        <ChatIcon src={icon} />
      </ChatButton>
    </Week>
  );
}

export default Calendar;
