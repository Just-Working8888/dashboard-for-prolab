import React from "react";

const ContactClientCard = () => {
  return (
    <div className="p-[24px] w-[344px] rounded-[16px] text-center border-[#E4E4E7] border-[1px] border-solid">
      <div className=" my-5 mb-7">
        <svg
        className="mx-auto"
          width="164"
          height="164"
          viewBox="0 0 164 164"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="82" cy="82" r="82" fill="#3981F7" fill-opacity="0.05" />
          <g clip-path="url(#clip0_838_7477)">
            <path
              d="M90.127 45.4324V61.6847C90.127 62.7623 90.555 63.7957 91.317 64.5577C92.079 65.3197 93.1124 65.7478 94.19 65.7478H110.442"
              stroke="#3981F7"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M102.315 118.568H61.6847C59.5295 118.568 57.4626 117.711 55.9387 116.187C54.4147 114.664 53.5586 112.597 53.5586 110.441V53.5586C53.5586 51.4034 54.4147 49.3365 55.9387 47.8125C57.4626 46.2886 59.5295 45.4324 61.6847 45.4324H90.1262L110.441 65.7477V110.441C110.441 112.597 109.585 114.664 108.061 116.187C106.537 117.711 104.471 118.568 102.315 118.568Z"
              stroke="#3981F7"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M69.8125 69.8108H73.8756"
              stroke="#3981F7"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M69.8125 86.0631H94.1909"
              stroke="#3981F7"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M69.8125 102.315H94.1909"
              stroke="#3981F7"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g clip-path="url(#clip1_838_7477)">
              <path
                d="M108.004 125.631C117.739 125.631 125.631 117.739 125.631 108.004C125.631 98.2684 117.739 90.3765 108.004 90.3765C98.2688 90.3765 90.377 98.2684 90.377 108.004C90.377 117.739 98.2688 125.631 108.004 125.631Z"
                fill="#3981F7"
                stroke="#F2F7FF"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M108.004 101.503H108.019"
                stroke="#E6F0FF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M106.379 108.004H108.004V114.504H109.629"
                stroke="#E6F0FF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_838_7477">
              <rect
                width="97.5135"
                height="97.5135"
                fill="white"
                transform="translate(33.2441 33.2432)"
              />
            </clipPath>
            <clipPath id="clip1_838_7477">
              <rect
                width="39.0054"
                height="39.0054"
                fill="white"
                transform="translate(88.502 88.5009)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div>
        <h1 className=" my-3 font-medium text-[20px] ">
          Data Processing Agreement (DPA)
        </h1>
        <h2 className="my-3 font-normal text-[16px] text-[#70707A]">
          You do not have a DPA. Contact the client to create one
        </h2>
      </div>
      <div>
        <button className=" mx-auto bg-[#3981F7] rounded-full my-5 text-white font-medium text-[14px] flex gap-3 py-[12px] px-[24px]">
          Contact CLient
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12.5" cy="12" r="12" fill="white" />
            <g clip-path="url(#clip0_335_2924)">
              <path
                d="M6.90039 12H18.1004"
                stroke="#3981F7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.9004 15.2L18.1004 12"
                stroke="#3981F7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.9004 8.80005L18.1004 12"
                stroke="#3981F7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_335_2924">
                <rect
                  width="19.2"
                  height="19.2"
                  fill="white"
                  transform="translate(2.90039 2.40002)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ContactClientCard;
