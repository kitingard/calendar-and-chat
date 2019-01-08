// import * as moment from 'moment'
import * as React from "react";
import styled from "styled-components";
import cross from "../../assets/img/cross.svg";
import MembersWrap from "../../containers/MembersWrap";
import Button from "../../styles/Button";
import Form from "../../styles/Form";
// import { Meeting, Member } from "../../types";
import { Meeting } from "../../types";

import MeetingWrapper from "../../styles/MeetingWrapper";
import ModalTitle from "../../styles/ModalTitle";
import MeetingFieldCreate from "./meetingField/MeetingFieldCreate";

// import MeetingFieldHold from './meetingField/MeetingFieldHold'
// import 'moment/locale/ru'

// const MeetingTitleDisabled = styled.(ModalTitle)`
// background: #D0D0D0;
// border-radius: 2px 2px 0px 0px;
// `
const CrossIcon = styled.img`
  position: absolute;
  right: 0px;
`;
const CloseBtn = styled.div`
  position: absolute;
  top: 16px;
  right: 18px;
  width: 11px;
  height: 11px;
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

// const today:string = moment().format('dd DD.MM.YYYY')
export interface MeetingProps {
  meetings: Meeting[];
  currentDate: Date;
  meetingOpen: boolean;
  onMeetingClose: () => void;
  onCreateMeeting: (object: Meeting) => void;
}

export interface MeetingState {
  name: string;
  memberState: string;
  newMeeting: Meeting;
}

export const MeetingName = (props: any) => (
  <React.Fragment>{props.text}</React.Fragment>
);

class Meetings extends React.Component<MeetingProps> {
  public state = {
    name: "",
    memberState: "create",
    newMeeting: {}
  };

  // addNewMeeting = (
  //   members: Member[],
  //   title: string,
  //   startDate: Date,
  //   endDate: Date
  // ) =>
  //   this.setState(state => ({
  //     newMeeting: {
  //       members: members,
  //       title: title,
  //       start: startDate,
  //       end: endDate
  //     }
  //   }));

  // createNewMeeting = () => {
  //   addNewMeeting();
  //   this.props.onCreateMeeting(this.state.newMeeting);
  //   this.props.onMeetingClose();
  //   alert(JSON.stringify(this.state.newMeeting));
  // };

  stateOfMembers(stateMember: string) {
    if (stateMember === "create") {
      this.state.name = "Встреча";
    } else if (stateMember === "active") {
      this.state.name = "Активная Встреча";
    } else if (stateMember === "disabled") {
      this.state.name = "Неактивная Встреча";
    }
    return this.state.name;
  }
  public render() {
    return (
      <React.Fragment>
        {this.props.meetingOpen && (
          <MeetingWrapper>
            <ModalTitle>
              <MeetingName text={this.stateOfMembers(this.state.memberState)} />
              <CloseBtn onClick={this.props.onMeetingClose}>
                <CrossIcon src={cross} />
              </CloseBtn>
            </ModalTitle>
            <Form>
              <MeetingFieldCreate currentDate={this.props.currentDate} />
              {/* <MeetingFieldHold />  */}
              <MembersWrap />
              <CancelBtn>Отмена</CancelBtn>
              <SaveBtn>Сохранить</SaveBtn>
            </Form>
          </MeetingWrapper>
        )}
      </React.Fragment>
    );
  }
}

export default Meetings;
