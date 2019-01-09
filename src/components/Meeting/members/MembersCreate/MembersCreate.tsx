import * as React from "react";
import { IMember, INewMeeting, IMeeting } from "../../../../types";
import { TEXT_LENGHT } from "../../../../constants";
import { MembersList, MembersLi, MeetingBtn } from "./MembersCreateTheme";
import MeetingField from "../../../../styles/MeetingField";
import MeetingInput from "../../../../styles/MeetingInput";

export interface MembersCreateProps {
  currentMeeting: IMeeting | INewMeeting;
  addMembers: (membersArray: IMember[]) => void;
}

export interface MembersCreateState {
  members: IMember[];
  memberName: string;
}

class MembersCreate extends React.Component<
  MembersCreateProps,
  MembersCreateState
> {
  constructor(props: MembersCreateProps) {
    super(props);

    this.state = {
      memberName: "",
      members: this.props.currentMeeting.members
    };
  }

  addNewMember = (member: string) =>
    this.setState(
      state => ({
        members: [
          ...state.members,
          {
            id: state.members.length,
            name: member,
            visited: false
          }
        ]
      }),
      () => this.props.addMembers(this.state.members)
    );

  onMemberNameChange = (evt: any) => {
    this.setState({
      memberName: evt.target.value
    });
  };

  onAdd = () => {
    this.addNewMember(this.state.memberName);
    this.setState({ memberName: "" });
  };

  render() {
    return (
      <React.Fragment>
        <MembersList>
          {this.state.members.length > 0 &&
            this.state.members
              .sort((a: any, b: any) => a - b)
              .map((member, i: number) => {
                return (
                  <MembersLi key={member.id}>
                    <MeetingField>{member.name}</MeetingField>
                  </MembersLi>
                );
              })}
          <MembersLi>
            <MeetingInput
              type="text"
              maxLength={TEXT_LENGHT}
              value={this.state.memberName}
              onChange={this.onMemberNameChange}
            />
          </MembersLi>
        </MembersList>
        <MeetingBtn onClick={this.onAdd}>Добавить участника</MeetingBtn>
      </React.Fragment>
    );
  }
}

export default MembersCreate;
