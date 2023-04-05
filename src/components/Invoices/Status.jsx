import React from "react";

const Status = () => {
  return (
    <div className="p-[24px] rounded-[16px]   border-[#E4E4E7] border-[1px] border-solid">
      <div className=" flex items-center gap-5 ">
        <li className="bg-[#FEEDDA]  px-[12px] rounded-full p-1 font-semibold  text-[14px] text-[#FAA745]">
          PENDING
        </li>
        <span className=" font-medium  text-[14px] ">
          $1,346 <span className=" text-[12px] opacity-[0.5]">.12</span>
        </span>
      </div>
      <div className="my-5"></div>
      <div className=" flex items-center gap-5 ">
        <li className="bg-[#E1DAFE]  px-[12px] rounded-full p-1 font-semibold  text-[14px] text-[#6945FA]">
        IN DRAFT
        </li>
        <span className=" font-medium  text-[14px]  ">
          $1,46 <span className=" text-[12px] opacity-[0.5]">.12</span>
        </span>
      </div>
    </div>
  );
};

export default Status;
