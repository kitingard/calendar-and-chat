import * as moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'
import cross from '../assets/img/cross.svg'
import hours from '../assets/strings/meeting/MeetingText'
import Button from '../styles/Button'
import MeetingWrapper from '../styles/MeetingWrapper'
import ModalTitle from '../styles/ModalTitle'

import 'moment/locale/ru'
// const MeetingTitleDisabled = styled.(ModalTitle)`
// background: #D0D0D0;
// border-radius: 2px 2px 0px 0px;
// `

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
`

const MeetingSelectOption = styled.option`
    
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
const None = styled.div`
    display: none;
`

const today:string = moment().format('dd DD.MM.YYYY')
export interface Props {
    meetingOpen: boolean
    memberState: string
    memberAdd: boolean
    onMeetingClose?: () => void
    onAddMember?: () => void
    onStopAddMember?: () => void
}

function Meeting({ memberAdd, meetingOpen, onMeetingClose, onAddMember, onStopAddMember}: Props) {

    let i:number = 0

    function add() {
        i=i+1
        return (<MembersLi key={i}><MeetingInput type='text'/></MembersLi>)
    }
    
    if (meetingOpen) {
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
                <MembersList>
                        <MembersLi key={i}><MeetingInput type='text' /></MembersLi>
                        {(memberAdd)?
                        add()
                        :
                        <None />
                        }
                </MembersList>
                <MeetingButton onClick={onAddMember}>Добавить участника</MeetingButton>
                <CancelBtn>Отмена</CancelBtn>
                <SaveBtn>Сохранить</SaveBtn>
            </MeetingForm>
        </MeetingWrapper>
    )
    }
        else {
            return(
                <None />
            )
        }
    
        
}

export default Meeting