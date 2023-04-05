import React from "react";
import TAbleTransist from "./TAbleTransist";
import TRTable from "../Invoices/TRTable";

const MiniTable = ({ name, item, a, b, c, d, e }) => {
  return (
    <section className=" mt-6 p-[24px] w-full rounded-[16px]  border-[#E4E4E7] border-[1px] border-solid">
      <div className=" mb-5 flex justify-between items-center">
        <h1 className=" font-medium text-[20px]">{name}</h1>
        <div className=" flex gap-3">
          <button className=" flex gap-3 rounded-full border-[#E4E4E7] border-[1px] border-solid py-[10px] px-[20px]  font-medium text-[14px] ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_367_3300)">
                <path
                  d="M14 8C15.1046 8 16 7.10457 16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6C12 7.10457 12.8954 8 14 8Z"
                  fill="#0A112F"
                  stroke="#0A112F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 6H12"
                  stroke="#0A112F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 6H20"
                  stroke="#0A112F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z"
                  fill="#0A112F"
                  stroke="#0A112F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 12H6"
                  stroke="#0A112F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 12H20"
                  stroke="#0A112F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
                  fill="#0A112F"
                  stroke="#0A112F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 18H15"
                  stroke="#0A112F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 18H20"
                  stroke="#0A112F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_367_3300">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Sort & Filter
          </button>
          
        </div>
      </div>
      <table class=" w-full">
        <thead class="bg-gray-200 rounded-t-lg overflow-hidden">
          <tr className="">
            <th class="py-2 px-4 text-left vertical-align-middl  text-[16px] font-medium ">
              {a}
            </th>
            <th class="py-2 px-4 text-left vertical-align-middl  text-[16px] font-medium ">
              {b}
            </th>
            <th class="py-2 px-4 text-left vertical-align-middl  text-[16px] font-medium ">
              {c}
            </th>
         
            <th></th>
          
            <th></th>
          </tr>
        </thead>
        <tbody>{item}</tbody>
      </table>
    </section>
  );
};

export default MiniTable;
