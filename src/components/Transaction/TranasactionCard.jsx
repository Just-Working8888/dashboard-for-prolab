import React from "react";

const TranasactionCard = () => {
  return (
    <section className="p-[24px] gap-3   rounded-[16px] border-[#E4E4E7] border-[1px] border-solid flex ">
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="12" width="28" height="18" rx="3" fill="#CCE1FF" />
          <rect x="2" y="4" width="28" height="6" rx="2" fill="#93BAFB" />
          <rect x="7" y="1" width="3" height="6" rx="1.5" fill="white" />
          <rect x="22" y="1" width="3" height="6" rx="1.5" fill="white" />
          <rect x="6" y="20" width="6" height="6" rx="1" fill="#3981F7" />
        </svg>
      </div>{" "}
      <div>
        <div className="flex items-center">
          <span className="text-[#70707A] text-[16px] font-medium">
            Total Outstanding
          </span>
        </div>
        <div>
          <h1 className="text-[#0A112F] text-[32px] font-medium">
            ${`${"April 1st"}`}.
            <span className="text-[#9096A2] text-[16px]">2022</span>{" "}
          </h1>
        </div>
        <div className="my-4">
            <button className=" font-medium  text-[14px] text-white bg-[#3981F7] px-[20px] py-[10px] rounded-full">Send Reminder</button>
        </div>
      </div>
    </section>
  );
};

export default TranasactionCard;
