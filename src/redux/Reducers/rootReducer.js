import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ user: userReducer, theme: themeReducer });

export default rootReducer;
