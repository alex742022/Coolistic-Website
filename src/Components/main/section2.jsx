import React from "react";
import CoolisticAboutImg from "../../assets/CoolisticAbout.png";
export default function Section2() {
  return (
    <div className="border-t-4">
      <div
        className="w-[85%] mx-auto btc2 pt-[50px] pb-[50px] sm:pb-[100px] sm:pt-[100px] max-w-[1444px]"
        id="About"
      >
        <div>
          <h1 className="text-[35px] mb-[20px] text-center sm:text-[50px]">
            About
          </h1>
          <div className="flex flex-col items-center lg:flex-row gap-[40px] lg:gap-[6%] lg:mt-[50px]">
            <div className="relative sm:w-[500px] lg:w-[40%] before:content-[''] before:rounded-md before:w-[100%] before:h-[100%] before:bg-[#40bad2] before:absolute before:z-[-1] before:right-[2%] before:top-[5%] before:shadow-md">
              <img
                className="rounded-md relative left-[5%]"
                src={CoolisticAboutImg}
                alt="Coolistic Img"
              />
            </div>
            <p className=" lg:w-[60%] self-start lg:text-[18px]">
              <b className="lg:text-[20px]">
                Coolistic Airconditioning Shop (CAS){" "}
              </b>
              is a company that started in August 2020, focused on providing
              aircon services such as installation, repair, cleaning, and
              preventive maintenance. Our team of highly trained and experienced
              technicians is dedicated to providing our customers with the best
              possible service and the most reliable solutions for their air
              conditioning needs. At Coolistic Airconditioning, we understand
              the importance of staying cool and comfortable during the hot
              summer months. That's why we strive to provide prompt, efficient,
              and professional service to our customers. We believe in treating
              our customers like family, and we take pride in the long-term
              relationships we have built with the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
