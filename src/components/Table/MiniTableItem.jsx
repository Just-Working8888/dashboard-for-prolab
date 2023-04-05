import React from "react";

const MiniTableItem = () => {
  return (
    <tr>
      <td class=" py-2 px-4 items-center vertical-align-middle flex">
        <div>
          <img
            className=" w-[48px] h-[48px] rounded-full"
            src="https://pbs.twimg.com/media/Fp6HcA0WwAAdF6J.jpg"
            alt=""
          />
        </div>
        <ul>
          <li className=" font-medium text-[16px] ">Chloe Wallows</li>
        </ul>
      </td>
      <td class=" py-2 px-4 vertical-align-middle">
        <ul>
          <li className=" font-normal text-[14px]  text-[#70707A]">
            Mar 1, 2022
          </li>
        </ul>
      </td>
      <td class=" py-2 px-4 vertical-align-middle">
        <ul>
          <li className=" font-normal text-[14px]  ">
          -$204.88
          </li>
        </ul>
      </td>

      <td>{">"}</td>
    </tr>
  );
};

export default MiniTableItem;
