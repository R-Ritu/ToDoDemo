import queryString from "query-string";
import { RecordType } from "../types";

// eslint-disable-next-line max-len
export const getQueryString = (
  url: string,
  params: NodeJS.Dict<
    | string
    | number
    | boolean
    | readonly string[]
    | readonly number[]
    | readonly boolean[]
    | null
  >
): string => {
  return `${url}?${queryString.stringify(params)}`;
};

// eslint-disable-next-line max-len
export const getQueryParams = (
  url: string,
  params: NodeJS.Dict<
    | string
    | number
    | boolean
    | readonly string[]
    | readonly number[]
    | readonly boolean[]
    | null
  >
): string => {
  let qs = "";
  Object.keys(params).map(item => {
    if (typeof params[item] === "object") {
      qs += `${qs.length ? '&' : ''}${item}=${JSON.stringify(params[item])}`;
    } else {
      qs += `${qs.length ? '&' : ''}${item}=${params[item] ? params[item] : ""}`;
    }
  });

  return `${url}?${qs}`;
  // return `${url}?${queryString.stringify(params)}`;
};

export const getFromData = (params: RecordType) => {
  const formData = new FormData();
  Object.keys(params).map(item => {
    formData.append(item, params[item]);
  });
  return formData;
};
