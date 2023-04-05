import React from "react";

const QuickPay = () => {
  return (
    <section className="p-[24px] w-full rounded-[16px]  border-[#E4E4E7] border-[1px] border-solid">
      <div>
        <h1 className="font-medium text-[20px]">Quick Pay</h1>
      </div>
      <div className="flex my-8 justify-between">
        <span className=" text-[20px] font-normal flex   text-[#00000065] ">
          invopay.to{" "}
          <span className="font-medium text-black"> /clientname</span>{" "}
        </span>
        <div className="flex gap-6 ">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 22H3C2.59 22 2.25 21.66 2.25 21.25C2.25 20.84 2.59 20.5 3 20.5H21C21.41 20.5 21.75 20.84 21.75 21.25C21.75 21.66 21.41 22 21 22Z"
                fill="#0A112F"
              />
              <path
                d="M19.0206 3.48004C17.0806 1.54004 15.1806 1.49004 13.1906 3.48004L11.9806 4.69004C11.8806 4.79004 11.8406 4.95004 11.8806 5.09004C12.6406 7.74004 14.7606 9.86003 17.4106 10.62C17.4506 10.63 17.4906 10.64 17.5306 10.64C17.6406 10.64 17.7406 10.6 17.8206 10.52L19.0206 9.31004C20.0106 8.33004 20.4906 7.38004 20.4906 6.42004C20.5006 5.43004 20.0206 4.47004 19.0206 3.48004Z"
                fill="#0A112F"
              />
              <path
                d="M15.6103 11.53C15.3203 11.39 15.0403 11.25 14.7703 11.09C14.5503 10.96 14.3403 10.82 14.1303 10.67C13.9603 10.56 13.7603 10.4 13.5703 10.24C13.5503 10.23 13.4803 10.17 13.4003 10.09C13.0703 9.81005 12.7003 9.45005 12.3703 9.05005C12.3403 9.03005 12.2903 8.96005 12.2203 8.87005C12.1203 8.75005 11.9503 8.55005 11.8003 8.32005C11.6803 8.17005 11.5403 7.95005 11.4103 7.73005C11.2503 7.46005 11.1103 7.19005 10.9703 6.91005C10.9491 6.86465 10.9286 6.81949 10.9088 6.77458C10.7612 6.44127 10.3265 6.34382 10.0688 6.60158L4.34032 12.33C4.21032 12.46 4.09032 12.71 4.06032 12.88L3.52032 16.71C3.42032 17.39 3.61032 18.03 4.03032 18.46C4.39032 18.81 4.89032 19 5.43032 19C5.55032 19 5.67032 18.99 5.79032 18.97L9.63032 18.43C9.81032 18.4 10.0603 18.28 10.1803 18.15L15.9016 12.4287C16.1612 12.1692 16.0633 11.7237 15.7257 11.5797C15.6877 11.5634 15.6492 11.5469 15.6103 11.53Z"
                fill="#0A112F"
              />
            </svg>
          </span>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
                fill="#0A112F"
              />
              <path
                d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z"
                fill="#0A112F"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="w-full bg-[#F5F9FF] rounded-[16px] mt-9 p-[24px] ">
        <p className=" font-normal  text-[16px]">
          You can receive payments quickly with Quick Pay feature. You can share
          the payment link to request the payment to clients.
        </p>
        <a href="/" className=" font-normal  text-[16px] text-[#3981F7]">Learn More</a>
      </div>
    </section>
  );
};

export default QuickPay;