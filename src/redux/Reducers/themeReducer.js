import Cookies from "js-cookie";

const initialState = Cookies.get("theme") ? JSON.parse(Cookies.get("theme")) : true;

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIGHT":
      Cookies.set("theme", JSON.stringify(false));
      return false;
    case "DARK":
      Cookies.set("theme", JSON.stringify(true));
      return true;
    default:
      return state;
  }
};

export default themeReducer;
