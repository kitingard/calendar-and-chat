import * as React from "react";
import styled from "styled-components";
import MembersCreate from "../../containers/MembersCreate";
import MembersChecked from "./MembersChecked";

const MeetingLabel = styled.label`
  width: 128px;
  height: 20px;
  margin-right: 6px;
  margin-top: 5px;
  font-size: 13px;
  text-indent: 5px;
`;
// const MeetingInput = styled.input`
//     width: 158px;
//     height: 26px;
//     margin-bottom: 10px;
//     border: 1px solid rgba(0, 0, 0, 0.3);
//     border-radius: 3px;
//     font-size: 13px;
//     text-indent: 5px;
// `
// const MembersList = styled.ul`
//     height: 120px;
//     overflow-y: scroll;
//     padding: 0;
//     margin: 0;
//     list-style: none;
// `
// const MembersLi = styled.li`
//     padding: 0;
//     margin: 0;
// `
// const MeetingButton = styled.button`
//   padding: 0px;
//   margin-left: 135px;
//   color: #2f81cd;
//   background-color: transparent;
//   border: none;
//   border-bottom: 1px dashed #2f81cd;
//   font-size: 13px;
// `;
// const None = styled.div`
//     display: none;
// `

export interface MembersWrapProps {
  members: object;
  onAddMember?: () => void;
}

class MembersWrap extends React.Component<MembersWrapProps> {
  public state = {
    checklist: false
  };
  public onMemberVisitedChange = (memberId: number) => {
    const member = this.props.members[memberId];
    const oldMembers = Object.assign({}, this.props.members);

    delete oldMembers[memberId];

    const newMember = {
      ...member,
      visited: !member.visited
    };

    this.setState(state => ({
      members: { ...oldMembers, [memberId]: newMember }
    }));
  };

  public render() {
    return (
      <React.Fragment>
        <MeetingLabel>Участники встречи</MeetingLabel>
        {this.state.checklist ? (
          <MembersChecked
            members={this.props.members}
            onClick={this.onMemberVisitedChange}
          />
        ) : (
          <MembersCreate />
        )}
      </React.Fragment>
    );
  }
}

// const MembersCreate = (props: any) => (
//   <ul>
//     {Object.keys(props.members).length > 0
//       ? Object.keys(props.members)
//         .sort((a: any, b: any) => a - b)
//         .map(memberId => {
//           const member = props.members[memberId]
//           return <li key={member.id}>{member.name}</li>
//         })
//       : <div>Тут пока никого нет</div>
//     }
//   </ul>
// )

export default MembersWrap;
