import * as React from 'react';
import styled from 'styled-components'

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
const MembersLabel = styled.label`
    font-size: 13px;
    text-indent: 10px;
    font-family: Roboto;
`
const MembersInput = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 2px;
`

function MembersChecked(array: object) {
    return (
        <React.Fragment>
            <MembersList>
                {Object.keys(array)
                .sort((a: any, b: any) => a - b)
                .map(memberId => {
                    const member = array[memberId]
                    return (
                    <MembersLi key={member.id}>
                        <MembersInput id='membersCheckbox' type="checkbox" checked={member.visited} onChange={array[memberId]} />
                        <MembersLabel htmlFor='membersCheckbox'>{member.name}</MembersLabel>
                    </MembersLi>
                    )
                })}
            </MembersList>
        </React.Fragment>
    )
}

export default MembersChecked