// import * as moment from 'moment';
import * as React from 'react';
import styled from 'styled-components';
import icon from '../assets/img/icon.svg';
import Chat from '../components/Chat';
import Meeting from '../components/Meeting';


import { addWeek } from '../helpers/functions';


// import 'moment/locale/ru';

const Week = styled.div`
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;
    font-style: normal;
    font-weight: normal;
    background: #FFFFFF;
    border: 1px solid #DEDEDE;
    box-sizing: border-box;
`;

const DayWrapper = styled.div`
    width: 100vw;
`;

const Day = styled.div`
    width: 10vw;
    margin: 28px 21px 20px;
    font-size: 18px;
    line-height: 35px;
    text-align: center;
`;

const MeetingField = styled.div`
    height: 85vh;
    background: #FFFFFF;
    border-right: 1px solid #DEDEDE;
    border-top: 1px solid #DEDEDE;
`;

const Date = styled.p`
    margin: 0px;
    padding: 5px 89px 11px 0px;
    border-right: 1px solid #DEDEDE;
    border-top: 1px solid #DEDEDE;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
`;

const ChatButton = styled.button`
    position: absolute;
    bottom: 13px;
    right: 21px;
    width: 58px;
    height: 58px;
    border: none;
    background-color: transparent;
`;

const ChatIcon = styled.img`
    margin: -2px 0px 0px -6px;
`;


type DaysArray = Array<{date: string, day: string, key: number}>

// type DaysArray = Array<{days: Array<string>, keys: Array<number>}>

// const today = moment().format('dddd, MM MMM, dd DD.MM.YYYY');

export interface Props {
    meetingOpen: boolean;
    chatOpen: boolean;
    onMeetingOpen?: () => void;
    onChatOpen?: () => void;
}

function Calendar({ chatOpen, meetingOpen, onMeetingOpen, onChatOpen }: Props) {

    // const dates : DaysArray = [
    //     {
    //         days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    //         keys: [0, 1, 2, 3, 4, 5, 6],
    //     }   
    // ]


    const days : DaysArray = [
        {
            date: ' дек',
            day: 'Понедельник',
            key: 0,
        },
        {
            date: ' дек',
            day: 'Вторник',
            key: 1,
        },
        {
            date: ' дек',
            day: 'Среда',
            key: 2,
        },
        {
            date: ' дек',
            day: 'Четверг',
            key: 3,
        },
        {
            date: ' дек',
            day: 'Пятница',
            key: 4,
        },
        {
            date: ' дек',
            day: 'Суббота',
            key: 5,
        },
        {
            date: ' дек',
            day: 'Воскресенье',
            key: 6,
        },
    ]


    

    if (meetingOpen) {
        return (
            <Meeting />
        )
    }

    if (chatOpen) {
        return (
            <Chat />
        )
    }
    
    return (
        <Week>
            <React.Fragment>
                {days.map(entry => (
                    <DayWrapper key={entry.key}>
                        <Day>{entry.day}</Day>
                        <Date>
                        {addWeek(entry.key)}{entry.date}
                        {/* <div>{today}</div> */}
                        </Date>
                        <MeetingField onDoubleClick={onMeetingOpen}/>
                    </DayWrapper>
                ))}
            </React.Fragment>
            <ChatButton onClick={onChatOpen}><ChatIcon src={icon} /></ChatButton>
        </Week>
    );
  }

export default Calendar;
