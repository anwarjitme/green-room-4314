import { legacy_createStore } from "redux";
import { reducer } from "./contact/reducer";


export const store=legacy_createStore(reducer)