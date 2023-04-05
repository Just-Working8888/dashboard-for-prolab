import React from "react";
import TAbleTransist from "./TAbleTransist";
import TRTable from "../Invoices/TRTable";

const GlobalTable = ({ name, item, a, b, c, d, e }) => {
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
          <button className=" flex gap-3 rounded-full border-[#E4E4E7] border-[1px] border-solid py-[10px] px-[20px]  font-medium text-[14px] ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_367_3273)">
                <path
                  d="M18.9995 18C19.9278 18 20.818 17.6313 21.4744 16.9749C22.1308 16.3185 22.4995 15.4283 22.4995 14.5C22.4995 13.5718 22.1308 12.6815 21.4744 12.0251C20.818 11.3688 19.9278 11 18.9995 11H17.9995C18.1454 10.35 18.1476 9.68043 18.006 9.02961C17.8644 8.37879 17.5818 7.75945 17.1743 7.20694C16.7667 6.65443 16.2422 6.17958 15.6308 5.80949C15.0193 5.43941 14.3329 5.18133 13.6106 5.05001C12.8883 4.91869 12.1444 4.91669 11.4213 5.04412C10.6981 5.17156 10.01 5.42594 9.39609 5.79273C8.15626 6.5335 7.29419 7.68719 6.9995 9.00001C5.93345 8.95731 4.88504 9.27041 4.03377 9.88571C3.1825 10.501 2.58132 11.3802 2.33317 12.3728C2.08502 13.3654 2.20533 14.4097 2.6735 15.3268C3.14167 16.2439 3.92858 16.9768 4.8995 17.4"
                  stroke="#0A112F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13V22"
                  stroke="#0A112F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 19L12 22L15 19"
                  stroke="#0A112F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_367_3273">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            CSV
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
            <th class="py-2 px-4 text-left vertical-align-middl  text-[16px] font-medium ">
              {d}
            </th>
            <th></th>
            <th class="py-2 px-4 text-left vertical-align-middl  text-[16px] font-medium">
              {e}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>{item}</tbody>
      </table>
    </section>
  );
};

export default GlobalTable;
