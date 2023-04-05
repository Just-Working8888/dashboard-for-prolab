import React from "react";
import logo from "../../assets/fff.png";
import data from "../../data/Coverage.json";
const InsuredElement = () => {
  return (
    <div className=" p-[48px]  m-7">
      <div className=" w-full justify-between flex items-center">
        <div>
          <img src={logo} alt="" />
        </div>

        <div className=" flex gap-7 items-center">
          <div>
            <h1 className=" font-medium text-[32px]">
              $50 <span className=" text-[24px] text-slate-400">/month</span>
            </h1>
          </div>
          <button className=" font-medium  text-[14px] text-white bg-[#3981F7] px-[20px] py-[10px] rounded-full">
            Apply for Coverage
          </button>
        </div>
      </div>
      <div className=" w-full h-[1px] bg-slate-400 my-7 "></div>
      <section className="my-6">
        <p className=" font-normal  text-[16px]">
          Genki is an excellent health insurance for digital nomads, freelancers
          and remote workers. It provides cover from one month up to two years
          in a monthly subscription that can be cancelled anytime.
        </p>
      </section>
      <section className="my-6">
        <h1 className=" font-medium text-[20px] my-6">
          What is included in coverage?
        </h1>
        <div className=" flex flex-wrap w-full gap-4 my-6">
          {" "}
          {data.map((item) => (
            <button
              key={item.id}
              className="p-[10px] bg-[#FAFAFA] text-[14px]  font-normal rounded-full"
            >
              {item.name}
            </button>
          ))}
        </div>
        <h1 className=" text-[#9096A2]  text-[14px] font-normal my-6">
          *Price depends on your age, the region of cover you choose and the
          deductible you choose
        </h1>
        <div className=" absolute right-9 m-7 bottom-3"><svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24.0001" r="24" fill="#0A112F" />
          <g clip-path="url(#clip0_845_22876)">
            <path
              d="M23.9987 34.6668L19.9987 30.6668H17.332C16.2712 30.6668 15.2537 30.2454 14.5036 29.4952C13.7535 28.7451 13.332 27.7276 13.332 26.6668V18.6668C13.332 17.6059 13.7535 16.5885 14.5036 15.8384C15.2537 15.0882 16.2712 14.6668 17.332 14.6668H30.6654C31.7262 14.6668 32.7436 15.0882 33.4938 15.8384C34.2439 16.5885 34.6654 17.6059 34.6654 18.6668V26.6668C34.6654 27.7276 34.2439 28.7451 33.4938 29.4952C32.7436 30.2454 31.7262 30.6668 30.6654 30.6668H27.9987L23.9987 34.6668Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_845_22876">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(8 8.00012)"
              />
            </clipPath>
          </defs>
        </svg></div>
        
      </section>
    </div>
  );
};

export default InsuredElement;
