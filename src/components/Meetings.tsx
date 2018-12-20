import * as React from 'react';
import styled from 'styled-components';

const MeetingWrapper = styled.div`
    width: 332px;
    height: 444px;
    background: #FFFFFF;
`;

const MeetingTitle = styled.div`
    width: 104px;
    padding: 10px 214px 10px 14px;
    font-size: 18px;
    text-indent: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

class Meeting extends React.Component {
    public render() {
        return (
            <MeetingWrapper>
                <MeetingTitle>Встреча</MeetingTitle>
            </MeetingWrapper>
        )
    }
}

export default Meeting;