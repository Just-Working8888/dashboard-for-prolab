import React from "react";
import PreUserItem from "./PreUserItem";

const PreUserList = () => {
  return (
    <section className="my-5 relative p-[24px] overflow-hidden  w-full rounded-[16px] border-[#E4E4E7] border-[1px] border-solid   justify-between">
      <div className=" w-full  flex  justify-between items-center">
        <h1 className=" font-medium text-[20px]">Transaction History</h1>{" "}
        <span className=" font-semibold text-[14px] text-[#3981F7]">
          See all
        </span>
      </div>
      <div className=" p-[2px]">
        <PreUserItem />
        <PreUserItem />
        <PreUserItem />
        <PreUserItem />
        <PreUserItem />
        <PreUserItem />
      </div>
    </section>
  );
};

export default PreUserList;
