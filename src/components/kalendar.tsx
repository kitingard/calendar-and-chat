import * as React from 'react';
import styled from 'styled-components';

const Week = styled.div`
font-family: Roboto;
width: 1113px;
min-height: 811px;
box-sizing: border-box;
margin: 0px auto;
background: #FFFFFF;
border: 1px solid #DEDEDE;
`;

const Day = styled.div`
width: 100px;
height: 100px;
background-color: purple;
`;

const Date = styled.div`
width: 100px;
height: 50px;
border-right: 1px solid #DEDEDE;
background-color: blue;
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
                        <div key={entry.key}>
                        <Day>{entry.day}</Day>
                            <Date>{entry.date}</Date> 
                        </div>
                    ))}
                </React.Fragment>
            </Week>
        );
    }
}

export default Kalendar;