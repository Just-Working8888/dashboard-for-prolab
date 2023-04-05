import React from "react";

const DockItem = () => {
  return (
    <div className=" px-[24px] py-[16px]  my-3 w-full rounded-[16px] border-[#E4E4E7] border-[1px] border-solid flex items-center justify-between">
      <div className="flex gap-3">
        <div className=" w-[48px] h-[48px] overflow-hidden rounded-full">
          <img
            className=" w-full h-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vector-based_example.svg/2000px-Vector-based_example.svg.png"
            alt=""
          />
        </div>
        <div>
          <h1 className=" font-medium text-[16px] ">Passport or National ID</h1>
          <p className=" font-normal text-[14px] text-[#FAA745]">
            Not submitted
          </p>
        </div>
      </div>
      <div>
        <button className=" flex gap-[12px]  border-solid border-[1px] border-[#E4E4E7] py-[10px] px-[20px] rounded-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM11.53 13.53C11.38 13.68 11.19 13.75 11 13.75C10.81 13.75 10.62 13.68 10.47 13.53L9.75 12.81V17C9.75 17.41 9.41 17.75 9 17.75C8.59 17.75 8.25 17.41 8.25 17V12.81L7.53 13.53C7.24 13.82 6.76 13.82 6.47 13.53C6.18 13.24 6.18 12.76 6.47 12.47L8.47 10.47C8.54 10.41 8.61 10.36 8.69 10.32C8.71 10.31 8.74 10.3 8.76 10.29C8.82 10.27 8.88 10.26 8.95 10.25C8.98 10.25 9 10.25 9.03 10.25C9.11 10.25 9.19 10.27 9.27 10.3C9.28 10.3 9.28 10.3 9.29 10.3C9.37 10.33 9.45 10.39 9.51 10.45C9.52 10.46 9.53 10.46 9.53 10.47L11.53 12.47C11.82 12.76 11.82 13.24 11.53 13.53Z"
              fill="#3981F7"
            />
            <path
              d="M17.435 8.31002L17.435 8.30999H17.4297C16.1826 8.30999 15.1797 7.31077 15.1797 6.13999V2.64999C15.1797 2.61542 15.1892 2.59388 15.2009 2.57784C15.2145 2.55924 15.2373 2.54025 15.269 2.52778C15.3323 2.50287 15.3962 2.51366 15.4461 2.56355C16.4446 3.562 17.9435 5.07456 19.2557 6.39875C19.8877 7.03644 20.4763 7.63045 20.9449 8.10232L20.9461 8.10355C20.972 8.12937 20.9791 8.15047 20.9815 8.16561C20.9845 8.18366 20.9825 8.20721 20.9712 8.23266C20.9492 8.28243 20.9027 8.31999 20.8297 8.31999C19.6987 8.31999 18.3817 8.31999 17.435 8.31002Z"
              fill="#3981F7"
              stroke="#FAFAFA"
            />
          </svg>
          <p className=" font-medium text-[14px] text-[#3981F7]"> Upload</p>
        </button>
      </div>
    </div>
  );
};

export default DockItem;
