import * as React from "react";
import styled from "styled-components";
import { Member } from "../../types";

const MeetingInput = styled.input`
  width: 158px;
  height: 26px;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  font-size: 13px;
  text-indent: 5px;
`;
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
  members: Member[];
  onAddMember: (object: any) => void;
}

export interface MembersCreateState {}

class NewMember extends React.Component<
  MembersCreateProps,
  MembersCreateState
> {
  public state = {
    memberName: "",
    members: {}
  };

  // private ValidateForm(name: string) {
  //   let formValid: boolean = true;
  //   if (name.length < 3) {
  //     // this.setState({
  //     //   messageError: (
  //     //     <React.Fragment>
  //     //       <Error>Введите ФИО участника</Error>
  //     //     </React.Fragment>
  //     //   )
  //     // });
  //     formValid = false;
  //   } else {
  //     formValid = true;
  //   }
  //   return formValid;
  // }

  addNewMember = (member: string) =>
    this.setState(state => ({
      members: {
        ...this.state.members,
        [Object.keys(this.state.members).length]: {
          id: Object.keys(this.state.members).length,
          name: member,
          visited: false
        }
      }
    }));

  onMemberNameChange = (evt: any) =>
    this.setState({
      memberName: evt.target.value
    });

  onAdd = () => {
    this.props.onAddMember(this.state.members);
    this.addNewMember(this.state.memberName);
    this.setState({ memberName: "" });
    alert(JSON.stringify(this.state.members));
  };

  public render() {
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
                    <MeetingInput type="text" value={member.name} />
                    {/* {(formValid)?
                    <React.Fragment>
                    <Error>Введите ФИО участника</Error>
                  </React.Fragment>
                  :
                  <None />
                  } */}
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

export default NewMember;
