import { combineReducers } from "redux";
import updateCounter from "./Counter";

const reducers = combineReducers({
    count: updateCounter,
});

export default reducers;
