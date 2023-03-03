import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarrierBrands from "../../assets/carrier.png";
import ConduraBrands from "../../assets/Condura.png";
import DaikinBrands from "../../assets/daikin.jpg";
import HitachiBrands from "../../assets/Hitachi-Logo.png";
import KolinBrands from "../../assets/kolin.jpg";
import KoppelBrands from "../../assets/Koppel.png";
import LgBrands from "../../assets/lg.png";
import MatrixBrands from "../../assets/Matrix.jpg";
import MideaBrands from "../../assets/midea.png";
import MitsubishiBrands from "../../assets/Mitsubishi.jpg";
import PanasonicBrands from "../../assets/panasonic.png";
import FujidenzoBrands from "../../assets/fujidenzo.jpg";
import SamsungBrands from "../../assets/samsung.png";
import SharpBrands from "../../assets/sharp.png";
import ToshibaBrands from "../../assets/Toshiba.png";
import TosotBrands from "../../assets/tosot.png";
import YorkBrands from "../../assets/York.png";
import LeftArrow from "../../assets/chevron-left.png";
import RightArrow from "../../assets/chevron-right.png";

export default function BrandsAircon() {
  const brandList = [
    {
      id: 1,
      brandLogo: CarrierBrands,
      title: "CarrieLogo",
    },
    {
      id: 2,
      brandLogo: ConduraBrands,
      title: "ConductorLogo",
    },
    {
      id: 3,
      brandLogo: DaikinBrands,
      title: "DaikinLogo",
    },
    {
      id: 4,
      brandLogo: HitachiBrands,
      title: "HitachiLogo",
    },
    {
      id: 5,
      brandLogo: KolinBrands,
      title: "KolinLogo",
    },
    {
      id: 6,
      brandLogo: KoppelBrands,
      title: "KoopelLogo",
    },
    {
      id: 7,
      brandLogo: LgBrands,
      title: "LgLogo",
    },
    {
      id: 8,
      brandLogo: MatrixBrands,
      title: "MatrixLogo",
    },
    {
      id: 9,
      brandLogo: MideaBrands,
      title: "MideaLogo",
    },
    {
      id: 10,
      brandLogo: CarrierBrands,
      title: "CarrierLogo",
    },
    {
      id: 11,
      brandLogo: MitsubishiBrands,
      title: "MitsubishiLogo",
    },
    {
      id: 12,
      brandLogo: PanasonicBrands,
      title: "PanasonicLogo",
    },
    {
      id: 13,
      brandLogo: FujidenzoBrands,
      title: "FujidenzoLogo",
    },
    {
      id: 14,
      brandLogo: SamsungBrands,
      title: "SamsungLogo",
    },
    {
      id: 15,
      brandLogo: SharpBrands,
      title: "SharpLogo",
    },
    {
      id: 16,
      brandLogo: ToshibaBrands,
      title: "ToshibaLogo",
    },
    {
      id: 17,
      brandLogo: TosotBrands,
      title: "TosotLogo",
    },
    {
      id: 18,
      brandLogo: YorkBrands,
      title: "YorkLogo",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <span
        className="w-[40px]
                         flex justify-center items-center
                         absolute right-[-5%] bottom-[50%] translate-y-[50%] z-10
                         cursor-pointer"
        onClick={onClick}
      >
        <img src={RightArrow} alt="right-arrow" />
      </span>
    );
  }

  //Carousel Arrrow Function
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="w-[40px]
                         flex justify-center items-center 
                         absolute left-[-5%] bottom-[50%] translate-y-[50%] z-10
                         sm:right-[100px]
                         cursor-pointer"
        onClick={onClick}
      >
        <img src={LeftArrow} alt="left-arrow" />
      </div>
    );
  }

  return (
    <div className="pt-[50px]">
      <h1 className="text-center btc2 text-[28px] uppercase font-semibold">
        Brands we carry
      </h1>
      <div className="w-[90%] mx-auto lg:w-[80%] max-w-[1444px]">
          <Slider {...settings}>
            {brandList.map((brands) => {
              return (
                <div
                  key={brands.id}
                  className="flex items-center justify-center p-[20px]"
                >
                  <img
                    src={brands.brandLogo}
                    alt={brands.title}
                    className="max-w-full max-h-full"
                  />
                </div>
              );
            })}
          </Slider>
      </div>
    </div>
  );
}
