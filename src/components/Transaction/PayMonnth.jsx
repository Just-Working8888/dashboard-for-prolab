import React from "react";
import RadiusImage from "./RadianImge";

const PayMonnth = () => {
  return (
    <>
      <section className="p-[24px] gap-3   h-full   rounded-[16px] border-[#E4E4E7] border-[1px] border-solid flex ">
        <div className=" flex  gap-9 w-full">
          <div className="">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="12" width="28" height="18" rx="3" fill="#CCE1FF" />
              <g clip-path="url(#clip0_845_9757)">
                <path
                  d="M16.4173 24.3333V17.6666L14.334 19.75"
                  stroke="#3981F7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <rect x="2" y="4" width="28" height="6" rx="2" fill="#93BAFB" />
              <rect x="7" y="1" width="3" height="6" rx="1.5" fill="white" />
              <rect x="22" y="1" width="3" height="6" rx="1.5" fill="white" />
              <defs>
                <clipPath id="clip0_845_9757">
                  <rect
                    width="10"
                    height="10"
                    fill="white"
                    transform="translate(11 16)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>{" "}
          <div className=" w-full  ">
            <div className="flex items-center">
              <span className="text-[#70707A] text-[16px] font-medium">
                Payment this month
              </span>
            </div>
            <div className=" flex w-full justify-between">
              <div className=" flex gap-2">
                <h1 className="text-[#0A112F] text-[32px] font-medium">
                  {`${"19"}`}
                </h1>
                <div className="flex  items-center">
                  <span className="text-[#] mr-2 bg-[#3767b49d] rounded-full ">
                    <p className=" m-1 mx-2"> +23%</p>
                  </span>
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
            <div className=" flex">
              <div className="w-1/2 relative   my-5">
                <RadiusImage />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1 h-full bg-slate-200 mx-10"></div>
        <div className=" w-full flex gap-5">
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="14" fill="#93BAFB" />
              <circle cx="16" cy="16" r="10" fill="#CCE1FF" />
              <g clip-path="url(#clip0_937_23283)">
                <path
                  d="M19.1675 17.7194C19.1675 15.9303 17.9066 15.4173 16.5425 15.1285L15.8195 14.9821C14.7504 14.7719 14.6679 14.4618 14.6679 14.0467C14.6679 13.508 15.1534 13.186 15.9665 13.186C16.9295 13.186 17.1763 13.6698 17.2787 14.0332L17.2884 14.0634C17.4095 14.3802 17.691 14.5692 18.0422 14.5692C18.1331 14.5692 18.2149 14.5553 18.276 14.543C18.6529 14.468 18.9154 14.168 18.9154 13.8127C18.9154 13.7245 18.8994 13.6372 18.8674 13.5522C18.6742 12.9312 18.1316 11.9538 16.628 11.7307V10.6657C16.628 9.7786 15.2387 9.7786 15.2387 10.6657V11.737C13.6235 11.9898 13.0288 13.0885 13.0288 14.0463C13.0288 15.7889 14.2423 16.2747 15.4277 16.5192L16.2097 16.6853C17.3235 16.9118 17.5198 17.2023 17.5198 17.7284C17.5198 18.3713 16.9762 18.7546 16.065 18.7546C14.882 18.7546 14.6409 18.2219 14.4797 17.624C14.3854 17.293 14.0863 17.0798 13.7175 17.0798C13.637 17.0798 13.5725 17.0905 13.4947 17.1038L13.4713 17.1083C13.0899 17.1989 12.834 17.4993 12.834 17.8554C12.834 17.923 12.846 17.9806 12.8557 18.0271L12.8677 18.0803C13.0393 18.6603 13.418 19.9268 15.3071 20.2094V21.3241C15.3071 21.7679 15.6562 22.0002 16.0016 22.0002C16.347 22.0002 16.6965 21.7679 16.6965 21.3241V20.2289C18.1965 20.0335 19.1691 19.0752 19.1691 17.7196"
                  fill="#3981F7"
                />
              </g>
              <defs>
                <clipPath id="clip0_937_23283">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(10 10)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>{" "}
          <div className="w-full">
            <div className="flex items-center">
              <span className="text-[#70707A] text-[16px] font-medium">
                Total Payroll Balance
              </span>
            </div>
            <div>
              <h1 className="text-[#0A112F] text-[32px] font-medium">
                ${`${"2,325"}`}.
                <span className="text-[#9096A2] text-[16px]">50</span>{" "}
              </h1>
            </div>
            <div className="my-4 w-full justify-between rounded-[16px] border-[#E4E4E7] border-[1px] border-solid flex p-[8px]">
              <div>Anural TRV</div>
              <div className=" flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#CCE1FF" />
                  <g clip-path="url(#clip0_845_9811)">
                    <path
                      d="M5.95703 15.3333L9.95703 11.3333L12.6237 14L17.957 8.66663"
                      stroke="#3981F7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.291 8.66663H17.9577V13.3333"
                      stroke="#3981F7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_845_9811">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(3.95703 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                $800.16
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayMonnth;
