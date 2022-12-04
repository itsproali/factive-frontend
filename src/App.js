import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import "./dark.css";
import AccountActivate from "./pages/AccountActivate/AccountActivate";
import Welcome from "./pages/AccountActivate/Welcome";
import Friends from "./pages/Friends/Friends";
import Gaming from "./pages/Gaming/Gaming";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Market from "./pages/Market/Market";
import Profile from "./pages/Profile/Profile";
import Watch from "./pages/Watch/Watch";
import NotLoggedIn from "./utils/NotLoggedIn";
import RequireAuth from "./utils/RequireAuth";

function App() {
  // Make Header visible or not
  const location = useLocation();
  const isHidden = ["/login", "/activate", "/welcome"].includes(
    location.pathname
  );

  // Theme
  const darkTheme = useSelector((state) => state.darkTheme);
  return (
    <div className={`${darkTheme && "dark"}`}>
      <div className="app">
        {isHidden || <Header />}
        <Routes>
          <Route element={<NotLoggedIn />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/activate" element={<AccountActivate />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/market" element={<Market />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/loading" element={<Loading />} />
          </Route>
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
