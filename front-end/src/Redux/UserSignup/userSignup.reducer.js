import { USER_SIGNUP, USER_SIGNUP_ERROR } from "./userSignup.type";

const initialValue = {
  isAuth: false,
  isError: false,
  isErrorMsg: "",
};

export const userSignupReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP: {
      return {
        ...state,
        isAuth: true,
        isError: false,
      };
    }
    case USER_SIGNUP_ERROR: {
      return {
        ...state,
        isAuth: false,
        isError: true,
        isErrorMsg: payload,
      };
    }
    default:
      return state;
  }
};
