import React from "react";

const Overdue = () => {
  return (
    <section className="p-[24px] rounded-[16px] flex justify-between  items-center  my-6 border-[#E4E4E7] border-[1px] border-solid">
      <div>
        {" "}
        <span className=" text-[20px] font-medium">Overdue</span>
      </div>
      <div className=" flex gap-3 items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.2" cx="8" cy="8" r="8" fill="#FC8F8F" />
          <circle cx="8" cy="8" r="3" fill="#FA4545" />
        </svg>
        <h1 className=" text-[32px] font-medium">
          $1,500 <span className=" text-[24px] opacity-[0.5]">.50</span>
        </h1>
      </div>
    </section>
  );
};

export default Overdue;
