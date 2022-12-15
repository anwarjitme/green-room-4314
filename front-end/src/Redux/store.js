
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer } from "./UserLogin/UserLogin.reducer";
import { userSignupReducer } from "./UserSignup/userSignup.reducer";
const rootReducer = combineReducers({
  signup: userSignupReducer,
  login: userLoginReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


