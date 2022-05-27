import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { Home, Movies, Tvshows, Popular, Mylist } from "../Pages";
import GetStart from "./Getstart/GetStart";
import Register from "./Registration/Register";

import Navbar from "../components/NavBar/Navbar";
import Banner from "../components/share/Banner";
import { Steps, SignIn } from "./Registration/Steps";

import { userAuth } from "../Redux/Reducers/userSlice";
import { BannerState } from "../Redux/Reducers/bannerShow";
import DarkModeToggle from "react-dark-mode-toggle";

const AnimatedRoutes = () => {
  const location = useLocation();
  const banner = useSelector(BannerState);
  const Auth = useSelector(userAuth);

  const RequireAuth = ({ children }) => {
    return Auth ? children : <Navigate to="/signin" />;
  };

  return (
    <>
     
        {banner && (
          <>
            <Navbar />
            <Banner />
          </>
        )}

        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/steps"
              element={
                <RequireAuth>
                  <Steps />
                </RequireAuth>
              }
            />
            <Route
              path="/tvshows"
              element={
                <RequireAuth>
                  <Tvshows />
                </RequireAuth>
              }
            />
            <Route
              path="/movies"
              element={
                <RequireAuth>
                  <Movies />
                </RequireAuth>
              }
            />
            <Route path="/GetStart" element={<GetStart />} />

            <Route path="/register" element={<Register />} />
            <Route
              path="/popular"
              element={
                <RequireAuth>
                  <Popular />
                </RequireAuth>
              }
            />
            <Route
              path="/mylist"
              element={
                <RequireAuth>
                  <Mylist />
                </RequireAuth>
              }
            />

            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </AnimatePresence>
      
    </>
  );
};

export default AnimatedRoutes;
