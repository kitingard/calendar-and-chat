import * as moment from "moment";
import * as React from "react";
import styled from "styled-components";
import hours from "../../../assets/strings/meeting/MeetingText";
import MeetingField from "../../../styles/MeetingField";

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

class MeetingFieldCreate extends React.Component {
  public state = {
    meetingDay: "",
    meetingEndTime: "",
    meetingStartTime: "",
    meetingTitle: ""
  };

  public onTitleChange = (evt: any) =>
    this.setState({
      meetingTitle: evt.target.value
    });

  public onStartTimeChange = (evt: any) =>
    this.setState({
      meetingStartTime: evt.target.value
    });

  public onEndTimeChange = (evt: any) =>
    this.setState({
      meetingEndTime: evt.target.value
    });

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
          value={this.state.meetingStartTime}
          onChange={this.onStartTimeChange}
        >
          <React.Fragment>
            {hours.map(entry => (
              <MeetingSelectOption key={entry.key}>
                {entry.hour}
              </MeetingSelectOption>
            ))}
          </React.Fragment>
        </MeetingSelect>
        <MeetingLabel htmlFor="meetingEndTime">Окончание встречи</MeetingLabel>
        <MeetingSelect
          id="meetingEndTime"
          value={this.state.meetingEndTime}
          onChange={this.onEndTimeChange}
        >
          <React.Fragment>
            {hours.map(entry => (
              <MeetingSelectOption key={entry.key}>
                {entry.hour}
              </MeetingSelectOption>
            ))}
          </React.Fragment>
        </MeetingSelect>
      </React.Fragment>
    );
  }
}

export default MeetingFieldCreate;
