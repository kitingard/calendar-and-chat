import * as moment from "moment";
import * as React from "react";
import styled from "styled-components";
import MeetingCard from "./MeetingCard";
import { createWeek } from "../../helpers/functions";
import { IMeeting } from "src/types";
import CalendarFieldWrap from "../../styles/CalendarFieldWrap";

const DayWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${(props: CurrentDayType) =>
    props.currentDay ? "rgba(47, 129, 205, 0.1)" : "transparent"};
`;
const Day = styled.div`
  width: 10vw;
  margin: 28px 21px 20px;
  font-size: 18px;
  line-height: 35px;
  text-align: center;
  :first-letter {
    text-transform: uppercase;
  }
`;
const Date = styled.p`
  margin: 0px;
  padding: 5px 89px 11px 0px;
  border-right: 1px solid #dedede;
  border-top: 1px solid #dedede;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;
const DateDisabled = styled(Date)`
  background-color: rgba(196, 196, 196, 0.3);
`;
const CalendarFieldDisabled = styled(CalendarFieldWrap)`
  background-color: rgba(196, 196, 196, 0.3);
`;
const today: moment.Moment = moment();

export interface CurrentDayType {
  currentDay: boolean;
}

export interface CalendarDaysRenderProps {
  onMeetingOpen: (day: Date) => void;
  onMeetingClick: (meetingId: number) => void;
  meetings: IMeeting[];
}

function CalendarDaysRender({
  onMeetingOpen: onCalendarClick,
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
            <Day onClick={() => console.log(momentDate.format("DD"))}>
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
                <MeetingCard
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
