import {createAsyncThunk} from "@reduxjs/toolkit";
import EndPoints from "../../constants/EndPoints";
import {AddChildInfo, ConfirmPasswordIfo, ForgotInfo, LoginInfo, registerInfo, UserInfo, VerifyUserInfo} from "../../types";
import APIClient from "../../helpers/APIClient";
import {startFullScreenLoader, stopFullScreenLoader} from "../../utils/loader";
import {navigationRef} from "../../router";
import { StackActions, } from "@react-navigation/native";
import NavigationRoute from "../../constants/navigationRoutes";
import { Platform } from "react-native";
import { getQueryParams } from "../../helpers/QueryString";

export const login = createAsyncThunk<UserInfo,  {
  username: string;
  password: string;
  callBack: (data:any) => void;
}>(
  EndPoints.login,
  async ({
    username,
    password
  }) => {
    return {isLogin: true};
  },
);
export const logout = createAsyncThunk(EndPoints.logout, async () => {
  const data = null;
  return data;
});


