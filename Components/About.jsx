"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  const [ishover, setIsHover] = useState(null);
  const [h1Width, setH1Width] = useState(null);
  const movingText = useRef(null); // Reference to the moving text element
  const line = useRef(null);
  const imgbg = useRef(null);
  let [autoAnimateTimeout, setAutoAnimateTimeout] = useState(null);
  const [hoveredImage, setHoveredImage] = useState("/imgs/black-bg.png"); // State to hold the image URL

  useEffect(() => {
    if (movingText.current) {
      const movingTextWidth = movingText.current.offsetWidth;

      const initialX = (innerWidth - movingTextWidth) / 2;
      gsap.fromTo(
        movingText.current,
        {
          x: initialX,
        },
        {
          x: -movingTextWidth,
          duration: 15,
          repeat: -1,
          ease: "linear",
        }
      );
    }
    gsap.fromTo(
      line.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power.in",
      }
    );
    gsap.fromTo(
      imgbg.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power3.out",
      }
    );
  }, [ishover]); // Run the animation whenever ishover state changes

  const handleHover = (index) => {
    setIsHover(index);
    setHoveredImage(img[index]);

    // if (ishover === null) {
    //   setTimeout(() => {
    //     setAutoAnimateTimeout(setIsHover((index) => index + 1));
    //   }, 1000);
    // }
  };

  const text = ["mineral", "converse", "skky", "boldly", "u.s.soccer"];
  const img = [
    "/imgs/MIN-1_240208_000417_7e2310f9f2d149843122e3a2929676cc.jpg",
    "/imgs/converse-21_1a58980f77ae6d8c6a1e26c40e92a05d.jpg",
    "/imgs/skky-25_1a58980f77ae6d8c6a1e26c40e92a05d.jpg",
    "/imgs/BOLDLY-1_1a58980f77ae6d8c6a1e26c40e92a05d.jpg",
    "/imgs/USS-1_240208_001956_1a58980f77ae6d8c6a1e26c40e92a05d.jpg",
  ];

  return (
    <div className="main w-full relative border-0" id="about">
      <div className="bg_animation relative">
        <div className="text absolute top-0 left-0 w-full h-full flex justify-center flex-col items-center z-20">
          {text.map((text, index) => (
            <div
              key={index}
              className="relative w-full flex justify-center items-center"
            >
              <h1
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => setIsHover(null)}
                className={`lg:text-[7vw] text-6xl lg:py-0 py-3 font-[Works] ${
                  ishover === index ? "italic" : "normal"
                } text-center inline-block ${
                  ishover === index ? "text-black" : "text-white"
                } uppercase relative z-20 overflow-hidden cursor-pointer px-4`}
                style={{
                  lineHeight: "1em",
                  letterSpacing: "-5px",
                  transition: "transform 1s ease-in-out",
                }}
              >
                {text}
              </h1>
              {ishover === index && (
                <div
                  ref={line}
                  className="line bg-[#F5E41B] h-7 md:h-9 lg:h-12 w-full absolute bottom-4 lg:bottom-4 md:bottom-1 left-0 transform -translate-y-1/2 flex justify-start items-center"
                >
                  <div className="moving overflow-hidden w-[100%] relative z-30">
                    <div
                      className={` bg-[#F5E41B] z-30 absolute lg:inset-0 md:inset-0 md:left-[34%] md:h-14 md:w-[300px] lg:left-[33%] left-[25%]  inset-1 shadow-lg blur-[4px] w-[250px] h-9 lg:w-[600px] lg:h-20 transform -translate-y-1/2 `}
                    ></div>
                    <h6
                      ref={movingText} // Reference to the moving text element
                      className=" lg:text-[1.1vw] text-md font-Neuve font-normal text-center text-black uppercase"
                      style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                    >
                      <span className="px-5">development</span>{" "}
                      <span className="px-5">design</span>{" "}
                      <span className="px-5">branding&identity</span>{" "}
                      <span className="px-5">packaging design</span>{" "}
                      <span className="px-5">digital design</span>
                      <span className="px-5">strategy</span>
                      <span className="px-5">packaging design</span>{" "}
                      <span className="px-5">strategy</span>
                      <span className="px-5">Creative direction</span>{" "}
                      <span className="px-5">development</span>{" "}
                      <span className="px-5">design</span>{" "}
                    </h6>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <img
          src={hoveredImage}
          ref={imgbg}
          className="w-full lg:h-full md:h-[60vh] h-[80vh] object-cover"
        />
        <div className="img-down-arrow flex justify-center items-center w-full cursor-pointer absolute bottom-3 z-50 ">
          <ScrollLink to="imageGallery" smooth={true} duration={500}>
            <img
              src="/imgs/icon-scroll-down-white.svg"
              className="cursor-pointer"
            />
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default About;
