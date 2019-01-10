import * as moment from "moment";
import * as React from "react";
import MeetingField from "../../../styles/MeetingField";
import { SELECT_FORMAT, TEXT_LENGHT } from "../../../constants";
import MembersWrap from "../members/MembersWrap/MembersWrap";
import MeetingFieldDisabled from "../MeetingFieldDisabled/MeetingFieldDisabled";
import { IMeeting, IMember } from "../../../types";
import {
  CancelBtn,
  MeetingLabel,
  MeetingSelect,
  MeetingText
} from "../../../styles/MeetingTheme";
import SaveBtn from "../../../styles/SaveBtn";
import MeetingInput from "../../../styles/MeetingInput";
import {
  calculateBetween,
  getTimes,
  findTime
} from "../../../helpers/functions";

const formatToDay = (day: Date) => moment(day).format("dd DD.MM.YYYY");

type MeetingFieldEditProps = {
  currentMeeting: IMeeting;
  onMeetingClose: () => void;
  onEditMeeting: (meeting: IMeeting) => void;
  onDeleteMeeting: (meetingId: number) => void;
};

type MeetingFieldEditState = {
  meetingEndTime: Date;
  meetingStartTime: Date;
  meetingTitle: string;
  members: IMember[];
};

class MeetingFieldEdit extends React.Component<
  MeetingFieldEditProps,
  MeetingFieldEditState
> {
  constructor(props: MeetingFieldEditProps) {
    super(props);

    this.state = {
      members: this.props.currentMeeting.members,
      meetingEndTime: moment(this.props.currentMeeting.end).toDate(),
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
  addMembers = (membersArray: IMember[]) =>
    this.setState({
      members: membersArray
    });

  addEndTime = (endTime: Date) =>
    this.setState({
      meetingEndTime: endTime
    });

  addStartTime = (startTime: Date) =>
    this.setState({
      meetingStartTime: startTime
    });

  editMeeting = () => {
    const {
      meetingTitle,
      meetingStartTime,
      meetingEndTime,
      members
    } = this.state;
    this.props.onEditMeeting({
      id: this.props.currentMeeting.id,
      title: meetingTitle,
      start: meetingStartTime,
      end: meetingEndTime,
      members: members
    });
  };

  deleteMeeting = () => {
    this.props.onDeleteMeeting(this.props.currentMeeting.id);
  };

  findTime(time: string) {
    const currentTime = moment();
    return time === currentTime.format("HH:hh DD MMM");
  }

  render() {
    return (
      <React.Fragment>
        {getTimes(
          moment(this.props.currentMeeting.start),
          moment(this.props.currentMeeting.end)
        ).find(findTime) ? (
          <MeetingFieldDisabled currentMeeting={this.props.currentMeeting} />
        ) : (
          <React.Fragment>
            <MeetingLabel htmlFor="meetingTitle">Тема встречи</MeetingLabel>
            <MeetingInput
              id="meetingTitle"
              type="text"
              maxLength={TEXT_LENGHT}
              value={this.state.meetingTitle}
              onChange={this.onTitleChange}
            />
            <MeetingText>День встречи</MeetingText>
            <MeetingField>
              {formatToDay(this.state.meetingStartTime)}
            </MeetingField>
            <MeetingLabel htmlFor="meetingStartTime">
              Начало встречи
            </MeetingLabel>
            <MeetingSelect
              id="meetingStartTime"
              value={moment(this.state.meetingStartTime).format(SELECT_FORMAT)}
              onChange={this.onStartTimeChange}
            >
              <React.Fragment>
                {this.calculateStartHours().map((hour, i) => (
                  <option key={i}>{hour}</option>
                ))}
              </React.Fragment>
            </MeetingSelect>
            <MeetingLabel htmlFor="meetingEndTime">
              Окончание встречи
            </MeetingLabel>
            <MeetingSelect
              id="meetingEndTime"
              value={moment(this.state.meetingEndTime).format(SELECT_FORMAT)}
              onChange={this.onEndTimeChange}
            >
              <React.Fragment>
                {this.calculateEndHours().map((hour, i) => (
                  <option key={i}>{hour}</option>
                ))}
              </React.Fragment>
            </MeetingSelect>
          </React.Fragment>
        )}
        <MembersWrap
          addMembers={this.addMembers}
          currentMeeting={this.props.currentMeeting}
        />
        <CancelBtn onClick={this.deleteMeeting}>Удалить</CancelBtn>
        <SaveBtn onClick={this.editMeeting}>Сохранить</SaveBtn>
      </React.Fragment>
    );
  }
}

export default MeetingFieldEdit;
