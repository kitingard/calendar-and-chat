import * as moment from "moment";
import * as React from "react";
import styled from "styled-components";
import CalendarFields from "../CalendarFields/CalendarFields";
import { createWeek } from "../../../helpers/functions";
import { IMeeting } from "src/types";
import {
  DateDisabled,
  CalendarFieldDisabled,
  Date
} from "./CalendarDaysRenderTheme";

const DayWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${(props: CurrentDayType) =>
    props.currentDay ? "rgba(47, 129, 205, 0.1)" : "transparent"};
`;
const Day = styled.div`
  width: 10vw;
  padding: 28px 38px 20px 22px;
  font-size: 18px;
  line-height: 35px;
  text-align: center;
  border-left: ${(props: CurrentDayType) =>
    props.currentDay ? "1px solid #DEDEDE" : "none"};
  border-right: ${(props: CurrentDayType) =>
    props.currentDay ? "1px solid #DEDEDE" : "none"};
  :first-letter {
    text-transform: uppercase;
  }
`;

const today: moment.Moment = moment();

export interface CurrentDayType {
  currentDay: boolean;
}

export interface CalendarDaysRenderProps {
  onCalendarClick: (day: Date) => void;
  onMeetingClick: (meetingId: number) => void;
  meetings: IMeeting[];
}

function CalendarDaysRender({
  onCalendarClick,
  meetings,
  onMeetingClick
}: CalendarDaysRenderProps) {
  return (
    <React.Fragment>
      {createWeek().map((momentDate: moment.Moment, i: number) => {
        const currentMeetings = meetings.filter(meeting =>
          momentDate.isSame(meeting.start, "day")
        );
        const currentDay = momentDate.isSame(today, "day");

        return (
          <DayWrapper key={i} currentDay={currentDay}>
            <Day
              onClick={() => console.log(momentDate.format("DD"))}
              currentDay={currentDay}
            >
              {momentDate.format("dddd")}
            </Day>
            {i === 6 || i === 5 ? (
              <React.Fragment>
                <DateDisabled>{momentDate.format("DD MMM")}</DateDisabled>
                <CalendarFieldDisabled />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Date>{momentDate.format("DD MMM")}</Date>
                <CalendarFields
                  onMeetingClick={onMeetingClick}
                  currentDate={momentDate.toDate()}
                  onCalendarClick={onCalendarClick}
                  meetings={currentMeetings}
                />
              </React.Fragment>
            )}
          </DayWrapper>
        );
      })}
    </React.Fragment>
  );
}

export default CalendarDaysRender;
