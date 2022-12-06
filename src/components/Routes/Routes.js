import AccountActivate from "../../pages/AccountActivate/AccountActivate";
import Welcome from "../../pages/AccountActivate/Welcome";
import Friends from "../../pages/Friends/Friends";
import Gaming from "../../pages/Gaming/Gaming";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Market from "../../pages/Market/Market";
import Profile from "../../pages/Profile/Profile";
import Watch from "../../pages/Watch/Watch";
import Loading from "../Loading/Loading";

// Authenticated Routes
export const authenticatedRoutes = [
  { path: "/", element: <Home /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/activate", element: <AccountActivate /> },
  { path: "/profile", element: <Profile /> },
  { path: "/friends", element: <Friends /> },
  { path: "/watch", element: <Watch /> },
  { path: "/market", element: <Market /> },
  { path: "/gaming", element: <Gaming /> },
];

// Not Authenticated Routes
export const notAuthenticatedRoutes = [{ path: "/login", element: <Login /> }];

// Common Routes
export const commonRoutes = [{ path: "/loading", element: <Loading /> }];
