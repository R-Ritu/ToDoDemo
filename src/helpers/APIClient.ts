/* eslint-disable */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import Connections, { APP_ENV } from "./Connections";
import type { StoreType } from "../redux/store";
import { isFullScreenLoaderLoading, stopFullScreenLoader } from "../utils/loader";
import { DropDownHolder, DropDownHolderType } from "./DropdownHolder";
import { logout } from "../redux/action";
let store: StoreType;

export const injectStore = (_store: StoreType): void => {
  store = _store;
};

const APIClient = axios.create({
  baseURL: Connections.getBaseUrl(),
  timeout: 1000 * 2 * 60,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
APIClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    
    //add Authorization: token,
    config.headers = {
      ...config.headers,
      accesstoken: store?.getState()?.user?.data?.token?.accessToken || "",
    };
    console.log("config===>", config);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

APIClient.interceptors.response.use(
  (response: AxiosResponse) => {
    const dropdown: DropDownHolderType = DropDownHolder.getDropDown();
    // dropdown.alertWithType(
    //   "success",
    //   `Success #${response?.data?.statusCode}`,
    //   response?.data?.response?.message
    // );
    return response.data;
  },
  (error: AxiosError) => {
    console.log("error===>", error, error.response, error.response?.data?.messag);
    if (error.isAxiosError) {
      const dropdown: DropDownHolderType = DropDownHolder.getDropDown();
      if (error?.response?.data?.statusCode === 401) {
        //token is expired
        dropdown.alertWithType(
          "error",
          "Error #401",
          "Authentication Token Expired Please Login Again!"
        );
        store.dispatch(logout.fulfilled({}, ""));
      }
      if (error?.response?.data?.statusCode === 400) {
        //token is expired
        dropdown.alertWithType(
          "error",
          "Error #401",
          "Authentication Token Expired Please Login Again!"
        );
        store.dispatch(logout.fulfilled({}, ""));
      }
       else {
        dropdown.alertWithType(
          "error",
          `Error #${error?.response?.data?.statusCode || 502}`,
          error.response?.data?.response?.message || "Network Request Fail."
        );
      }
    }
    isFullScreenLoaderLoading && stopFullScreenLoader();
    return Promise.reject(error);
  }
);

export default APIClient;
