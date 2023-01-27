import axios from "axios";
import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGOUT } from "./UserLogin.type";

export const userLogin = (cred) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:8080/user/login", cred);
    dispatch({ type: USER_LOGIN, payload: res.data });
    console.log(res.data);
  } catch (error) {
    dispatch({ type: USER_LOGIN_ERROR });
  }
};

export const userLogout = () => ({ type: USER_LOGOUT });
