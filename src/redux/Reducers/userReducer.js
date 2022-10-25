import Cookies from "js-cookie";

const initialState = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      Cookies.set("user", JSON.stringify(action.payload));
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
