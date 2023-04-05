import React from "react";
import Header from "../components/Semantic-Elements/Header/Header";
import Aside from "../components/Semantic-Elements/Aside/Aside";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const currentPageName = location.pathname.substring(1).toUpperCase();
  return (
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Header currentPageName={currentPageName} />
        <div className="p-[32px]"> <Outlet/></div>
      </div>
    </div>
  );
};

export default MainLayout;
