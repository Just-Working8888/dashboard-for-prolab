import React from "react";

const ContractCount = () => {
  return (
    <section className="p-[24px] h-[130px] w-full rounded-[16px] border-[#E4E4E7] border-[1px] border-solid flex  justify-between">
    <div className="flex gap-5">
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1.5" y="1.5" width="21" height="21" rx="6" fill="#CCE1FF" />
          <rect x="4.5" y="6" width="9" height="3" rx="1.5" fill="#3981F7" />
          <rect
            x="4.5"
            y="12"
            width="15"
            height="2.25"
            rx="1.125"
            fill="#93BAFB"
          />
          <rect
            x="4.5"
            y="17.25"
            width="4.5"
            height="2.25"
            rx="1.125"
            fill="#93BAFB"
          />
          <rect
            x="10.5"
            y="17.25"
            width="9"
            height="2.25"
            rx="1.125"
            fill="#93BAFB"
          />
        </svg>
      </div>
      <div>
        <h1 className=" font-medium text-[16px] text-[#70707A]">
          Contact Created this month
        </h1>
        <div className="flex my-2 items-center">
          {" "}
          <span className=" font-medium text-[32px] ">83</span>
          <span className="text-[#] mr-2 bg-[#3767b49d] rounded-full ">
            <p className=" m-1 mx-2"> +23%</p>
          </span>
        </div>
      </div></div>
      <div className="my-5">
        <svg
          width="89"
          height="45"
          viewBox="0 0 89 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.8701 15.7016L1 33.25V44.75H89V1.25H65.6328L52.209 24.4758L23.8701 15.7016Z"
            fill="url(#paint0_linear_831_5006)"
            fill-opacity="0.2"
          />
          <path
            d="M1 33.25L23.8701 15.7016L52.209 24.4758L65.6328 1.25H89"
            stroke="#30C559"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_831_5006"
              x1="45"
              y1="1.25"
              x2="45"
              y2="44.75"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#30C559" stop-opacity="0.7" />
              <stop offset="1" stop-color="#30C559" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ContractCount;
