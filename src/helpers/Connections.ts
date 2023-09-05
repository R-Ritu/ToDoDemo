/*
 * @file: Connection.js
 * @description: Connection file for the application
 * Name : Suraj Sanwal
 * */

"use strict";
import Config from "react-native-config";

type envType = "development" | "production" | "staging" | "wdyr";

export const APP_ENV = Config.APP_ENV as envType;
export const API_URL = `http://a618d52397c42469285c1dcf87eebc5f-1360464592.us-east-1.elb.amazonaws.com`
export const BASE_URL = Config.BASE_URL;
export const API_VERSION = Config.API_VERSION;
export const API_PATH = Config.API_PATH;
export const WEB_SSL = Config.WEB_SSL;
export const API_SSL = Config.API_SSL;
export const TIMEOUT = APP_ENV === "development" ? 3000 : 12000;

const Connections = {
  getBaseUrl: (): string => {
    return `${API_URL}/`;
  },
  apiEndPoint: (): string => {
    return `${API_SSL}://${API_URL}/`;
  },
};

export default Connections;
