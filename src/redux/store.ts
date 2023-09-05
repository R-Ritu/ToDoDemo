import {configureStore} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer} from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";

import {APP_ENV} from "../helpers/Connections";
import rootReducers from "./reducers";
import UserSlice from "./reducers/user";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [UserSlice.name],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);
const middleware = APP_ENV !== "development" ? [thunk] : [thunk, logger];
const store = configureStore({
  reducer: persistedReducer,
  devTools: APP_ENV === "development",
  middleware,
});

export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;
export type GetStateType = typeof store.getState;
export type RootState = ReturnType<GetStateType>;

export interface ActionType<P> {
  readonly type: string;
  readonly payload: P;
}
export interface ActionMetaType<P, S> {
  readonly type: string;
  readonly payload?: P;
  readonly meta: {
    arg?: S;
  };
}
export type Reducer<S, A> = (state: S, action: A) => S;

export default store;
