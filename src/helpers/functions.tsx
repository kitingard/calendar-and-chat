import * as moment from 'moment'
import 'moment/locale/ru'

export function addWeek(key: number) {

    // moment.updateLocale('ru', {
    //     weekdaysShort : ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
    // });

    // moment.updateLocale('ru', {
    //     weekdays : [
    //         "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
    //     ]
    // });
    moment.locale('ru')
    const startOfWeek = moment().startOf('week')
    const endOfWeek = moment().endOf('week')

    const days = []
    let day = startOfWeek

    while (day <= endOfWeek) {
        days.push(day.toDate())
        day = day.clone().add(1, 'd')
    }

    let dates = []
    dates = days[key].toString().split(' ', 4)

    interface DatesObjectType {
        day: string, 
        month : string, 
        number : string, 
        year : string
    }

    const datesObject: DatesObjectType = {day: '', month: '', number: '', year: ''}
    datesObject.day = dates[0]
    datesObject.month = dates[1]
    datesObject.number = dates[2]
    datesObject.year = dates[3]


    return (
        datesObject.number
    )
}
