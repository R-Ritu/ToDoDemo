import { combineReducers } from "redux";
import UserSlice from "./user";

const rootReducers = combineReducers({
  [UserSlice.name]: UserSlice.reducer,
});

export default rootReducers;
