// import * as moment from 'moment';
import * as React from 'react';
import styled from 'styled-components';
import { addWeek } from '../helpers/functions';

import Meeting from '../components/Meeting';

// import 'moment/locale/ru';

const Week = styled.div`
    display: flex;
    width: 1113px;
    margin: 1% auto;
    font-style: normal;
    font-weight: normal;
    background: #FFFFFF;
    border: 1px solid #DEDEDE;
    box-sizing: border-box;
`;

const DayWrapper = styled.div`

`;

const Day = styled.div`
    width: 116px;
    margin: 28px 21px 20px;
    font-size: 18px;
    line-height: 35px;
    text-align: center;
`;

const MeetingField = styled.div`
    height: 686px;
    background: #FFFFFF;
    border-right: 1px solid #DEDEDE;
    border-top: 1px solid #DEDEDE;
`;

const Date = styled.p`
    width: 69px;
    margin: 0px;
    padding: 5px 89px 11px 0px;
    border-right: 1px solid #DEDEDE;
    border-top: 1px solid #DEDEDE;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
`;

type DaysArray = Array<{date: string, day: string, key: number}>

// type DaysArray = Array<{days: Array<string>, keys: Array<number>}>

// const today = moment().format('dddd, MM MMM, dd DD.MM.YYYY');

export interface Props {
    meetingOpen: boolean;
    onMeetingOpen?: () => void;
}

function Calendar({ meetingOpen, onMeetingOpen}: Props) {

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
            key: 1,
        },
        {
            date: ' дек',
            day: 'Вторник',
            key: 2,
        },
        {
            date: ' дек',
            day: 'Среда',
            key: 3,
        },
        {
            date: ' дек',
            day: 'Четверг',
            key: 4,
        },
        {
            date: ' дек',
            day: 'Пятница',
            key: 5,
        },
        {
            date: ' дек',
            day: 'Суббота',
            key: 6,
        },
        {
            date: ' дек',
            day: 'Воскресенье',
            key: 7,
        },
    ]


    

    if (meetingOpen) {
        return (
            <Meeting />
        )
    }
    
    return (
        <Week>
            <React.Fragment>
                {days.map(entry => (
                    <DayWrapper key={entry.key}>
                        <Day>{entry.day}</Day>
                        <Date>
                        {addWeek()}{entry.date}
                        {/* <div>{today}</div> */}
                        </Date>
                        <MeetingField onDoubleClick={onMeetingOpen}/>
                    </DayWrapper>
                ))}
            </React.Fragment>
        </Week>
    );
  }

export default Calendar;
