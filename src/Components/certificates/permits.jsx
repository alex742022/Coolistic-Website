import React from "react";
import Permit from "../../assets/permit.jpg";
import Permit1 from "../../assets/permit1.jpg";
import Permit2 from "../../assets/permit2.jpg";
import Permit3 from "../../assets/permit3.jpg";
export default function Permits() {
  return (
    <div className="bc2 py-[20px]">
      <div className="w-[90%] lg:w-[80%] mx-auto max-w-[1444px]">
        {/* <div className="mt-[20px] md:flex  md:justify-between md:gap-[20px] lg:mt-[50px] lg:gap-[50px]"> */}

        <div className="grid sm:grid-cols-2 gap-4 md:gap-x-0 lg:gap-y-[50px]">
          <div className="sm:col-span-2 md:w-[80%] mx-auto md:text-center">
            <h1 className="text-[35px] uppercase btc1 font-semibold lg:text-[45px]">
              Permits
            </h1>
            <p className="text-white mb-[40px] lg:text-[18px]">
              At Coolistic Airconditioning Shop, we take pride in operating with
              professionalism and humility, ensuring that our team holds all
              necessary certificates and permits to run a fully compliant
              business. With a valid Mayor's Permit, Business Permits, BIR
              certificates, and more, we are committed to providing safe,
              reliable, and top-quality services for all your air conditioning
              needs.
            </p>
          </div>
          <img
            src={Permit1}
            alt="Permit1"
            className="shadow-lg transition ease-in-out delay-75 duration-200 hover:scale-105 w-[100%] md:w-[90%]"
          />
          <img
            src={Permit}
            alt="Permit2"
            className="shadow-lg transition ease-in-out delay-75 duration-200 hover:scale-105 w-[100%] md:w-[90%]"
          />
          <img
            src={Permit2}
            alt="Permit3"
            className="shadow-lg transition ease-in-out delay-75 duration-200 hover:scale-105 w-[100%] md:w-[90%]"
          />
          <img
            src={Permit3}
            alt="Permit4"
            className="shadow-lg transition ease-in-out delay-75 duration-200 hover:scale-105 w-[100%] md:w-[90%]"
          />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
