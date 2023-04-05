import React from "react";

const Outstanding = () => {
  return (
    <section className="px-[24px] h-[130px] w-full rounded-[16px] border-[#E4E4E7] border-[1px] border-solid flex items-center justify-between">
      <div>
        <div className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="12" width="4" height="10" rx="2" fill="#CCE1FF" />
            <rect
              x="10"
              y="7.5"
              width="4"
              height="14.5"
              rx="2"
              fill="#3981F7"
            />
            <rect x="18" y="2" width="4" height="20" rx="2" fill="#93BAFB" />
          </svg>
          <span className="text-[#70707A] text-[16px] font-medium">
            Total Outstanding
          </span>
        </div>
        <div>
          <h1 className="text-[#0A112F] text-[32px] font-medium">
            ${`${"58.266"}`}.{" "}
            <span className="text-[#9096A2] text-[16px]">25</span>{" "}
          </h1>
        </div>
      </div>
      <div className="h-[82px] w-[1px] mx-7 ml-20 bg-[#F4F4F5]"></div>

      <div>
        <div className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="9"
              width="21"
              height="13.5"
              rx="3"
              fill="#CCE1FF"
            />
            <rect x="1.5" y="3" width="21" height="4.5" rx="2" fill="#93BAFB" />
            <rect
              x="5.25"
              y="0.75"
              width="2.25"
              height="4.5"
              rx="1.125"
              fill="white"
            />
            <rect
              x="16.5"
              y="0.75"
              width="2.25"
              height="4.5"
              rx="1.125"
              fill="white"
            />
            <rect
              x="4.5"
              y="15"
              width="4.5"
              height="4.5"
              rx="1"
              fill="#3981F7"
            />
          </svg>

          <span className="text-[#70707A] text-[16px] font-medium">
            Upcoming Payment
          </span>
        </div>
        <div>
          <h1 className="text-[#0A112F] text-[32px] font-medium">
            ${`${"April 1st, 2022"}`}.{" "}
            <span className="text-[#9096A2] text-[16px]">2022</span>{" "}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Outstanding;
