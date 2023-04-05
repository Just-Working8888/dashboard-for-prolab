import React from "react";
import ContractCount from "../components/Contract/ContractCount";
import ActiveContract from "../components/Contract/ActiveContract/ActiveContract";
import ClientContractList from "../components/Contract/ClientContract/ClientContractList";

const Contracts = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className=" w-full "><ContractCount/>  <ActiveContract/> </div>
      <div className=" w-full"><ClientContractList/></div>
      <div></div>
    </div>
  );
};

export default Contracts;
