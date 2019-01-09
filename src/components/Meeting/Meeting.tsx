import * as React from "react";
import { IMeeting } from "../../types";
import Modal from "./Modal/Modal";
import MeetingFieldCreate from "./MeetingFieldCreate/MeetingFieldCreate";
import MeetingFieldEdit from "./MeetingFieldEdit/MeetingFieldEdit";

export interface MeetingProps {
  meetings: IMeeting[];
  currentMeeting: IMeeting | null;
  onMeetingClose: () => void;
  onCreateMeeting: (object: IMeeting) => void;
  onEditMeeting: (object: IMeeting) => void;
  onDeleteMeeting: (meetingId: number) => void;
}

export interface MeetingState {
  name: string;
  memberState: string;
}

class Meeting extends React.Component<MeetingProps> {
  state = {
    name: "",
    memberState: "create"
  };

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
  render() {
    return (
      <Modal
        show={Boolean(this.props.currentMeeting)}
        title={this.stateOfMembers(this.state.memberState)}
        onClose={this.props.onMeetingClose}
      >
        {this.props.currentMeeting && this.props.currentMeeting.id + 1 ? (
          <MeetingFieldEdit
            currentMeeting={(this.props.currentMeeting as any) as IMeeting}
            onEditMeeting={this.props.onEditMeeting}
            onDeleteMeeting={this.props.onDeleteMeeting}
            onMeetingClose={this.props.onMeetingClose}
          />
        ) : (
          <MeetingFieldCreate
            onCreateMeeting={this.props.onCreateMeeting}
            onMeetingClose={this.props.onMeetingClose}
            currentMeeting={(this.props.currentMeeting as any) as IMeeting}
          />
        )}
      </Modal>
    );
  }
}

export default Meeting;
