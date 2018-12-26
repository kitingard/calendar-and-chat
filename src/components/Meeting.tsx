import * as moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'
import cross from '../assets/img/cross.svg'
import MeetingWrapper from '../styles/MeetingWrapper'
import ModalTitle from '../styles/ModalTitle'


import 'moment/locale/ru'

const MeetingForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 14px 24px 24px 16px;
`

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
const MeetingText = styled.p`
    width: 128px;
    height: 20px;
    padding: 0px;
    margin-right: 6px;
    margin-top: 5px;
    font-size: 13px;
    text-indent: 5px;
`
const MeetingField = styled.div`
    width: 158px;
    height: 26px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    font-size: 13px;
    line-height: 26px;
    text-indent: 5px;
`

const MeetingSelect = styled.select`
    width: 158px;
    height: 26px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    font-size: 13px;
    text-indent: 5px;
`

const MeetingSelectOption = styled.option`
    
`

const MeetingButton = styled.button`
    position: absolute;
    bottom: 165px;
    right: 50px;
    padding: 0px;
    color: #2F81CD;
    background-color: transparent;
    border: none;
    border-bottom: 1px dashed #2F81CD;
    font-size: 13px;
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

const today:string = moment().format('dd DD.MM.YYYY')
export interface Props {
    meetingOpen: boolean
    onMeetingClose?: () => void
}

function Meeting({onMeetingClose}: Props) {

    type hoursType = Array<{hour: string, key: number}>

    const hours: hoursType = [
        {
            hour: '9:00',
            key: 0,
        },
        {
            hour: '9:30',
            key: 1,
        },
        {
            hour: '10:00',
            key: 2,
        },
        {
            hour: '10:30',
            key: 3,
        },
        {
            hour: '11:00',
            key: 4,
        },
        {
            hour: '11:30',
            key: 5,
        },
        {
            hour: '12:00',
            key: 6,
        },
        {
            hour: '12:30',
            key: 7,
        },
        {
            hour: '13:00',
            key: 8,
        },
        {
            hour: '13:30',
            key: 9,
        },
        {
            hour: '14:00',
            key: 10,
        },
        {
            hour: '14:30',
            key: 11,
        },
        {
            hour: '15:00',
            key: 12,
        },
        {
            hour: '15:30',
            key: 13,
        },
        {
            hour: '16:00',
            key: 14,
        },
        {
            hour: '16:30',
            key: 15,
        },
        {
            hour: '17:00',
            key: 16,
        },
        {
            hour: '17:30',
            key: 17,
        },
        {
            hour: '18:00',
            key: 18,
        },
        {
            hour: '18:30',
            key: 19,
        },
    ]
        return (
        <MeetingWrapper >
            <ModalTitle>
                Встреча
                <CloseBtn onClick={onMeetingClose}><CrossIcon src={cross} /></CloseBtn>
            </ModalTitle>
            <MeetingForm>
                <MeetingLabel htmlFor='meetingTheme'>Тема встречи</MeetingLabel>
                <MeetingInput id='meetingTheme' type='text'/>
                <MeetingText>День встречи</MeetingText>
                <MeetingField>{today}</MeetingField>
                <MeetingLabel htmlFor='meetingStartTime'>Начало встречи</MeetingLabel>
                <MeetingSelect id='meetingStartTime'>
                <React.Fragment>
                    {hours.map(entry => (
                        <MeetingSelectOption key={entry.key}>{entry.hour}</MeetingSelectOption>
                    ))}
                </React.Fragment>
                </MeetingSelect>
                <MeetingLabel htmlFor='meetingEndTime'>Окончание встречи</MeetingLabel>
                <MeetingSelect id='meetingEndTime'>
                <React.Fragment>
                    {hours.map(entry => (
                        <MeetingSelectOption key={entry.key}>{entry.hour}</MeetingSelectOption>
                    ))}
                </React.Fragment>
                </MeetingSelect>
                <MeetingLabel>Участники встречи</MeetingLabel>
                <MeetingInput type='text'/>
                <MeetingButton>Добавить участника</MeetingButton>
            </MeetingForm>
        </MeetingWrapper>
    )
}

export default Meeting