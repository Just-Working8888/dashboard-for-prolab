import React from "react";

const InputElement = () => {
  return (
    <section className="  items-center gap-11 flex">
      <div className=" font-medium text-[16px] ">I live in</div>
      <div className=" border-[1px] border-zinc-400  items-center border-solid rounded-lg overflow-hidden p-[10px]">
        <input className="" type="text" placeholder="United States" />
        {">"}
      </div>
    </section>
  );
};

export default InputElement;
