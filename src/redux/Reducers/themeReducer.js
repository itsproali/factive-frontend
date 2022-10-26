import Cookies from "js-cookie";

const initialState = Cookies.get("darkTheme")
  ? JSON.parse(Cookies.get("darkTheme"))
  : true;

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIGHT":
      Cookies.set("darkTheme", JSON.stringify(false));
      return false;
    case "DARK":
      Cookies.set("darkTheme", JSON.stringify(true));
      return true;
    default:
      return state;
  }
};

export default themeReducer;
