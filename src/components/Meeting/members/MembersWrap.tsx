import * as React from "react";
import styled from "styled-components";
import MembersCreate from "./MembersCreate";
import MembersChecked from "./MembersChecked";
import { IMember } from "src/types";

const MeetingLabel = styled.label`
  width: 128px;
  height: 20px;
  margin-right: 6px;
  margin-top: 5px;
  font-size: 13px;
  text-indent: 5px;
`;

export interface MembersWrapProps {
  addMembers: (membersArray: IMember[]) => void;
}

class MembersWrap extends React.Component<MembersWrapProps> {
  state = {
    checklist: false
  };
  // onMemberVisitedChange = (memberId: number) => {
  //   const member = this.props.members[memberId];
  //   const oldMembers = Object.assign({}, this.props.members);

  //   delete oldMembers[memberId];

  //   const newMember = {
  //     ...member,
  //     visited: !member.visited
  //   };

  //   this.setState(state => ({
  //     members: { ...oldMembers, [memberId]: newMember }
  //   }));
  // };

  render() {
    return (
      <React.Fragment>
        <MeetingLabel>Участники встречи</MeetingLabel>
        {this.state.checklist ? (
          <MembersChecked
          // members={this.props.members}
          // onClick={this.onMemberVisitedChange}
          />
        ) : (
          <MembersCreate addMembers={this.props.addMembers} />
        )}
      </React.Fragment>
    );
  }
}

export default MembersWrap;
