import Cookies from "js-cookie";

const initialState = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
