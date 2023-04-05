import React from "react";
import TRTable from "../Invoices/TRTable";

const TAbleTransist = () => {
  return (
    <table class=" w-full">
      <thead class="bg-gray-200 rounded-t-lg overflow-hidden">
        <tr className="">
          <th class="py-2 px-4 text-left vertical-align-middl  text-[16px] font-medium ">
            No
          </th>
          <th class="py-2 px-4 text-left vertical-align-middl  text-[16px] font-medium ">
            Date Created
          </th>
          <th class="py-2 px-4 text-left vertical-align-middl  text-[16px] font-medium ">
            Client
          </th>
          <th class="py-2 px-4 text-left vertical-align-middl  text-[16px] font-medium ">
            Amount
          </th>
          <th></th>
          <th class="py-2 px-4 text-left vertical-align-middl  text-[16px] font-medium">
            Status
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <TRTable />
        <TRTable />
        <TRTable />
        <TRTable />
        <TRTable />
        <TRTable />
        <TRTable />
        <TRTable />
        <TRTable />
        <TRTable />
        <TRTable />
      </tbody>
    </table>
  );
};

export default TAbleTransist;
