// import * as moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'
import cross from '../../assets/img/cross.svg'
// import hours from '../../assets/strings/meeting/MeetingText'
import MembersWrap from '../../containers/MembersWrap'
import Button from '../../styles/Button'

import MeetingWrapper from '../../styles/MeetingWrapper'
import ModalTitle from '../../styles/ModalTitle'
import MeetingFieldCreate from './meetingField/MeetingFieldCreate'
// import MeetingFieldHold from './meetingField/MeetingFieldHold'
// import 'moment/locale/ru'

// const MeetingTitleDisabled = styled.(ModalTitle)`
// background: #D0D0D0;
// border-radius: 2px 2px 0px 0px;
// `
const MeetingFormWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 14px 24px 24px 16px;
`
const CloseBtn = styled.div`
    position: absolute;
    top: 16px;
    right: 18px;
    width: 11px;
    height: 11px;
`
const CrossIcon = styled.img`
    position: absolute;
    right: 0px;
`
const CancelBtn = styled(Button)`
    position: absolute;
    bottom: 24px;
    right: 137px;
    color: #000000;
`
const SaveBtn = styled(Button)`
    position: absolute;
    bottom: 24px;
    right: 24px;
    background: #2F81CD;
    color: #FFFFFF;
`
// const None = styled.div`
//     display: none;
// `
// const today:string = moment().format('dd DD.MM.YYYY')
export interface Props {
    meetingOpen: boolean
    memberState: string
    onMeetingClose?: () => void
}

export const MeetingName = (props: any) => <React.Fragment>{props.text}</React.Fragment>

function Meeting({ meetingOpen, onMeetingClose, memberState }: Props) {
    let name: string
    (memberState === 'create') ? name = 'Встреча' : name = 'А вот и не встреча'
    // switch (memberState) {
    //     case 'create': 
    //         name = 'Встреча'
    //         break
    //     case 'active': 
    //         name = 'Активная Встреча'
    //         break
    //     case 'disabled': 
    //         name = 'Неактивная Встреча'
    //         break
    // }
    // if (meetingOpen) {
    //     return (
    //     <MeetingWrapper >
    //         <ModalTitle>
    //             <MeetingName text={name} />
    //             <CloseBtn onClick={onMeetingClose}><CrossIcon src={cross} /></CloseBtn>
    //         </ModalTitle>
    //         <MeetingFormWrapper>
    //             <MeetingFieldCreate />
    //             {/* <MeetingFieldHold />  */}
    //             <MembersCreate />
    //             <CancelBtn>Отмена</CancelBtn>
    //             <SaveBtn>Сохранить</SaveBtn>
    //         </MeetingFormWrapper>
    //     </MeetingWrapper>
    // )
    // }
    //     else {
    //         return(
    //             <None />
    //         )
    //     }
    return (
    <React.Fragment>
        {meetingOpen && <MeetingWrapper >
            <ModalTitle>
                <MeetingName text={name} />
                <CloseBtn onClick={onMeetingClose}><CrossIcon src={cross} /></CloseBtn>
            </ModalTitle>
            <MeetingFormWrapper>
                <MeetingFieldCreate />
                {/* <MeetingFieldHold />  */}
                <MembersWrap />
                <CancelBtn>Отмена</CancelBtn>
                <SaveBtn>Сохранить</SaveBtn>
            </MeetingFormWrapper>
        </MeetingWrapper>}
    </React.Fragment>
    )
}

export default Meeting