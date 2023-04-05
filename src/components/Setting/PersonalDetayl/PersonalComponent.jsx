import React from "react";
import { Link } from "react-router-dom";
import FormChageProfile from "./FormChageProfile";

const PersonalComponent = () => {
  return (
    <div className="rounded-[16px] w-full justify-between  flex border-[#E4E4E7] border-[1px] border-solid p-[23px]">
      <div className="w-full">
        <h1 className=" font-medium text-[20px] mb-9">Personal Detayl</h1>
        <div className="flex">
          <div className="w-[96px] mr-[32px] h-[96px] overflow-hidden rounded-full">
            <img
              className="w-full h-full"
              src="https://pbs.twimg.com/media/Fp6HcA0WwAAdF6J.jpg"
              alt=""
            />
          </div>
          <div>
            <button className="mb-2 border-[#E4E4E7] border-[1px] border-solid p-[10px] px-[20px] rounded-full flex gap-3 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.79844 5.99998C4.16192 5.99998 3.55147 6.25283 3.10138 6.70292C2.65129 7.15301 2.39844 7.76346 2.39844 8.39998V18C2.39844 18.6365 2.65129 19.2469 3.10138 19.697C3.55147 20.1471 4.16192 20.4 4.79844 20.4H19.1984C19.835 20.4 20.4454 20.1471 20.8955 19.697C21.3456 19.2469 21.5984 18.6365 21.5984 18V8.39998C21.5984 7.76346 21.3456 7.15301 20.8955 6.70292C20.4454 6.25283 19.835 5.99998 19.1984 5.99998H17.2952C16.977 5.99991 16.6718 5.87343 16.4468 5.64838L15.1016 4.30318C14.6517 3.85306 14.0413 3.60011 13.4048 3.59998H10.592C9.95557 3.60011 9.34522 3.85306 8.89524 4.30318L7.55004 5.64838C7.32505 5.87343 7.01987 5.99991 6.70164 5.99998H4.79844ZM11.9984 16.8C12.4712 16.8 12.9393 16.7069 13.3761 16.5259C13.8129 16.345 14.2097 16.0799 14.544 15.7456C14.8783 15.4113 15.1435 15.0144 15.3244 14.5776C15.5053 14.1409 15.5984 13.6727 15.5984 13.2C15.5984 12.7272 15.5053 12.2591 15.3244 11.8223C15.1435 11.3855 14.8783 10.9887 14.544 10.6544C14.2097 10.3201 13.8129 10.0549 13.3761 9.87401C12.9393 9.69309 12.4712 9.59998 11.9984 9.59998C11.0437 9.59998 10.128 9.97926 9.45285 10.6544C8.77772 11.3295 8.39844 12.2452 8.39844 13.2C8.39844 14.1548 8.77772 15.0704 9.45285 15.7456C10.128 16.4207 11.0437 16.8 11.9984 16.8V16.8Z"
                  fill="#0A112F"
                />
              </svg>
              Upload New Photo
            </button>
            <button className="p-[10px] px-[20px] gap-3 flex text-[#FA4545]">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5697 5.23C19.9597 5.07 18.3497 4.95 16.7297 4.86V4.85L16.5097 3.55C16.3597 2.63 16.1397 1.25 13.7997 1.25H11.1797C8.84967 1.25 8.62967 2.57 8.46967 3.54L8.25967 4.82C7.32967 4.88 6.39967 4.94 5.46967 5.03L3.42967 5.23C3.00967 5.27 2.70967 5.64 2.74967 6.05C2.78967 6.46 3.14967 6.76 3.56967 6.72L5.60967 6.52C10.8497 6 16.1297 6.2 21.4297 6.73C21.4597 6.73 21.4797 6.73 21.5097 6.73C21.8897 6.73 22.2197 6.44 22.2597 6.05C22.2897 5.64 21.9897 5.27 21.5697 5.23Z"
                  fill="#FA4545"
                />
                <path
                  d="M19.7317 8.14C19.4917 7.89 19.1617 7.75 18.8217 7.75H6.1817C5.8417 7.75 5.5017 7.89 5.2717 8.14C5.0417 8.39 4.9117 8.73 4.9317 9.08L5.5517 19.34C5.6617 20.86 5.8017 22.76 9.2917 22.76H15.7117C19.2017 22.76 19.3417 20.87 19.4517 19.34L20.0717 9.09C20.0917 8.73 19.9617 8.39 19.7317 8.14ZM14.1617 17.75H10.8317C10.4217 17.75 10.0817 17.41 10.0817 17C10.0817 16.59 10.4217 16.25 10.8317 16.25H14.1617C14.5717 16.25 14.9117 16.59 14.9117 17C14.9117 17.41 14.5717 17.75 14.1617 17.75ZM15.0017 13.75H10.0017C9.5917 13.75 9.2517 13.41 9.2517 13C9.2517 12.59 9.5917 12.25 10.0017 12.25H15.0017C15.4117 12.25 15.7517 12.59 15.7517 13C15.7517 13.41 15.4117 13.75 15.0017 13.75Z"
                  fill="#FA4545"
                />
              </svg>
              Remove Photo
            </button>
          </div>
        </div>
        <div className=" bg-[#F5F9FF]  p-[24px] rounded-[16px] my-7">
          <p>Photos help your clients recognize you in Payrole</p>
          <Link className=" text-sky-500">lern more</Link>
        </div>
        <div className=" bg-[#0A112F]  p-[24px]  rounded-[16px] my-7 text-white">
          <p>How can I upgrade my account membership?</p>
          <button className=" mt-6 flex gap-2 p-[12px] text-[14px] font-medium  rounded-full bg-white text-black">
            See Pricing{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="#0A112F" />
              <path
                d="M6.39844 12H17.5984"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.3984 15.2L17.5984 12"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.3984 8.79999L17.5984 12"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-[1px] mx-8 bg-slate-200"></div>
      <FormChageProfile />
    </div>
  );
};

export default PersonalComponent;
