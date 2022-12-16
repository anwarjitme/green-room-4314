
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Contactreducer } from "./Contact/reducer";
import { userLoginReducer } from "./UserLogin/UserLogin.reducer";
import { userSignupReducer } from "./UserSignup/userSignup.reducer";
const rootReducer = combineReducers({
  signup: userSignupReducer,
  login: userLoginReducer,
 contact:Contactreducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


