// import * as moment from 'moment';
import * as React from 'react';
// import styled from 'styled-components';
import ModalTitle from '../styles/ModalTitle';
import ModalWrapper from '../styles/ModalWrapper';

// import 'moment/locale/ru';

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
        </ModalWrapper>
    )
    // }
}

export default Meeting;