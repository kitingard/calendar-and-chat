import * as React from 'react'
import styled from 'styled-components'

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
    height: 120px;
    overflow-y: scroll;
    padding: 0;
    margin: 0;
    list-style: none;
`
const MembersLi = styled.li`
    padding: 0;
    margin: 0;
`

function MembersCreateNew(array: object) {
    return (
       <React.Fragment>
            <MembersList>
                {Object.keys(array).length > 0
                ? Object.keys(array)
                    .sort((a: any, b: any) => a - b)
                    .map(memberId => {
                    const member = array[memberId]
                    return <MembersLi key={member.id}><MeetingInput type='text' value={member.name}/></MembersLi>
                    })
                : <div>Тут пока никого нет</div>
                }
            </MembersList>  
        </React.Fragment>
    )
    
}

export default MembersCreateNew