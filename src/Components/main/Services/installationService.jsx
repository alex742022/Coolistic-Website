import React from "react";
import Installation from "../../../assets/Installation.jpg";
import Installation2 from "../../../assets/Installation2.jpg";

export default function InstallationService() {
  return (
    <>
      <div className="relative  max-w-[1444px] mx-auto">
        <img
          className="w-[100%] h-[400px] object-cover object-right lg:h-[450px] lg:object-top"
          src={Installation}
          alt="Installation Aircon"
        />
        <div className="absolute w-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
          <h1 className="text-white font-bold text-[35px] text-center w-[90%] mx-auto tracking-wide lg:text-[50px]">
            Professional Aircon Installation
          </h1>
        </div>
        <div className="absolute w-[100%] h-[100%] top-0 bg-black opacity-[30%]"></div>
      </div>
      <div className="w-[90%] lg:w-[80%] max-w-[1444px] mx-auto">
        <div className="flex flex-col gap-[40px] md:flex-row mt-[40px]">
          <div className="w-[90%] mx-auto md:w-[50%]">
            <h1 className="uppercase text-[25px] leading-[30px] btc1 font-bold lg:text-[40px] lg:leading-[45px]">
              Aircon installation services in metro manila
            </h1>
            <p className="btc2 mt-[20px] lg:text-[18px]">
              "Say goodbye to the hassle of finding reliable AC installers
              because whether it's a residential or commercial space, Coolistic
              AirconditioningShop's skilled technicians are equipped to handle
              all your AC installation needs with professionalism, care,
              precision, and expertise."
            </p>
          </div>

          <div className="md:w-[50%]">
            <img
              className="rounded-md"
              src={Installation2}
              alt="Installation Aircon"
            />
          </div>
        </div>
      </div>
    </>
  );
}
