import * as moment from "moment";
import * as React from "react";
import styled from "styled-components";
import MeetingField from "../../../styles/MeetingField";
import { SELECT_FORMAT } from "../../../constants";

import "moment/locale/ru";

const MeetingLabel = styled.label`
  width: 128px;
  height: 20px;
  margin-right: 6px;
  margin-top: 5px;
  font-size: 13px;
  text-indent: 5px;
`;
const MeetingInput = styled.input`
  width: 158px;
  height: 26px;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  font-size: 13px;
  text-indent: 5px;
`;
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
const MeetingSelectOption = styled.option``;
const today: string = moment().format("dd DD.MM.YYYY");

type MeetingFieldCreateProps = {
  currentDate: Date;
};

type MeetingFieldCreateState = {
  meetingDay: string;
  meetingEndTime: Date;
  meetingStartTime: Date;
  meetingTitle: string;
};

class MeetingFieldCreate extends React.Component<
  MeetingFieldCreateProps,
  MeetingFieldCreateState
> {
  constructor(props: MeetingFieldCreateProps) {
    super(props);

    this.state = {
      meetingDay: "",
      meetingEndTime: moment(this.props.currentDate)
        .add(1, "h")
        .toDate(),
      meetingStartTime: moment(this.props.currentDate).toDate(),
      meetingTitle: ""
    };
  }

  public onTitleChange = (evt: any) =>
    this.setState({
      meetingTitle: evt.target.value
    });

  private onStartTimeChange = (evt: any) => {
    const newMeetingStartTime = this.convertValueToMoment(evt.target.value);
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

  private onEndTimeChange = (evt: any) => {
    const meetingEndTime = this.convertValueToMoment(evt.target.value);

    this.setState({
      meetingEndTime: meetingEndTime.toDate()
    });
  };

  private convertValueToMoment(value: string): moment.Moment {
    const [hours, minutes] = value.split(":");
    return moment(this.props.currentDate)
      .hours(Number(hours))
      .minutes(Number(minutes));
  }

  private calculateBetween(
    startDate: Date = moment()
      .hours(9)
      .minutes(0)
      .toDate()
  ): string[] {
    const start = moment(startDate);
    const end = moment(startDate)
      .hours(18)
      .minutes(30);

    const result = [];

    do {
      result.push(start.format(SELECT_FORMAT));
      start.add(30, "m");
    } while (end.isSameOrAfter(start));

    return result;
  }

  private calculateStartHours(): string[] {
    return this.calculateBetween();
  }

  private calculateEndHours(): string[] {
    const offset = moment(this.state.meetingStartTime)
      .add(30, "m")
      .toDate();

    return this.calculateBetween(offset);
  }

  // public onStartTimeChange = (evt: any) =>
  //   this.setState({
  //     meetingStartTime: evt.target.value
  //   });

  // public onEndTimeChange = (evt: any) =>
  //   this.setState({
  //     meetingEndTime: evt.target.value
  //   });

  public render() {
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
        <MeetingField>{today}</MeetingField>
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
      </React.Fragment>
    );
  }
}

export default MeetingFieldCreate;
