import React from "react";
import CardSVG from "./CardSVG";

const PayCard = () => {
  return (
    <div className=" p-[34px]  shadow-xl ml-5 ">
      <div className="  flex w-full justify-between ">
        <h1 className=" text-[20px] font-medium">Your Cards</h1>
        <button className=" bg-[#3981F7] flex py-[10px] px-[20px] rounded-full	">
          <p className=" text-white text-[14px] font-medium mr-[12px]">
            {" "}
            Add Card
          </p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="white" />
            <g clip-path="url(#clip0_222_1740)">
              <path
                d="M12 6.40002V17.6"
                stroke="#3981F7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.40039 12H17.6004"
                stroke="#3981F7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_222_1740">
                <rect
                  width="19.2"
                  height="19.2"
                  fill="white"
                  transform="translate(2.40039 2.40002)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className=" m-9">
        <CardSVG />
      </div>
      <div>
        <ul className=" flex justify-between text-[20px] font-medium">
          <li>Card Info</li>
          <li>...</li>
        </ul>
      </div>
      <div className="my-4">
        <ul className="flex justify-between">
          <li className=" font-medium text-[#70707A] text-[16px]">
            Card Number
          </li>
          <li className="text-[20px] font-medium">**** 5680</li>
        </ul>
        <ul className="flex justify-between">
          <li className=" font-medium text-[#70707A] text-[16px]">Balance</li>
          <li className="text-[20px] font-medium">$5,2345.13</li>
        </ul>
        <ul className="flex justify-between">
          <li className=" font-medium text-[#70707A] text-[16px]">Currency</li>
          <li className="text-[20px] font-medium">USD</li>
        </ul>
        <ul className="flex justify-between">
          <li className=" font-medium text-[#70707A] text-[16px]">
            Status Card
          </li>
          <li className="text-[20px] font-medium">03 / 27 (Active)</li>
        </ul>
      </div>
      <div className="w-full bg-slate-200 h-[1px] my-4"></div>
      <div>
        <h1 className=" font-medium text-[20px]">Your Report</h1>
        <div>
          <ul className="flex justify-between my-5">
            <li className=" flex gap-3 items-center font-medium  text-[20px]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#CCE1FF" />
                <path
                  d="M19.9245 30.5925C25.8178 30.5925 30.5912 25.8192 30.5912 19.9258C30.5912 14.0325 25.8178 9.25919 19.9245 9.25919C14.0312 9.25919 9.25781 14.0325 9.25781 19.9258C9.25781 25.8192 14.0312 30.5925 19.9245 30.5925Z"
                  stroke="#93BAFB"
                  stroke-width="4"
                  stroke-miterlimit="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.9232 25.2592C22.8698 25.2592 25.2565 22.8725 25.2565 19.9259C25.2565 16.9792 22.8698 14.5925 19.9232 14.5925C16.9765 14.5925 14.5898 16.9792 14.5898 19.9259C14.5898 22.8725 16.9765 25.2592 19.9232 25.2592Z"
                  fill="#3981F7"
                />
                <path
                  d="M19.9232 21.2592C20.6565 21.2592 21.2565 20.6592 21.2565 19.9259C21.2565 19.1925 20.6565 18.5925 19.9232 18.5925C19.1898 18.5925 18.5898 19.1925 18.5898 19.9259C18.5898 20.6592 19.1898 21.2592 19.9232 21.2592Z"
                  fill="#93BAFB"
                />
                <path
                  d="M19.9258 9.2592V6.59253"
                  stroke="#93BAFB"
                  stroke-width="4"
                  stroke-miterlimit="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1>Goals</h1>
            </li>
            <li className="text-[20px] font-medium">{">"}</li>
          </ul>
          <ul className="flex justify-between my-5">
            <li className=" flex gap-3 items-center font-medium  text-[20px]">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.5" y="2.5" width="35" height="35" rx="6" fill="#CCE1FF"/>
<rect x="7.5" y="10" width="15" height="5" rx="2" fill="#3981F7"/>
<rect x="7.5" y="20" width="25" height="3.75" rx="1.875" fill="#93BAFB"/>
<rect x="7.5" y="28.75" width="7.5" height="3.75" rx="1.875" fill="#93BAFB"/>
<rect x="17.5" y="28.75" width="15" height="3.75" rx="1.875" fill="#93BAFB"/>
</svg>

              <h1>Monthly Expense</h1>
            </li>
            <li className="text-[20px] font-medium">{">"}</li>
          </ul>
          <ul className="flex justify-between my-5">
            <li className=" flex gap-3 items-center font-medium  text-[20px]">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.5" y="2.81052" width="35" height="34.7102" rx="6" fill="#CCE1FF"/>
<path d="M24.4485 0H15.5702C13.6056 0 12 1.41795 12 3.1735V4.76025C12 6.51581 13.5868 7.93376 15.5513 7.93376H24.4485C26.4131 7.93376 27.9998 6.51581 27.9998 4.76025V3.1735C28.0187 1.41795 26.4131 0 24.4485 0Z" fill="#93BAFB"/>
<path d="M14.9982 27.8212C14.9982 26.0469 13.5054 25.5381 11.8905 25.2518L11.0346 25.1066C9.76885 24.8981 9.67118 24.5905 9.67118 24.1789C9.67118 23.6446 10.2459 23.3253 11.2086 23.3253C12.3487 23.3253 12.6408 23.8051 12.762 24.1655L12.7736 24.1954C12.917 24.5097 13.2501 24.6971 13.6659 24.6971C13.7736 24.6971 13.8704 24.6833 13.9427 24.6711C14.3889 24.5967 14.6997 24.2992 14.6997 23.9468C14.6997 23.8594 14.6808 23.7727 14.6428 23.6885C14.4142 23.0726 13.7718 22.1033 11.9917 21.882V20.8258C11.9917 19.9461 10.3469 19.9461 10.3469 20.8258V21.8883C8.43475 22.139 7.73064 23.2287 7.73064 24.1785C7.73064 25.9067 9.16728 26.3885 10.5706 26.631L11.4965 26.7957C12.8151 27.0204 13.0475 27.3084 13.0475 27.8302C13.0475 28.4678 12.404 28.8479 11.3251 28.8479C9.92468 28.8479 9.63921 28.3196 9.44831 27.7266C9.33665 27.3984 8.9826 27.187 8.54596 27.187C8.45074 27.187 8.37437 27.1976 8.28225 27.2108L8.25451 27.2152C7.803 27.305 7.5 27.6029 7.5 27.956C7.5 28.0232 7.51421 28.0803 7.52575 28.1264L7.53996 28.1792C7.74307 28.7543 8.19146 30.0104 10.4279 30.2906V31.3961C10.4279 31.8363 10.8412 32.0667 11.2501 32.0667C11.659 32.0667 12.0728 31.8363 12.0728 31.3961V30.31C13.8486 30.1162 15 29.1658 15 27.8214" fill="#3981F7"/>
<rect x="18.5" y="27.1074" width="14" height="3.71895" rx="1.85947" fill="#93BAFB"/>
</svg>

              <h1>Invoice Income</h1>
            </li>
            <li className="text-[20px] font-medium">{">"}</li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default PayCard;
