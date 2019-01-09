import * as React from "react";
import * as moment from "moment";
import MembersCreate from "../MembersCreate/MembersCreate";
import MembersChecked from "../MembersChecked/MembersChecked";
import { IMember, IMeeting, INewMeeting } from "src/types";
import { MeetingLabel } from "../../../../styles/MeetingTheme";

export interface MembersWrapProps {
  currentMeeting: IMeeting | INewMeeting;
  addMembers: (membersArray: IMember[]) => void;
}

class MembersWrap extends React.Component<MembersWrapProps> {
  state = {
    checklist: false
  };

  render() {
    return (
      <React.Fragment>
        <MeetingLabel>Участники встречи</MeetingLabel>
        {moment(this.props.currentMeeting.start).isSame(moment(), "hour") ? (
          <MembersChecked currentMeeting={this.props.currentMeeting} />
        ) : (
          <MembersCreate
            addMembers={this.props.addMembers}
            currentMeeting={this.props.currentMeeting}
          />
        )}
      </React.Fragment>
    );
  }
}

export default MembersWrap;
