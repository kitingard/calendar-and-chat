import * as moment from 'moment';

import 'moment/locale/ru';

export function addWeek() {
    const startOfWeek = moment().startOf('week');
    const endOfWeek = moment().endOf('week');

    const days = [];
    let day = startOfWeek;

    while (day <= endOfWeek) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }

    return (
        days[0].getDate()
    )
}
