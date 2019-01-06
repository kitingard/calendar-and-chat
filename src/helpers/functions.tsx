import * as moment from "moment";

export default function createWeek(): moment.Moment[] {
  const startOfWeek = moment().startOf("week");
  const endOfWeek = moment().endOf("week");

  const currentWeek = [];
  let day = startOfWeek;

  while (day <= endOfWeek) {
    currentWeek.push(day);
    day = day.clone().add(1, "d");
  }

  return currentWeek;
}
