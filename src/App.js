import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import {
  authenticatedRoutes,
  notAuthenticatedRoutes,
  commonRoutes,
} from "./components/Routes/Routes";
import "./dark.css";
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
          {/* Only Not Authenticated Routes */}
          <Route element={<NotLoggedIn />}>
            {notAuthenticatedRoutes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>

          {/* Only Authenticated Routes */}
          <Route element={<RequireAuth />}>
            {authenticatedRoutes.map((route,i ) => (
              <Route
                key={i}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>

          {/* Common Routes */}
          {commonRoutes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                element={route.element}
              />
            ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
