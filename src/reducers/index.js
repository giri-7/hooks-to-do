import {combineReducers} from "redux";
import userReducers from "./userReducers.js";
//import doctorReducers from "./doctorReducers.js";

const rootReducer = combineReducers({
	userLock: userReducers
});

export default rootReducer;

