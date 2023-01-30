import { USER_SIGNUP, USER_SIGNUP_ERROR } from "./userSignup.type";
import axios from "axios";
const mainUrl = process.env.REACT_APP_MAIN_URL;

export const userSignup = (cred) => async (dispatch) => {
  try {
    let res = await axios.post(`https://easy-plum-monkey-wear.cyclic.app/user/register`, cred);
    console.log(res.data);
    dispatch({ type: USER_SIGNUP });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_ERROR });
  }
};
