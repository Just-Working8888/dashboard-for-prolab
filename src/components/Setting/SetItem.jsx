import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkItem = ({ item }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "flex border-stone-300 rounded-lg border-[1px] px-[15p] text-blue-400  transition   bg-slate-100"
          : "transition flex text-[#9096A2] "
      }
      to={item.url}
    >
      {item.name}
    </NavLink>
  );
};

export default NavLinkItem;
