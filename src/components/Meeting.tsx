// import * as moment from 'moment';
import * as React from 'react';
import styled from 'styled-components';
import ModalTitle from '../styles/ModalTitle';
import ModalWrapper from '../styles/ModalWrapper';

// import 'moment/locale/ru';

const MeetingForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 14px 24px 24px 16px;
`;

const MeetingLabel = styled.label`
    width: 128px;
    height: 20px;
    margin-right: 6px;
    margin-top: 5px;
    font-size: 13px;
    text-indent: 5px;
`;

const MeetingInput = styled.input`
    width: 158px;
    height: 26px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    font-size: 13px;
    text-indent: 5px;
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
        <ModalWrapper >
            <ModalTitle>Встреча</ModalTitle>
            <MeetingForm>
                <MeetingLabel>Тема встречи</MeetingLabel>
                <MeetingInput type='text'/>
                <MeetingLabel>День встречи</MeetingLabel>
                <MeetingInput type='date'/>
                <MeetingLabel>Начало встречи</MeetingLabel>
                <MeetingInput type='time'/>
                <MeetingLabel>Окончание встречи</MeetingLabel>
                <MeetingInput type='time'/>
                <MeetingLabel>Участники встречи</MeetingLabel>
                <MeetingInput type='text'/>
            </MeetingForm>
        </ModalWrapper>
    )
    // }
}

export default Meeting;