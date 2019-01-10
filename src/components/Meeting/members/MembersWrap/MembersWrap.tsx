import * as React from "react";
import * as moment from "moment";
import MembersCreate from "../MembersCreate/MembersCreate";
import MembersChecked from "../MembersChecked/MembersChecked";
import { IMember, IMeeting, INewMeeting } from "src/types";
import { getTimes, findTime } from "../../../../helpers/functions";
import { MeetingLabel } from "../../../../styles/MeetingTheme";

export interface MembersWrapProps {
  currentMeeting: IMeeting | INewMeeting;
  addMembers: (membersArray: IMember[]) => void;
}

export interface MembersWrapState {
  members: IMember[];
}

class MembersWrap extends React.Component<MembersWrapProps, MembersWrapState> {
  state = {
    members: this.props.currentMeeting.members
  };

  onMemberVisitedChange = (memberId: number) => {
    const member = this.state.members[memberId];
    const oldMembers = this.state.members.slice();
    delete oldMembers[memberId];
    const newMember = {
      ...member,
      visited: !member.visited
    };

    this.setState(
      state => ({
        members: [...oldMembers, (state.members[memberId] = newMember)]
      }),
      () => this.props.addMembers(this.state.members)
    );
  };

  render() {
    return (
      <React.Fragment>
        <MeetingLabel>Участники встречи</MeetingLabel>
        {getTimes(
          moment(this.props.currentMeeting.start),
          moment(this.props.currentMeeting.end)
        ).find(findTime) ? (
          <MembersChecked
            currentMeeting={this.props.currentMeeting}
            onMemberVisitedChange={this.onMemberVisitedChange}
          />
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
