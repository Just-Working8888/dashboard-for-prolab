import React from "react";
import TotalReceivedCard from "../components/Invoices/TotalReceivedCard";
import Overdue from "../components/Invoices/Overdue";
import QuickPay from "../components/Invoices/QuickPay";
import Table from "./Table";
import GlobalTable from "../components/Table/GlobalTable";
import TRTable from "../components/Invoices/TRTable";

const Invoices = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-[49%]">
          <div className="">
            <TotalReceivedCard />
          </div>
          <div>
            <Overdue />
          </div>
        </div>
        <div className="w-[49%]">
          <QuickPay />
        </div>
      </div>
      <GlobalTable name={'Invoices '} item={<TRTable />} a={'No'} b={'Date Created'} c={'Client'} d={'Amount'} e={'status'}/>
    </>
  );
};

export default Invoices;
