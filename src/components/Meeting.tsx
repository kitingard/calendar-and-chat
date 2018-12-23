// import * as moment from 'moment';
import * as React from 'react';
import styled from 'styled-components';

// import 'moment/locale/ru';

const MeetingWrapper = styled.div`
    position: fixed;
    top: 20%;
    left: 50%;
    width: 332px;
    height: 444px;
    margin-left: -166px;
    background: #FFFFFF;
`;

const MeetingTitle = styled.div`
    width: 104px;
    padding: 10px 214px 10px 14px;
    font-size: 18px;
    text-indent: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;


function Meeting() {
    // const dayOfWeek = moment().format("dd");
    // if ( dayOfWeek === 'вс') {
    //     // let a: any;
    //     // a = 'Воскресенье';
    //     return (
    //         <MeetingWrapper >
    //             <MeetingTitle>Воскресенье</MeetingTitle>
    //         </MeetingWrapper>
    //     )
    // } else {
        return (
        <MeetingWrapper >
            <MeetingTitle>Встреча</MeetingTitle>
        </MeetingWrapper>
    )
    // }
}

export default Meeting;