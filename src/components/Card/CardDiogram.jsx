import React from "react";
import Categories from "../Diograms-Dasha/Categories";
import ChartWithCrosshair from "../Diograms-Dasha/Chart with Crosshair";

const CardDiogram = () => {
  const data = [
    { date: "2022-01-01", value: 100 },
    { date: "2022-02-01", value: 200 },
    { date: "2022-03-01", value: 150 },
    { date: "2022-04-01", value: 300 },
    { date: "2022-05-01", value: 250 },
  ];
  return (
    <section className="my-5 relative  overflow-hidden  w-full rounded-[16px] border-[#E4E4E7] border-[1px] border-solid   justify-between">
      <div className="flex p-[24px] w-full justify-between">
        <div>
          <h1 className=" font-medium text-[20px]">Monthly Report</h1>
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

export default CardDiogram;
