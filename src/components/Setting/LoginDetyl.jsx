import React from "react";

const LoginDetyl = () => {
  return (
    <div className="rounded-[16px] border-[#E4E4E7] border-[1px] border-solid p-[23px] my-5">
      <h1 className=" font-medium text-[20px]"> Login Details</h1>
      <div className=" mt-6 rounded-[16px] border-[#E4E4E7] bg-[#FAFAFA] border-[1px] border-solid px-[20px]">
        <ul className=" m-[16px]     flex gap-2 items-center font-medium text-[16px]">
          <li>Change email address</li> <li>{">"}</li>
        </ul>
      </div>
      <div className=" mt-2 rounded-[16px] border-[#E4E4E7] bg-[#FAFAFA] border-[1px] border-solid px-[20px]">
        <ul className=" m-[16px]     flex gap-2 items-center font-medium text-[16px]">
          <li>Set up as an individual</li> <li>{">"}</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginDetyl;
