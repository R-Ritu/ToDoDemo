import moment, { Moment } from "moment";
import { MarkedDatesType } from "react-native-calendars";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
export const dateFromNow = (
  myDate: Moment | Date | string,
  isPlural = false
) => {
  return moment(myDate).calendar(null, {
    lastWeek: isPlural ? "ddd, Do" : "ddd",
    lastDay: isPlural ? "[Yesterday's]" : "[Yesterday]",
    sameDay: isPlural ? "[Today's]" : "[Today]",
    nextDay: isPlural ? "[Tomorrow's]" : "[Tomorrow]",
    nextWeek: isPlural ? "ddd, Do" : "ddd",
    sameElse: isPlural ? "ddd, Do MMM" : "ddd",
    // when the date is further away, use from-now functionality
    // sameElse: function () {
    //   return "[" + fromNow + "]";
    // }
  });
};

export const dayFromNow = (myDate: Moment | Date | string) => {
  return moment(myDate).calendar(null, {
    lastWeek: "dddd['s]",
    lastDay: "[Yesterday's]",
    sameDay: "[Today's]",
    nextDay: "[Tomorrow's]",
    nextWeek: "dddd['s]",
    sameElse: "dddd['s]",
  });
};

export const getFromNowFormatted = (date: string): string => {
  return `${dateFromNow(date)}, ${moment(date).format("Do MMM")}`;
};

export const getFullWeekDates = (current = true) => {
  const start = current
    ? moment().startOf("isoWeek")
    : moment().add(1, "week").startOf("isoWeek");
  const end = current
    ? moment().endOf("isoWeek")
    : moment().add(1, "week").endOf("isoWeek");
  const data: string[] = [];
  while (start.isBefore(end)) {
    data.push(start.toISOString());
    start.add(1, "day");
  }
  return data;
};

export const getStartEndDatesOfWeek = (current = true) => {
  let startDate = "";
  let endDate = "";

  startDate = !current
    ? moment().add(1, "week").startOf("isoWeek").format("L")
    : moment().startOf("isoWeek").format("L");
  endDate = !current
    ? moment().add(1, "week").endOf("isoWeek").format("L")
    : moment().endOf("isoWeek").format("L");

  return { startDate, endDate };
};

export const getWeekTitle = (current = true, format = "ddd, Do") => {
  const start = current
    ? moment().startOf("isoWeek")
    : moment().add(1, "week").startOf("isoWeek");
  const end = current
    ? moment().endOf("isoWeek")
    : moment().add(1, "week").endOf("isoWeek");
  return `${moment(start).format(format)} - ${moment(end).format(format)}`;
};

export const getStartEndDatesOfMonth = (myDate: Moment | string) => {
  return {
    startDate: moment(myDate).startOf("month").format("L"),
    endDate: moment(myDate).endOf("month").format("L"),
  };
};

export const getWeeksFromDate = (
  startDate?: Moment | string,
  endDate?: Moment | string
): number => {
  return moment(endDate).diff(moment(startDate), "weeks");
};

export const isProgramExpired = (endDate?: string) => {
  if (!endDate) {
    return false;
  }
  return moment().isSameOrAfter(moment(endDate), "day");
};

export const getStartEndOfWeekByDate = (date: Date | Moment | null | undefined | string) => {
  const startDate = moment(date).startOf("isoWeek").format("L");
  const endDate = moment(date).endOf("isoWeek").format("L");
  return { startDate, endDate };
};

declare type MarkedDatesType = {
  [key: string]: MarkingProps;
};

export const getTrackerCalenderConfig = (date) => {
  const startDate = moment().subtract(2, "month");
  const endDate = moment().add(1, "week");
  const dates: MarkedDatesType = [];
  while (endDate.isSameOrAfter(startDate, "date")) {
    if (startDate.isoWeekday() !== 1) {
      dates[startDate.format("YYYY-MM-DD")] = { disabled: true, disableTouchEvent: true, inactive: true }
    }
    if (moment(date).format("L") === startDate.format("L")) {
      dates[startDate.format("YYYY-MM-DD")] = {
        ...dates[startDate.format("YYYY-MM-DD")] || {}, selected: true
      }
    }
    startDate.add(1, "day");
  }
  return dates;
}