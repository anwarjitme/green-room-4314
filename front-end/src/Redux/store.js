import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {companyreducer} from "./Company/reducer"
import {Contactreducer} from "./contact/reducer"
import { userLoginReducer } from "./UserLogin/UserLogin.reducer";
import { userSignupReducer } from "./UserSignup/userSignup.reducer";
const rootReducer = combineReducers({
  signup: userSignupReducer,
  login: userLoginReducer,
  contact: Contactreducer,
  companies: companyreducer,

});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
