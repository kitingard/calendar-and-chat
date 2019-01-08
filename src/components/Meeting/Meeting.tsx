import * as React from "react";
import { IMeeting } from "../../types";
import Modal from "./Modal";

import MeetingFieldCreate from "./meetingField/MeetingFieldCreate";

export interface MeetingProps {
  meetings: IMeeting[];
  currentMeeting: IMeeting | null;
  onMeetingClose: () => void;
  onCreateMeeting: (object: IMeeting) => void;
}

export interface MeetingState {
  name: string;
  memberState: string;
  newMeeting: IMeeting;
  onCreateMeeting: (meeting: IMeeting) => void;
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
        <MeetingFieldCreate
          onCreateMeeting={this.props.onCreateMeeting}
          onMeetingClose={this.props.onMeetingClose}
          currentMeeting={(this.props.currentMeeting as any) as IMeeting}
        />
      </Modal>
    );
  }
}

export default Meeting;
