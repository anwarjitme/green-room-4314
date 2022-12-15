import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGOUT } from "./UserLogin.type";

const userToken = localStorage.getItem("userToken");
const initialValue = {
  isAuth: !!userToken,
  token: userToken || "",
  isError: false,
  data: {},
};

export const userLoginReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case USER_LOGIN: {
      localStorage.setItem("userToken", payload.token);
      localStorage.setItem("userData", JSON.stringify(payload.user));
      return {
        ...state,
        isAuth: true,
        token: payload,
        data: payload.user,
        isError: false,
      };
    }
    case USER_LOGOUT: {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userData");
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: false,
      };
    }
    case USER_LOGIN_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    default:
      return state;
  }
};
