import React from "react";
import Warning from "../components/Document/Warning";
import Required from "../components/Document/Documents/Required";
import ContactClientCard from "../components/Document/Documents/ContactClientCard/ContactClientCard";

const Document = () => {
  return (
    <>
      <Warning />
      <div className="flex gap-5">
        <div className=" w-full ">
          <Required /> <Required />
        </div>
        <div className="  my-6  w-[344px] ">
          <ContactClientCard />
        </div>
      </div>
    </>
  );
};

export default Document;
