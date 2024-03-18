"use client";
import Footer from "@/Components/Footer";
import Loader from "@/Components/Loader";
import Navbar from "@/Components/Navbar";
import React from "react";
const About = () => {
  const brands = [
    "Nike",
    "Louis Vuitton",
    "Equinox",
    "Fear of God",
    "Virgin Music",
    "Ferrari",
    "Calvin Klein",
    "Converse",
    "John Elliott",
    "U.S. Soccer",
    "Beyonce",
    "Peloton",
    "The North Face",
    "Jordan Brand",
    "Heron Preston",
    "Mineral Health",
    "Dyson",
  ];
  const creativeDisciplines = [
    "Creative Direction",
    "Strategy",
    "Branding & Identity",
    "Art Direction",
    "Experiential Design",
    "Motion & Animation",
    "Production",
    "Human Interface",
    "Packaging Design",
    "Print Design",
    "Digital Design",
    "Type Design",
    "Development",
    "Post Production",
    "Photography",
    "Film",
  ];

  return (
    <>
      <Loader />
      <Navbar />
      <div className="about">
        <div className="video lg:h-screen md:h-[60vh] h-[60vh] w-full">
          <video
            className="video h-full w-full object-cover"
            autoPlay
            muted
            loop
            src="/imgs/video-2.mp4"
          />
        </div>
        <section className="lg:px-36 md:px-24 lg:pt-20 pt-10 lg:mt-14 px-6 w-full h-auto lg:pb-20 lg:mb-10 bg-black">
          <div className=" flex justify-between items-center lg:flex-row md:flex-col flex-col gap-8">
            <div className="1 lg:w-1/2 w-full lg:h-screen flex justify-between items-left flex-col">
              <h6 className="lg:text-[1.2vw] md:text-[2vw] text-md lg:mb-14 mb-4 text-white font-Neuve ">
                OUR MANIFESTO
              </h6>
              <p
                // style={{ lineHeight: "2.7rem" }}
                className=" para text-white text-md lg:text-[2vw] md:text-[3vw] font-Works italic font-normal"
              >
                We are WØRKS. A New York City based creative studio dedicated to
                the process of cultural advancement through strategy and
                inter­dis­ci­pli­nary design. WØRKS is passionate about
                continually pushing the boundaries of the design process and
                exploring new techniques across a variety of mediums. <br />
                <br />
                The name WØRKS is an ode to the Deutscher Werkbund, a German
                association of artists, architects, designers and
                indus­tri­al­ists established in 1907. The Werkbund became an
                important element in the development of modern archi­tec­ture
                and industrial design, par­tic­u­lar­ly in the later creation of
                the Bauhaus School of Design. Its motto, VOM SOFAKISSEN ZUM
                STÄDTEBAU (from sofa cushions to city-building) indicated its
                range of interest.
              </p>
            </div>
            <div className="2 lg:w-1/2 w-full  flex lg:h-screen pb-10  justify-between items-left">
              <div className=" flex justify-between items-left flex-col gap-0">
                <h6 className="lg:text-[1.2vw] md:text-[2vw] text-md lg:mb-14 mb-4 text-white font-Neuve ">
                  CLIENTS
                </h6>
                {brands.map((p, i) => {
                  return (
                    <p
                      className="italic lg:h-[35px] md:text-[3vw] text-white text-md lg:text-[2.1vw] font-Works"
                      key={i}
                    >
                      {p}
                    </p>
                  );
                })}
              </div>
              <div>
                <h6 className="lg:text-[1.2vw] md:text-[2vw] text-md lg:mb-20 mb-4 text-white font-Neuve ">
                  SERVICES
                </h6>
                {creativeDisciplines.map((p, i) => {
                  return (
                    <p
                      className=" italic lg:h-[40px] md:text-[3vw] text-white text-md lg:text-[2.1vw] font-Works"
                      key={i}
                    >
                      {p}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="lg:px-36 md:px-24 lg:pb-0 pb-10  px-6 w-full h-auto bg-[#F5E41B]">
          <div className="wrapper lg:py-20 flex justify-between lg:items-center items-start  lg:flex-row md:flex-col flex-col  gap-6">
            <div className="1 lg:w-[70%] md:w-full w-full lg:h-screen flex justify-start items-left flex-col">
              <h6 className="lg:text-[1.2vw] md:text-[2vw] text-md lg:mb-1 mt-10  lg:py-10  mb-6 text-black font-Neuve ">
                OUR PROCESS
              </h6>
              <p
                // style={{ lineHeight: "2.7rem" }}
                className=" para text-black text-md lg:text-[2.1vw] md:text-[3vw] font-Works italic font-normal"
              >
                Our team ideates and execute concepts for brands,
                munic­i­pal­i­ties, non-profits and ourselves. By committing to
                quality over quantity, we remain agile and work at the speed of
                innovation today.
                <br />
                <br />
                We believe wholistic strategy, thoughtful design and purposeful
                production are the most important tenets in creating value for
                people. This shared belief system is what we look for when
                working with clients and collaborators.
                <br />
                <br />
                We design for the collective human experience, across multiple
                mediums. Because the lines dividing physical and digital
                experience no longer exist.
              </p>
            </div>
            <div className="2 w-1/2 lg:h-screen flex justify-start items-left flex-col">
              <h6 className="lg:text-[1.2vw] md:text-[2vw] text-md lg:mb-1 mt-4  lg:py-10  mb-6  text-black font-Neuve ">
                CONTACT US
              </h6>
              <a
                className="text-black text-md lg:text-[2.1vw] md:text-[3vw] font-Works italic font-normal"
                href=""
              >
                hello@works.studio
              </a>
              <a
                className="text-black text-md lg:text-[2.1vw] md:text-[3vw] font-Works italic font-normal"
                href=""
              >
                Instagram
              </a>
            </div>
          </div>
        </section>
        <Footer bgColor="#F5E41B" />
      </div>
    </>
  );
};

export default About;
