import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
