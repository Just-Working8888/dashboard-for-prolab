import React from "react";
import CardINcDec from "../components/Card/CardINcDec";
import ContactClientCard from "../components/Document/Documents/ContactClientCard/ContactClientCard";
import PaymantDiogram from "../components/Diograms-Dasha/PaymantDiogram";
import CardDiogram from "../components/Card/CardDiogram";
import MiniTable from "../components/Table/MiniTable";
import MiniTableItem from "../components/Table/MiniTableItem";
import PayCard from "../components/Card/PayCard";

const Card = () => {
  return (
    <div className=" w-full  flex ">
      <div>
        <CardINcDec />
        <CardDiogram />
        <MiniTable
          name={"Recent Transactions"}
          item={<MiniTableItem />}
          a={"Name"}
          b={"Date"}
          c={"Amount"}
        />
      </div>
      <div className=" w-full">
        <PayCard />
      </div>
    </div>
  );
};

export default Card;
