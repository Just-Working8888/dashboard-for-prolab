import React from "react";
import SettingNav from "../../components/Setting/SettingNav";
import Contractor from "../../components/Setting/Contractor";
import LoginDetyl from "../../components/Setting/LoginDetyl";
import PersonalComponent from "../../components/Setting/PersonalDetayl/PersonalComponent";

const Setting = () => {
  return (
    <div>
      <SettingNav />
      <div className=" w-full gap-6 flex">
        <div className="w-full">
          <Contractor />
        </div>
        <div className="w-full">
          <LoginDetyl />
        </div>
      </div>
      <PersonalComponent/>
    </div>
  );
};

export default Setting;
