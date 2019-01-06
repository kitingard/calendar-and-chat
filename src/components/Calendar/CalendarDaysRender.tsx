import * as moment from "moment";
import * as React from "react";
import styled from "styled-components";
import MeetingCard from "./MeetingCard";
import createWeek from "../../helpers/functions";
import { Meeting } from "src/types";
import CalendarFieldWrap from "../../styles/CalendarFieldWrap";

const DayWrapper = styled.div`
  width: 100vw;
  height: 100vh;
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

type CalendarDaysRenderProps = {
  onMeetingOpen?: () => void;
  meetings: Meeting[];
};

function CalendarDaysRender({
  onMeetingOpen,
  meetings
}: CalendarDaysRenderProps) {
  return (
    <React.Fragment>
      {createWeek().map((momentDate: moment.Moment, i: number) => {
        const currentMeetings = meetings.filter(meeting =>
          momentDate.isSame(meeting.start, "day")
        );

        return (
          <DayWrapper key={i}>
            <Day>{momentDate.format("dddd")}</Day>
            {i === 6 || i === 5 ? (
              <React.Fragment>
                <DateDisabled>{momentDate.format("DD MMM")}</DateDisabled>
                <CalendarFieldDisabled />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Date>{momentDate.format("DD MMM")}</Date>
                <MeetingCard
                  onDoubleClick={onMeetingOpen}
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
