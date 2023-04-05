import React from "react";
import { NavLink } from "react-router-dom";

const BarItems = ({ item }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "flex border-stone-300 rounded-lg border-[1px] px-[15p] text-blue-400  transition   bg-slate-100"
          : "transition flex text-[#9096A2] "
      }
      to={item.url}
    >
      <li className="flex m-[15px] ">
        {item.icon}
        <p className="ml-[15px] font-medium text-[16px] ">{item.name}</p>
      </li>
    </NavLink>
  );
};

export default BarItems;
