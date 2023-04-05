import React from "react";

const PreUserItem = () => {
  return (
    <div className="w-full mt-4 flex justify-between items-center">
      <div className="flex gap-3">
        <div className=" w-[48px] h-[48px] overflow-hidden rounded-full">
          <img
            className=" w-full h-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vector-based_example.svg/2000px-Vector-based_example.svg.png"
            alt=""
          />
        </div>
        <div>
          <h1 className=" font-medium text-[16px] ">Cody Fisher</h1>
          <p className=" font-normal text-[14px] text-[#70707A]">lelfe dede</p>
        </div>
      </div>
      <div>
        <h1 className=" font-medium text-[18px] flex ">
          $3,334.
          <p className=" font-medium text-[14px] text-[#9096A2]">12</p>
        </h1>
        <h1 className="  font-normal text-[14px] text-[#9096A2] ">
          1 Jun 2022
        </h1>
      </div>
    </div>
  );
};

export default PreUserItem;
