import React, { useState } from "react";
import Logo from "../../assets/CoolisticLogo.png";
import Location from "../../assets/locationIcon.png";
import Contact from "../../assets/phoneIcon.png";
import Menu from "../../assets/menuIcon.png";
import Cancel from "../../assets/cancelIcon.png";
import CoolisticImg from "../../assets/CoolisticImg.png";
import CoolisticImgPhone from "../../assets/CoolisticImgPhone.png";
export default function Section1() {
  // react hook
  const [toogle, setToogle] = useState(true);

  // toogle function for nav
  const toogleForNav = () => {
    setToogle((prevToogle) => !prevToogle);
  };

  return (
    <>
      <header className="w-[90%] mt-[10px] sm:mb-[10px] lg:w-4/5 lg:mt-[16px] h-[70px] mx-auto max-w-[1444px] flex items-center justify-between">
        <img className="w-[140px] sm:w-[175px]" src={Logo} alt="logo" />

        <div className="hidden lg:flex gap-x-[20px]">
          {/* header location */}
          <div className="flex items-center gap-[12px]">
            <div className="w-[30px]">
              <img className="" src={Location} alt="location" />
            </div>
            <div className="leading-4">
              <p className="font-bold btc2">171 Molave</p>
              <p className="text-[#787878]">Parañaque, Metro Manila</p>
            </div>
          </div>
          {/* header contact */}
          <div className="flex items-center gap-[15px]">
            <div className="w-[30px]">
              <img className="" src={Contact} alt="location" />
            </div>
            <div className="leading-4">
              <p className="font-bold btc2">0917 581 2765</p>
              <p className="text-[#787878]">dan.coolistic@gmail.com</p>
            </div>
          </div>
        </div>

        {/* menu icon */}
        <div className="w-[30px] lg:hidden" onClick={toogleForNav}>
          <img src={toogle ? Menu : Cancel} alt="menu-icon" />
        </div>
      </header>
      {/* header 2 */}
      {/* onclick function for toogle */}
      <header
        className={`absolute z-[20] w-[270px] ${
          toogle ? "right-[100%]" : "right-0"
        } mt-[8px] py-[20px] bc2 flex lg:w-full lg:static lg:items-center lg:h-[72px]`}
      >
        <div className="w-4/5 max-w-[1444px] mx-auto flex flex-col gap-[40px] lg:flex-row">
          <ul className="flex flex-col gap-[20px] lg:flex-row lg:gap-[40px] text-white text-[17px]">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Pricing</li>
            <li>Contacts</li>
          </ul>
          {/* Constact */}
          <div className="flex flex-col gap-y-[20px] gap-x-[20px] text-[14px] lg:hidden">
            {/* header location */}
            <div className="flex items-center gap-[12px]">
              <div className="w-[20px]">
                <img className="" src={Location} alt="location" />
              </div>
              <div className="leading-4">
                <p className="font-semibold lg:font-bold text-white">
                  171 Molave
                </p>
                <p className="text-white">Parañaque, Metro Manila</p>
              </div>
            </div>
            {/* header contact */}
            <div className="flex items-center gap-[15px]">
              <div className="w-[20px]">
                <img className="" src={Contact} alt="location" />
              </div>
              <div className="leading-4">
                <p className="font-semibold lg:font-bold text-white">
                  0917 581 2765
                </p>
                <p className="text-white">dan.coolistic@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mx-auto h-[700px] overflow-y-hidden">
        <div className="flex w-[85%] max-w-[1440px] mx-auto lg:w-4/5 lg:h-[760px]">
          <div className="lg:w-[493px] mt-[160px] z-10">
            <h1 className="text-[40px] leading-[40px] md:text-[50px] md:leading-[50px] lg:text-[60px] font-[700] btc1 lg:leading-[60px]">
              Air Conditioning Services
            </h1>
            <p className="text-white lg:text-[#023F53] lg:w-[455px] lg:text-[18px] mt-[20px] mb-[30px]">
              "At Coolistic Airconditioning Shop, we pride ourselves on
              providing expert A/C services for both residential and commercial
              clients. From routine maintenance to emergency repairs and full
              system replacements, we've got you covered."
            </p>
            <a
              href="#"
              className="bc1 text-white py-[10px] px-[20px] rounded-md"
            >
              BOOK NOW!
            </a>
          </div>
          <div className="lg:absolute w-[50%] h-[700px] right-0">
            <img className="w-[100%] object-cover object-top h-[700px]" src={CoolisticImg} alt="coolistic" />
          </div>
          <div className="absolute w-[100%] h-[700px] left-0 lg:hidden">
              <img
                className="w-[100%] object-cover sm:object-top h-[700px]"
                src={CoolisticImgPhone}
                alt="coolistic"
              />
          </div>
        </div>
        <div className="absolute bg-black w-[100%] h-[100%] top-0 opacity-[50%] lg:hidden"></div>  
      </main>
    </>
  );
}
