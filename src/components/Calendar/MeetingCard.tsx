import styled from "styled-components";
import * as React from "react";
import CalendarFieldWrap from "../../styles/CalendarFieldWrap";
import { Meeting } from "../../types";

const Card = styled.div`
  padding: 17px 0px;
  background-color: #2f81cd;
  font-size: 14px;
  text-indent: 5px;
  color: #ffffff;
`;

type MeetingCardProps = {
  onDoubleClick?: () => void;
  meetings: Meeting[];
};

const MeetingCard = ({ onDoubleClick, meetings }: MeetingCardProps) => (
  <CalendarFieldWrap onDoubleClick={onDoubleClick}>
    {meetings.map((meeting, i: number) => (
      <Card
        key={i}
        onClick={() =>
          alert(meeting.members.map(({ name }) => name).join(", "))
        }
      >
        >>{meeting.title}
      </Card>
    ))}
  </CalendarFieldWrap>
);

export default MeetingCard;
