import {combineReducers} from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";

export default combineReducers({
    log: logReducer, // log is the object named logReducer is passed here.
    tech:techReducer
})