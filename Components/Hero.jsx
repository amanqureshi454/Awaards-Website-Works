import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div
        className="lg:px-20 md:px-10 md:py-10 lg:py-18 pt-20 pb-5 px-8 bg-[#F5E41B] w-full md:w-full lg:h-full relative z-50 "
        id="hero"
      >
        <div className="flex justify-center items-center w-full md:mt-20 lg:mt-32">
          <h1
            className="lg:text-[6vw] text-[2.2rem] md:text-[7vw] hero-text w-full text-[#000] font-extralight font-[Works]  lg:pb-1 md:mb-20 pb-10 md:pt-20 pt-5 text-center"
            style={{
              lineHeight: ".9em",
              fontStyle: "italic",
            }}
          >
            We are a <span>CREATIVE</span> studio <br /> <span>DEDICATED</span>{" "}
            to <span>CULTURAL</span> <span>ADVANCEMENT</span> through <br />
            <span>STRATEGY</span> and <span>DESIGN</span>
          </h1>
        </div>
        <div className="hero-bottom flex justify-between items-center lg:mt-14 mt-20 ">
          <a
            href=""
            className="text-[#000] centro lg:text-[1.3vw] text-lg font-normal uppercase lg:px-3 py-2 lg:mx-2 font-Neuve cursor-pointer"
          >
            contact
          </a>
          <div className="img-down-arrow">
            <ScrollLink to="about" smooth={true} duration={500}>
              <img
                src="/imgs/icon-scroll-down-black.svg"
                className="cursor-pointer lg:w-10 lg:h-10 h-8 w-8"
              />
            </ScrollLink>
          </div>
          <a
            href=""
            className="text-[#000] centro lg:text-[1.3vw] text-lg font-normal uppercase lg:px-3 py-2 lg:mx-2 font-Neuve cursor-pointer"
          >
            instagram
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
