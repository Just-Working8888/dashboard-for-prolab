import React from "react";
import NavLinkItem from "./SetItem";
import { NavLink } from "react-router-dom";

const SettingNav = () => {
  const data = [
    { id: 1, name: "Personal", url: "/Pesonal" },
    { id: 2, name: "Withdrawal Methods", url: "/withdrawal" },
    { id: 3, name: "Verification", url: "/verification" },
  ];
  return (
    <nav>
      <ul className="  gap-6  flex">
        {data.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex border-stone-300 rounded-lg border-[1px] px-[15p] text-blue-400  transition   bg-slate-100"
                : "transition flex text-[#9096A2] "
            }
            key={item.id}
            to={item.url}
          >
            {item.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default SettingNav;
