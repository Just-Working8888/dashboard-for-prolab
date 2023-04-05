import React from "react";
import TranasactionCard from "../components/Transaction/TranasactionCard";
import PayMonnth from "../components/Transaction/PayMonnth";
import TAbleTransist from "../components/Table/TAbleTransist";
import GlobalTable from "../components/Table/GlobalTable";
import TRTable from "../components/Invoices/TRTable";
import TransitBlock from "../components/Invoices/TransitBlock";



const Transactions = () => {
  return (
    <>
      <div className=" flex w-full gap-6 justify-between">
        <div className=" w-1/3">
          <TranasactionCard />
        </div>

        <div className=" w-full">
          <PayMonnth />
        </div>
      </div>
      <GlobalTable name={"Transaction History"} item={<TransitBlock />} a={'Client'} b={'Payment'} c={'Payment Method'} d={'Paid Date'} e={'Invoice'} />
    </>
  );
};

export default Transactions;
