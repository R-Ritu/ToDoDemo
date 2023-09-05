import type { ActionType } from "../store";
import { createSlice } from "@reduxjs/toolkit";
import { getChild, getUser, login, logout} from "../action";
import { UserInfo } from "../../types";


type ReducerState = {
  isLogin: boolean;
  loading: boolean;
  error: "";
  data: UserInfo;
};

const initialState: ReducerState = {
  isLogin: false,
  loading: false,
  error: "",
  data: {} as UserInfo,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    //case for login
    builder.addCase(login.pending, (state: ReducerState) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      login.fulfilled,
      (state: ReducerState, action: ActionType<UserInfo>) => {
        state.loading = false;
        state.isLogin = true;
      }
    );
    builder.addCase(login.rejected, (state: ReducerState) => {
      state.loading = false;
    });

    //case for logout

    builder.addCase(logout.pending, (state: ReducerState) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(logout.fulfilled, (state: ReducerState) => {
      state.loading = false;
      state.isLogin = false;
      state.data = {} as UserInfo;
      state = initialState;
    });
    builder.addCase(logout.rejected, (state: ReducerState) => {
      state.loading = false;
      state.isLogin = false;
      state = initialState;
    });
    
  },
});

export default UserSlice;
