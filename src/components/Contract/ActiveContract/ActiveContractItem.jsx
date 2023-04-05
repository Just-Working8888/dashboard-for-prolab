import React from "react";

const ActiveContractItem = () => {
  return (
    <div className="my-[8px]  justify-between bg-[#FAFAFA] p-[24px] rounded-[8px] w-full">
      <div className="flex w-full  justify-between  ">
        <div className=" flex gap-3">
          <div className=" w-[48px] h-[48px] overflow-hidden">
            <img
              className=" w-full h-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vector-based_example.svg/2000px-Vector-based_example.svg.png"
              alt=""
            />
          </div>
          <div>
            <h1 className=" font-medium text-[16px]">nameCol</h1>
            <p className=" text-[14px] text-[#70707A]">country</p>
          </div>
        </div>
        <div>
          <div>
            <h1 className=" font-medium text-[16px] flex">
              $5550<p className=" text-[14px] text-[#70707A]">.50</p>
            </h1>
            <p className=" text-[14px] text-[#70707A]">fixed Raid</p>
          </div>
        </div>
      </div>
      <div className=" w-full  h-[1px] bg-[#E4E4E7] my-6 "></div>
      <div className="flex justify-between ">
        <div>
          {" "}
          <p className=" text-[14px] text-[#70707A]">Contract Period</p>
          <h1 className=" font-medium text-[16px]">
            March 1st, 2022 - April 1st, 2022{" "}
          </h1>
        </div>
        <div className=" text-end">
          <p className=" text-[14px] text-[#70707A]">dddddddddd</p>
          <h1 className=" font-medium text-[16px]">
            March 1st, 2022 - April 1st, 2022{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ActiveContractItem;
