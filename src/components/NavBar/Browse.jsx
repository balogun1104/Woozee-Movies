import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { isActiveStyle, isNotActiveStyle } from "../../styles/style";

const Browse = ({ open, setOpen }) => {
  const openAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    config: { duration: "300" },
  });

  return (
    <>
      <animated.div
        className="gap-4 flex flex-col items-center justify-center fixed top-[10%] left-[25%] z-20 bg-gradient-to-t from-[#141414c2] to-black w-[180px] md:hidden"
        style={openAnimation}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
          onClick={() => setOpen(!open)}
        >
          Home
        </NavLink>
        <NavLink
          to="/tvshows"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
          onClick={() => setOpen(!open)}
        >
          TV Shows
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
          onClick={() => setOpen(!open)}
        >
          Movies
        </NavLink>
        <NavLink
          to="/popular"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
          onClick={() => setOpen(!open)}
        >
          New & Popular
        </NavLink>
        <NavLink
          to="/mylist"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
          onClick={() => setOpen(!open)}
        >
          My List
        </NavLink>
      </animated.div>
    </>
  );
};

export default Browse;
