import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import "./dark.css";
import AccountActivate from "./pages/AccountActivate/AccountActivate";
import Friends from "./pages/Friends/Friends";
import Gaming from "./pages/Gaming/Gaming";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Market from "./pages/Market/Market";
import Profile from "./pages/Profile/Profile";
import Watch from "./pages/Watch/Watch";

function App() {
  // Make Header visible or not
  const location = useLocation();
  const isHidden = ["/login", "/activate"].includes(location.pathname);

  // Theme
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`app ${theme && "dark"}`}>
      {isHidden || <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activate/:token" element={<AccountActivate />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/market" element={<Market />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
