import * as React from 'react'
import styled from 'styled-components'

const MeetingLabel = styled.label`
    width: 128px;
    height: 20px;
    margin-right: 6px;
    margin-top: 5px;
    font-size: 13px;
    text-indent: 5px;
`
const MeetingInput = styled.input`
    width: 158px;
    height: 26px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    font-size: 13px;
    text-indent: 5px;
`
const MembersList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`
const MembersLi = styled.li`
    padding: 0;
    margin: 0;
`
const MeetingButton = styled.button`
    padding: 0px;
    margin-left: 135px;
    color: #2F81CD;
    background-color: transparent;
    border: none;
    border-bottom: 1px dashed #2F81CD;
    font-size: 13px;
`
// const None = styled.div`
//     display: none;
// `

// function MembersActive(hhh: string) {
//     return (
//         <React.Fragment>
            // <MeetingLabel>Участники встречи</MeetingLabel>
//                 <MembersList>
//                     <MembersLi key={0}><MeetingInput type='text'/></MembersLi>
//                         {/* {(memberAdd)?
//                         add()
//                         :
//                         <None />
//                         } */}
//                 </MembersList>
//             <MeetingButton onClick={onAddMember}>Добавить участника</MeetingButton>
//         </React.Fragment>
//     )
// }

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

const defaultMembers = {
  '0': {
    id: 0,
    name: 'Маша Сидорова',
    visited: false,
  },
  '1': {
    id: 1,
    name: 'Паша Иванов',
    visited: true,
  },
}

class NewMember extends React.Component {
    public state = {
      memberName: '',
      members: defaultMembers,
    }
  
    // public onAddMember = (member: string) => this.setState(state => ({
    //   members: [...state.members, {
    //     name: member,
    //     id: Object.keys(state.members).length,
    //     visited: false,
    //   }],
    // }))
  
    public onMemberNameChange = (evt: any) => this.setState({
      memberName: evt.target.value,
    })
  
    public onAdd = () => {
      // this.props.onAddMember(this.state.memberName)
      this.setState({memberName: ''})
    }
  
    public render() {
      return (
        <React.Fragment>
          <MeetingLabel>Участники встречи</MeetingLabel>
          <MembersList>
            {Object.keys(this.state.members).length > 0
              ? Object.keys(this.state.members)
                .sort((a: any, b: any) => a - b)
                .map(memberId => {
                  const member = this.state.members[memberId]
                  return <MembersLi key={member.id}><MeetingInput type='text' value={member.name}/></MembersLi>
                })
              : <div>Тут пока никого нет</div>
            }
            <MeetingInput type='text' value={this.state.memberName} onChange={this.onMemberNameChange} />
          </MembersList>
          <MeetingButton onClick={this.onAdd}>Добавить участника</MeetingButton>
        </React.Fragment>
      )
    }
  }
  

export default NewMember