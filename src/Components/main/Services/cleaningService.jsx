import React from "react";
import Cleaning from "../../../assets/Cleaning.jpg";
import Cleaning2 from "../../../assets/Cleaning2.jpg";

export default function CleaningServices() {
  return (
    <>
      <div className="relative  max-w-[1444px] mx-auto">
        <img
          className="w-[100%] h-[400px] object-cover object-right lg:h-[450px] lg:object-top"
          src={Cleaning}
          alt="Cleaning Aircon"
        />
        <div className="absolute w-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
          <h1 className="text-white font-bold text-[35px] text-center w-[90%] mx-auto tracking-wide lg:text-[50px]">
            Professional Aircon Cleaning
          </h1>
        </div>
        <div className="absolute w-[100%] h-[100%] top-0 bg-black opacity-[30%]"></div>
      </div>
      <div className="w-[90%] lg:w-[80%] max-w-[1444px] mx-auto">
        <div className="flex flex-col gap-[40px] md:flex-row mt-[40px]">
          <div className="w-[90%] mx-auto md:w-[50%]">
            <h1 className="uppercase text-[25px] leading-[30px] btc1 font-bold lg:text-[40px] lg:leading-[45px]">
              Aircon cleaning services in metro manila
            </h1>
            <p className="btc2 mt-[20px] lg:text-[18px]">
              Coolistic Airconditioning Shop's team of experienced technicians
              have the expertise and knowledge to ensure that your air
              conditioning units are thoroughly cleaned and maintained. With
              years of experience in the industry, our technicians are equipped
              to handle any type of aircon cleaning service, from basic cleaning
              to more complex maintenance and repair work. Trust us to keep your
              air conditioning units in top shape, so you can enjoy cool and
              comfortable indoor air all year round.
            </p>
          </div>

          <div className="md:w-[50%]">
            <img className="rounded-md" src={Cleaning2} alt="Cleaning Aircon" />
          </div>
        </div>
      </div>
    </>
  );
}
