import React from "react";
import FacebookLogo from "../../assets/logo-facebook.png";
import InstagramLogo from "../../assets/logo-instagram.png";
import TiktokLogo from "../../assets/logo-tiktok.png";
import YoutubeLogo from "../../assets/logo-youtube.png";
import LinkedinLogo from "../../assets/logo-linkedin.png";
import CoolisticLogoFooter from "../../assets/coolisticlogo2.jpg";
export default function Footer() {
  return (
    <footer className="linearGradient py-[30px] lg:h-[300px] lg:flex lg:items-center text-sm">
      <div className="w-[85%] lg:w-[80%] mx-auto text-white max-w-[1440px]">
        <div className="grid grid-cols-2 justify-between gap-[20px] lg:h-[100px] sm:grid-cols-3 lg:grid-cols-4">
          <div className="hidden w-[100%] col-span-2 sm:col-span-3 lg:col-auto sm:flex sm:justify-center lg:block">
            <img
              src={CoolisticLogoFooter}
              alt="Coolistic Logo"
              className="w-[180px]"
            />
          </div>
          <ul>
            <li className="font-bold">Company</li>
            <li className="mt-[5px]">Company Values</li>
            <li>Vision</li>
            <li>Mission</li>
          </ul>

          <ul>
            <li className="font-bold">Certificates</li>
            <li className="mt-[5px]">Accreditation</li>
            <li>Permits</li>
          </ul>

          <div className="col-span-2 sm:col-auto">
            <span className="font-bold">Social Media Accounts</span>
            <div className="w-[100px] grid grid-cols-3 gap-2 mt-[5px]">
              {/* facebook icon */}
              <a
                href="http://facebook.com/CoolisticAircon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:w-[35px] "
              >
                <img src={FacebookLogo} alt="facebook" />
              </a>
              {/* instagram icon */}
              <a
                href="https://www.instagram.com/coolisticairconditioningshop/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:w-[35px] "
              >
                <img src={InstagramLogo} alt="instagram" />
              </a>
              {/* tiktok icon  */}
              <a
                href="https://www.tiktok.com/@coolisticaircon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:w-[35px] "
              >
                <img src={TiktokLogo} alt="tiktok" />
              </a>
              {/* youtube icon  */}
              <a
                href="https://www.youtube.com/@coolisticairconditioningsh1821"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:w-[35px]"
              >
                <img src={YoutubeLogo} alt="youtube" />
              </a>
              {/* linkedin icon  */}
              <a
                href="https://www.tiktok.com/@coolisticaircon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:w-[35px]"
              >
                <img src={LinkedinLogo} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
