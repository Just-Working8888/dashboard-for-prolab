import React from "react";

const CardINcDec = () => {
  return (
    <section className="p-[24px] gap-3   rounded-[16px] border-[#E4E4E7] border-[1px] border-solid flex ">
      <div className=" flex  gap-9 w-full">
        <div className="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10.5" fill="#93BAFB" />
            <circle cx="12" cy="12" r="7.5" fill="#CCE1FF" />
            <path d="M9 10.5L12 13.5L15 10.5" fill="#3981F7" />
            <path
              d="M9 10.5L12 13.5L15 10.5L9 10.5Z"
              stroke="#3981F7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>{" "}
        <div className=" w-full  ">
          <div className="flex items-center">
            <span className="text-[#70707A] text-[16px] font-medium">
              Income this month
            </span>
          </div>
          <div className=" flex w-full justify-between">
            <div className="  gap-2">
              <h1 className="text-[#0A112F] text-[32px] font-medium">
                {`${"$8,127.90"}`}
              </h1>
              <div className="flex  items-center">
                <span className="text-[#] mr-2 bg-[#3767b49d] rounded-full ">
                  <p className=" m-1 mx-2"> +23%</p>
                </span>
                vs last month
              </div>
            </div>

            <div>
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
          </div>
        </div>
      </div>
      <div className=" w-1 h-full bg-slate-200 mx-10"></div>
      <div className=" flex  gap-9 w-full">
        <div className="">
          <svg
            className="rotate-180 "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10.5" fill="#93BAFB" />
            <circle cx="12" cy="12" r="7.5" fill="#CCE1FF" />
            <path d="M9 10.5L12 13.5L15 10.5" fill="#3981F7" />
            <path
              d="M9 10.5L12 13.5L15 10.5L9 10.5Z"
              stroke="#3981F7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>{" "}
        <div className=" w-full  ">
          <div className="flex items-center">
            <span className="text-[#70707A] text-[16px] font-medium">
              Expense this month
            </span>
          </div>
          <div className=" flex w-full justify-between">
            <div className="  gap-2">
              <h1 className="text-[#0A112F] text-[32px] font-medium">
                {`${"$$1,325.56"}`}
              </h1>
              <div className="flex  items-center">
                <span className="text-[#] mr-2 bg-[#FEDADA] rounded-full ">
                  <p className=" m-1 mx-2"> +23%</p>
                </span>
                vs last month
              </div>
            </div>

            <div className="">
              <svg
                width="89"
                height="45"
                viewBox="0 0 89 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65.1299 15.6177L88 33.3678V45H0V1H23.3672L36.791 24.4928L65.1299 15.6177Z"
                  fill="url(#paint0_linear_847_6775)"
                  fill-opacity="0.2"
                />
                <path
                  d="M88 33.3678L65.1299 15.6177L36.791 24.4928L23.3672 1H2.47359e-06"
                  stroke="#FA4545"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_847_6775"
                    x1="44"
                    y1="1"
                    x2="44"
                    y2="45"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FA4545" stop-opacity="0.7" />
                    <stop offset="1" stop-color="#FA4545" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardINcDec;
