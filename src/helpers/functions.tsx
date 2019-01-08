import * as moment from "moment";
import { SELECT_FORMAT } from "../constants";

export function createWeek(): moment.Moment[] {
  const startOfWeek = moment()
    .startOf("week")
    .hours(9)
    .minutes(0);
  const endOfWeek = moment()
    .endOf("week")
    .hours(9)
    .minutes(0);

  const currentWeek = [];
  let day = startOfWeek;

  while (day <= endOfWeek) {
    currentWeek.push(day);
    day = day.clone().add(1, "d");
  }

  return currentWeek;
}

export function calculateBetween(
  startDate: Date = moment()
    .hours(9)
    .minutes(0)
    .toDate()
): string[] {
  const start = moment(startDate);
  const end = moment(startDate)
    .hours(18)
    .minutes(30);

  const result = [];

  do {
    result.push(start.format(SELECT_FORMAT));
    start.add(30, "m");
  } while (end.isSameOrAfter(start));

  return result;
}
