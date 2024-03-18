import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = ({ bgColor }) => {
  return (
    <>
      <div
        style={{ background: `${bgColor}` }}
        className={`footer flex w-full justify-center items-center flex-col gap-6`}
      >
        <div className={`bg-[${bgColor}] w-full h-[100px]`}>
          <ScrollLink to="hero" smooth={true} duration={500}>
            <div className="back-top flex justify-center items-center flex-col gap-2 cursor-pointer">
              <img src="/imgs/icon-scroll-up-black-mobile.svg" alt="" />
              <h6 className="text-[#000] md:text-[1vw] text-md lg:text-[1.1vw] font-normal uppercase px-5 py-2 mx-2 font-Neuve">
                back to top
              </h6>
            </div>
          </ScrollLink>
        </div>
        <div
          className={`w-full lg:px-20 px-4 py-5 lg:py-10 bg-black flex justify-between lg:flex-row flex-col items-center`}
        >
          <h6 className="text-[#fff] text-md md:text-[1vw] lg:text-[1.1vw] font-normal uppercase px-5 py-2 mx-2 font-Neuve">
            hello@amanqureshi.studio
          </h6>
          <div className="flex justify-between items-center">
            <h6 className="text-[#fff] text-md md:text-[1vw] lg:text-[1.1vw] font-normal uppercase px-5 py-2 mx-2 font-Neuve">
              newsletter
            </h6>
            <h6 className="text-[#fff] text-md md:text-[1vw] lg:text-[1.1vw] font-normal uppercase px-5 py-2 mx-2 font-Neuve">
              instagram
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
