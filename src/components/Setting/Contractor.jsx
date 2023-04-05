import React from "react";

const Contractor = () => {
  return (
    <div className="rounded-[16px] border-[#E4E4E7] border-[1px] border-solid p-[23px] my-5">
      <h1 className=" font-medium text-[20px]"> Contractor type</h1>
      <div className=" mt-6 rounded-[16px] border-[#E4E4E7] bg-[#FAFAFA] border-[1px] border-solid py-[20px] px-[20px]">
        <ul className=" m-3     flex gap-2 items-center font-medium text-[16px]">
          <li>
            <input type="radio" name="" id="" />
          </li>
          <li>Set up as an individual</li>
        </ul>
        <ul className=" m-3     flex gap-2 items-center font-medium text-[16px]">
          <li>
            <input type="radio" name="" id="" />
          </li>
          <li>Set up as an entity</li>
        </ul>
      </div>
    </div>
  );
};

export default Contractor;
