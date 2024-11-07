import {combineReducers} from "redux";
import {counterReducer} from "./counter.ts";
import {isLoginReducer} from "./isLogin.ts";

export const reducers = combineReducers({
    counter: counterReducer,
    isLogin: isLoginReducer
})