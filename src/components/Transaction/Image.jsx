import React from "react";

function Image(props) {
  return (
   
      <img
        className="border-[#ffffff] border-solid border-[2px] h-[48px] w-[48px]    rounded-full "
        src={props.src}
        style={props.style}
      />
  
  );
}

export default Image;
