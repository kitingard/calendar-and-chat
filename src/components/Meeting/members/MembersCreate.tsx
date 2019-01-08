import * as React from "react";
import styled from "styled-components";
import { IMember } from "../../../types";
import MeetingField from "../../../styles/MeetingField";
import MeetingInput from "../../../styles/MeetingInput";

const MembersList = styled.ul`
  max-height: 120px;
  overflow-y: scroll;
  padding: 0;
  margin: 0;
  list-style: none;
`;
const MembersLi = styled.li`
  padding: 0;
  margin: 0;
`;
const MeetingBtn = styled.button`
  padding: 0px;
  margin-left: 135px;
  color: #2f81cd;
  background-color: transparent;
  border: none;
  border-bottom: 1px dashed #2f81cd;
  font-size: 13px;
`;
const None = styled.div`
  display: none;
`;

export interface MembersCreateProps {
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
      members: []
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
          {Object.keys(this.state.members).length > 0 ? (
            Object.keys(this.state.members)
              .sort((a: any, b: any) => a - b)
              .map(memberId => {
                const member = this.state.members[memberId];
                return (
                  <MembersLi key={member.id}>
                    <MeetingField>{member.name}</MeetingField>
                  </MembersLi>
                );
              })
          ) : (
            <None />
          )}
          <MembersLi>
            <MeetingInput
              type="text"
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
