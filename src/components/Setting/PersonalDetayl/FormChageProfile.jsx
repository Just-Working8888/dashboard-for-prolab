import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../redux/Prifile/ProfileSlice";

const FormChageProfile = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [citizenOf, setCitizenOf] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryOfTaxResidence, setCountryOfTaxResidence] = useState("");
  const [legalStatus, setLegalStatus] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");

  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name,
      dateOfBirth,
      citizenOf,
      phoneNumber,
      countryOfTaxResidence,
      legalStatus,
      address: {
        street,
        city,
        zipCode,
        country,
      },
    };

    dispatch(updateProfile(data));
  }

  return (
    <div className=" w-full">
      <form onSubmit={handleSubmit}>
        <div className="w-full mb-5">
          <label htmlFor="" className=" font-medium text-[16px] ">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-[16px] mt-3 w-full text-[16px] font-medium  outline-none border-[#E4E4E7] border-[1px] border-solid p-[16px]"
          />
        </div>
        <div className="w-full mb-5">
          <label htmlFor="" className=" font-medium text-[16px] ">
            Date of Birth
          </label>
          <input
            type="text"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="rounded-[16px] mt-3 w-full text-[16px] font-medium  outline-none border-[#E4E4E7] border-[1px] border-solid p-[16px]"
          />
        </div>
        <div className="w-full mb-5">
          <label htmlFor="" className=" font-medium text-[16px] ">
            Citizen of
          </label>
          <input
            className="rounded-[16px] mt-3 w-full text-[16px] font-medium  outline-none border-[#E4E4E7] border-[1px] border-solid p-[16px]"
            type="text"
            value={citizenOf}
            onChange={(e) => setCitizenOf(e.target.value)}
          />
        </div>
        <div className="w-full mb-5">
          <label htmlFor="" className=" font-medium text-[16px] ">
            Phone Number
          </label>
          <input
            className="rounded-[16px] mt-3 w-full text-[16px] font-medium  outline-none border-[#E4E4E7] border-[1px] border-solid p-[16px]"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <div>
            <div className="w-full mb-5">
              <label htmlFor="" className=" font-medium text-[16px] ">
                Country of Tax Residence
              </label>
              <input
                className="rounded-[16px] mt-3 w-full text-[16px] font-medium  outline-none border-[#E4E4E7] border-[1px] border-solid p-[16px]"
                type="text"
                value={countryOfTaxResidence}
                onChange={(e) => setCountryOfTaxResidence(e.target.value)}
              />
            </div>
            <div className="w-full mb-5">
              <label htmlFor="" className=" font-medium text-[16px] ">
                Street
              </label>
              <input
                className="rounded-[16px] mt-3 w-full text-[16px] font-medium  outline-none border-[#E4E4E7] border-[1px] border-solid p-[16px]"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="w-full mb-5">
              <label htmlFor="" className=" font-medium text-[16px] ">
                ZIP Code
              </label>
              <input
                className="rounded-[16px] mt-3 w-full text-[16px] font-medium  outline-none border-[#E4E4E7] border-[1px] border-solid p-[16px]"
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="w-full mb-5">
              <label htmlFor="" className=" font-medium text-[16px] ">
                Legal Status
              </label>
              <input
                className="rounded-[16px] mt-3 w-full text-[16px] font-medium  outline-none border-[#E4E4E7] border-[1px] border-solid p-[16px]"
                type="text"
                value={legalStatus}
                onChange={(e) => setLegalStatus(e.target.value)}
              />
            </div>
            <div className="w-full mb-5">
              <label htmlFor="" className=" font-medium text-[16px] ">
                City
              </label>
              <input
                className="rounded-[16px] mt-3 w-full text-[16px] font-medium  outline-none border-[#E4E4E7] border-[1px] border-solid p-[16px]"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="w-full mb-5">
              <label htmlFor="" className=" font-medium text-[16px] ">
                Country
              </label>
              <input
                className="rounded-[16px] mt-3 w-full text-[16px] font-medium  outline-none border-[#E4E4E7] border-[1px] border-solid p-[16px]"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
        </div> <button
        type="submit"
        className="bg-[#3981F7] rounded-full p-[10px] px-[20px] text-white"
      >
        Save Changes
      </button>
      </form>
     
    </div>
  );
};

export default FormChageProfile;
