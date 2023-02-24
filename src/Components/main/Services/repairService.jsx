import React from "react";
import Repair from "../../../assets/Repair.jpg";
import Repair2 from "../../../assets/Repair2.jpg";

export default function RepairService() {
  return (
    <>
      <div className="relative  max-w-[1444px] mx-auto">
        <img
          className="w-[100%] h-[400px] object-cover object-right lg:h-[450px] lg:object-[50%,30%]"
          src={Repair}
          alt="Aircon Repair"
        />
        <div className="absolute w-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
          <h1 className="text-white font-bold text-[35px] text-center w-[90%] mx-auto tracking-wide lg:text-[50px]">
            Professional Aircon Minor and Major Repair
          </h1>
        </div>
        <div className="absolute w-[100%] h-[100%] top-0 bg-black opacity-[30%]"></div>
      </div>
      <div className="w-[90%] lg:w-[80%] max-w-[1444px] mx-auto">
        <div className="flex flex-col gap-[40px] md:flex-row mt-[40px]">
          <div className="w-[90%] mx-auto md:w-[50%]">
            <h1 className="uppercase text-[25px] leading-[30px] btc1 font-bold lg:text-[40px] lg:leading-[45px]">
              Aircon repair services in metro manila
            </h1>
            <p className="btc2 mt-[20px] lg:text-[18px]">
              Coolistic Airconditioning Shop offers reliable and efficient
              aircon repair services in Metro Manila to help ensure that your
              air conditioning units are functioning properly. Our skilled
              technicians are equipped to diagnose and fix a variety of issues
              with all types of air conditioning units, from simple repairs to
              more complex problems. With our prompt and professional service,
              you can trust us to keep your air conditioning units running
              smoothly, so you can stay cool and comfortable all year round.
            </p>
          </div>

          <div className="md:w-[50%]">
            <img
              className="rounded-md"
              src={Repair2}
              alt="Aircon Repair"
            />
          </div>
        </div>
      </div>
    </>
  );
}
