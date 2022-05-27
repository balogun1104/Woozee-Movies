import React, { useEffect, useState } from "react";
import user from "../../Assets/images/userProfile.png";
import woozeee from "../../Assets/images/Woozeee.svg";

import {
  isActiveStyle,
  isNotActiveStyle,
  navChanged,
  navNoChange,
} from "../../styles/style";
import Browse from "../../components/NavBar/Browse";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import { useSpring, animated } from "react-spring";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Logout } from "../../Redux/Reducers/userSlice";
import { NetflixOriginals } from "../../Redux/Reducers/moviesSlice";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const [open, setOpen] = useState(false);

  const [mobileNav, setMobileNav] = useState(false);
  const [navChange, setNavChange] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const UlList =
    "hidden  md:flex items-center text-white space-x-4 font-semibold";

  const openAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: isopen ? 1 : 0 },
    config: { duration: "300" },
  });
  const scroll = () => {
    if (window.scrollY >= 600) {
      setNavChange(true);
    } else {
      setNavChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  const HandleClick = () => {
    setMobileNav(!mobileNav);
    setOpen(true);
  };

  const hanldeLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(Logout(localStorage.removeItem("user")));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={`${navChange ? navChanged : navNoChange}`}>
      <div className="flex items-center justify-between">
        <Link to="/">
          <a href="google.com" />
          <img src={woozeee} alt="Woozee Original" className="w-[100px] mr-4" />
        </Link>

        <div className={UlList}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            Home
          </NavLink>

          <NavLink
            to="tvshows"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            Tv Shows
          </NavLink>

          <NavLink
            to="movies"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            Movies
          </NavLink>

          <NavLink
            to="popular"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            New & popular
          </NavLink>
        </div>

        {/*mobile Nav*/}
        <button onClick={HandleClick} className="text-white md:hidden ml-16">
          Browse
        </button>
        {mobileNav && <Browse setOpen={setOpen} open={open} />}
      </div>

      <div className="flex items-center justify-center space-x-2 relative">
        <IoIosSearch className="text-white text-[20] md:text-[30px]" />
        <h1 className="font-semibold text-[15px] text-white">Kids</h1>
        <IoIosNotifications className="text-white text-[20] md:text-[30px]" />
        <img
          src={user}
          alt="user"
          className="w-12 h-12"
          onClick={() => setIsopen(!isopen)}
        />
        <animated.div
          className=" text-red-500 cursor-pointer font-bold flex items-center justify-center h-[100px] absolute top-12 right-0 z-20 bg-gradient-to-t from-[#141414c2] to-black w-[180px] "
          style={openAnimation}
          onClick={hanldeLogout}
        >
          SignOut
        </animated.div>
      </div>
    </div>
  );
};

export default Navbar;
