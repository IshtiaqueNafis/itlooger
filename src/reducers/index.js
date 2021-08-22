import {combineReducers} from "redux";
import logReducer from "./logReducer";

export default combineReducers({
    log: logReducer // log is the object named logReducer is passed here.
})