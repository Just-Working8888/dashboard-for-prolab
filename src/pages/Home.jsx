import React from "react";
import Outstanding from "../components/DashaComponents/Outstanding";
import PayMant from "../components/DashaComponents/PayMant";
import PaymantDiogram from "../components/Diograms-Dasha/PaymantDiogram";
import PreUserList from "../components/DashaComponents/PreUserList";
import Categories from "../components/Diograms-Dasha/Categories";

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className=" w-full ">
        <Outstanding />
        <PaymantDiogram/>
      </div>
      <div className=" w-full">
        <PayMant />
        <PreUserList/>
      </div>

    </div>
  );
};

export default Home;
