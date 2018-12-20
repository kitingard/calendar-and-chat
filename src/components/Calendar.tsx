import * as React from 'react';
import styled from 'styled-components';

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
height: 725px;
background: #FFFFFF;
border-right: 1px solid #DEDEDE;
border-top: 1px solid #DEDEDE;
`;

const Date = styled.p`
width: 69px;
margin: 0px;
padding: 5px 89px 11px 0px;
border-bottom: 1px solid #DEDEDE;
font-size: 18px;
line-height: 22px;
text-align: center;
`;

type DaysArray = Array<{date: string, day: string, key: number}>

const days : DaysArray = [
    {
        date: '29 окт',
        day: 'Понедельник',
        key: 1,
    },
    {
        date: '30 окт',
        day: 'Вторник',
        key: 2,
    },
    {
        date: '31 окт',
        day: 'Среда',
        key: 3,
    },
    {
        date: '1 ноя',
        day: 'Четверг',
        key: 4,
    },
    {
        date: '2 ноя',
        day: 'Пятница',
        key: 5,
    },
    {
        date: '3 ноя',
        day: 'Суббота',
        key: 6 as number,
    },
    {
        date: '4 ноя',
        day: 'Воскресенье',
        key: 7,
    },
]



class Kalendar extends React.Component {
    public render() {
        return (
            <Week>
                <React.Fragment>
                    {days.map(entry => (
                        <DayWrapper key={entry.key}>
                            <Day>{entry.day}</Day>
                            <MeetingField>
                                <Date>{entry.date}</Date>
                            </MeetingField> 
                        </DayWrapper>
                    ))}
                </React.Fragment>
            </Week>
        );
    }
}

export default Kalendar;