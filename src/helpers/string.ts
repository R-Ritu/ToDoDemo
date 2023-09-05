import moment from "moment";
import { Status, Step } from "../components/RNStepIndicator";
import { getFullWeekDates } from "./Time";

export const getSpacedString = (obj: any, key: string): string => {
  if (typeof obj === "object") {
    if (typeof obj[key] === "number") {
      return obj[key].toString();
    }
    return obj[key]?.length ? `${obj[key]} ` : "";
  }
  return "";
};

export const randomEnumValue = (enumeration: any) => {
  const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
};

export const getRandomData = (format = "L") => {
  return getFullWeekDates().reduce((i: Step[], j) => {
    i.push({
      date: moment(j).format(format),
      status: randomEnumValue(Status),
      selected: false,
    });
    return i;
  }, []);
};
