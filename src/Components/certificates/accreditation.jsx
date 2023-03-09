import React from "react";
import AccreditationImg from "../../assets/accreditation.jpg";
export default function Accreditation() {
  return (
    <div className="bc2 py-[20px]">
      <div className="w-[90%] lg:w-[80%] mx-auto max-w-[1444px]">
        <div className="mt-[20px] md:flex  md:justify-between md:gap-[20px] lg:mt-[50px] lg:gap-[50px]">
          <div className="md:w-[50%]">
            <h1 className="text-[35px] uppercase btc1 font-semibold lg:text-[45px]">
              Accreditation
            </h1>
            <p className="text-white mb-[50px] lg:text-[18px]">
              We're pleased to announce that Coolistic Airconditioning Shop is
              now an authorized dealer of AUX air conditioners. As an authorized
              dealer, we have access to the latest products and technologies and
              can provide professional installation and comprehensive
              after-sales services. Trust us to deliver reliable, efficient and
              high-quality air conditioning solutions for both residential and
              commercial needs.
            </p>
          </div>
          <div className="md:w-[50%]">
            <img
              src={AccreditationImg}
              alt="accreditation"
              className="shadow-lg transition ease-in-out delay-75 duration-200 hover:scale-105 w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
