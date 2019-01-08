import * as moment from "moment";
import * as React from "react";
import styled from "styled-components";
import MeetingField from "../../../styles/MeetingField";
import { SELECT_FORMAT } from "../../../constants";
import MembersWrap from "../members/MembersWrap";
import Button from "../../../styles/Button";
import { INewMeeting, IMember } from "../../../types";
import MeetingInput from "../../../styles/MeetingInput";
import MeetingLabel from "../../../styles/MeetingLabel";
import { calculateBetween } from "../../../helpers/functions";

const MeetingText = styled.p`
  width: 128px;
  height: 20px;
  padding: 0px;
  margin-right: 6px;
  margin-top: 5px;
  font-size: 13px;
  text-indent: 5px;
`;
const MeetingSelect = styled.select`
  width: 162px;
  height: 28px;
  margin-bottom: 10px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  font-size: 13px;
`;
const CancelBtn = styled(Button)`
  position: absolute;
  bottom: 24px;
  right: 137px;
  color: #000000;
`;
const SaveBtn = styled(Button)`
  position: absolute;
  bottom: 24px;
  right: 24px;
  background: #2f81cd;
  color: #ffffff;
`;

const MeetingSelectOption = styled.option``;
const formatToDay = (day: Date) => moment(day).format("dd DD.MM.YYYY");

type MeetingFieldCreateProps = {
  currentMeeting: INewMeeting;
  onMeetingClose: () => void;
  onCreateMeeting: (meeting: INewMeeting) => void;
};

type MeetingFieldCreateState = {
  meetingEndTime: Date;
  meetingStartTime: Date;
  meetingTitle: string;
  members: IMember[];
};

class MeetingFieldCreate extends React.Component<
  MeetingFieldCreateProps,
  MeetingFieldCreateState
> {
  constructor(props: MeetingFieldCreateProps) {
    super(props);

    this.state = {
      members: this.props.currentMeeting.members,
      meetingEndTime: moment(this.props.currentMeeting.end)
        .add(1, "h")
        .toDate(),
      meetingStartTime: moment(this.props.currentMeeting.start).toDate(),
      meetingTitle: this.props.currentMeeting.title
    };
  }

  onTitleChange = (evt: any) =>
    this.setState({
      meetingTitle: evt.target.value
    });

  onStartTimeChange = (evt: any) => {
    const newMeetingStartTime = this.convertValueToMoment(
      evt.target.value,
      "start"
    );
    const meetingEndTime = moment(this.state.meetingEndTime);

    if (meetingEndTime.isSameOrBefore(newMeetingStartTime)) {
      this.setState({
        meetingStartTime: newMeetingStartTime.toDate(),
        meetingEndTime: newMeetingStartTime
          .clone()
          .add(30, "m")
          .toDate()
      });
    } else {
      this.setState({
        meetingStartTime: newMeetingStartTime.toDate()
      });
    }
  };

  onEndTimeChange = (evt: any) => {
    const meetingEndTime = this.convertValueToMoment(evt.target.value, "end");

    this.setState({
      meetingEndTime: meetingEndTime.toDate()
    });
  };

  convertValueToMoment(
    value: string,
    stateField: "start" | "end"
  ): moment.Moment {
    const [hours, minutes] = value.split(":");
    const convertingDate =
      stateField === "start"
        ? this.state.meetingStartTime
        : this.state.meetingEndTime;
    return moment(convertingDate)
      .hours(Number(hours))
      .minutes(Number(minutes));
  }

  calculateStartHours(): string[] {
    return calculateBetween();
  }

  calculateEndHours(): string[] {
    const offset = moment(this.state.meetingStartTime)
      .add(30, "m")
      .toDate();
    return calculateBetween(offset);
  }

  createMeeting = () => {
    const {
      meetingTitle,
      meetingStartTime,
      meetingEndTime,
      members
    } = this.state;
    this.props.onCreateMeeting({
      title: meetingTitle,
      start: meetingStartTime,
      end: meetingEndTime,
      members: members
    });
  };

  addMembers = (membersArray: IMember[]) =>
    this.setState({
      members: membersArray
    });

  render() {
    return (
      <React.Fragment>
        <MeetingLabel htmlFor="meetingTitle">Тема встречи</MeetingLabel>
        <MeetingInput
          id="meetingTitle"
          type="text"
          value={this.state.meetingTitle}
          onChange={this.onTitleChange}
        />
        <MeetingText>День встречи</MeetingText>
        <MeetingField>{formatToDay(this.state.meetingStartTime)}</MeetingField>
        <MeetingLabel htmlFor="meetingStartTime">Начало встречи</MeetingLabel>
        <MeetingSelect
          id="meetingStartTime"
          value={moment(this.state.meetingStartTime).format(SELECT_FORMAT)}
          onChange={this.onStartTimeChange}
        >
          <React.Fragment>
            {this.calculateStartHours().map((hour, i) => (
              <MeetingSelectOption key={i}>{hour}</MeetingSelectOption>
            ))}
          </React.Fragment>
        </MeetingSelect>
        <MeetingLabel htmlFor="meetingEndTime">Окончание встречи</MeetingLabel>
        <MeetingSelect
          id="meetingEndTime"
          value={moment(this.state.meetingEndTime).format(SELECT_FORMAT)}
          onChange={this.onEndTimeChange}
        >
          <React.Fragment>
            {this.calculateEndHours().map((hour, i) => (
              <MeetingSelectOption key={i}>{hour}</MeetingSelectOption>
            ))}
          </React.Fragment>
        </MeetingSelect>
        <MembersWrap addMembers={this.addMembers} />
        <CancelBtn onClick={this.props.onMeetingClose}>Отмена</CancelBtn>
        <SaveBtn onClick={this.createMeeting}>Сохранить</SaveBtn>
      </React.Fragment>
    );
  }
}

export default MeetingFieldCreate;
