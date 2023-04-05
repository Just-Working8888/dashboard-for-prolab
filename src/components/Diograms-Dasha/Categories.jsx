import React from "react";
import { useState } from "react";

const Categories = ({ item }) => {
  const [active, setACtive] = useState(false);
  return (
    <li
      onClick={() => {
        setACtive(!active);
      }}
      className={
        active === true
          ? "bg-[#E4E4E7] p-[4px] text-[14px] font-normal text-[#70707A] border-[1px] border-solid border-[#70707A] rounded-xl  list-none"
          : "p-[4px] text-[14px] font-normal text-[#70707A  list-none"
      }
      key={item.id}
    >
      {item.name}
    </li>
  );
};

export default Categories;
