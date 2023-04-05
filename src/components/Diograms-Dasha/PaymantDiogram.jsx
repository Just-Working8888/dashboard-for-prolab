import React from "react";

import Categories from "./Categories";
import ChartWithCrosshair from "./Chart with Crosshair";

const PaymantDiogram = () => {
  const data = [
    { id: 1, name: "1M" },
    { id: 2, name: "3M" },
    { id: 3, name: "6M" },
    { id: 4, name: "1Y" },
  ];

  return (
    <section className="my-5 relative  overflow-hidden  w-full rounded-[16px] border-[#E4E4E7] border-[1px] border-solid   justify-between">
      <div className="flex p-[24px] w-full justify-between">
        <div>
          <div>
            {" "}
            <h1 className=" font-medium text-[20px] ">PayMant history</h1>
            <span className=" font-medium text-[40px] ">
              ${`${"12,135"}`}
              <span className=" text-[32px] text-slate-400 ">.{`${"98"}`}</span>
            </span>
          </div>

          <div className="flex my-2 items-center">
            <span className="text-[#] mr-2 bg-[#3767b49d] rounded-full ">
              <p className=" m-1 mx-2"> +23%</p>
            </span>
            <span className=" font-normal text-[14px] text-slate-400 ">
              vs last month
            </span>
          </div>
        </div>

        <div>
          <div className="flex gap-[10px] items-center">
            <ul className=" flex gap-3">
              <li className=" p-[4px] text-[14px] font-normal text-[#70707A]      list-none">
                1M
              </li>
              <li className=" p-[4px] text-[14px] font-normal text-[#70707A]      list-none">
                3M
              </li>
              <li className=" p-[4px] text-[14px] font-normal text-[#70707A]      list-none">
                6M
              </li>
              <li className=" p-[4px] text-[14px] font-normal text-[#70707A]      list-none">
                1Y
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="  relative -left-[3.5rem] -bottom-1 ">
        <div className=" w-[115%]  justify-center bottom-[-5px] left-[1rem]">
          <ChartWithCrosshair />
        </div>
      </div>
    </section>
  );
};

export default PaymantDiogram;
