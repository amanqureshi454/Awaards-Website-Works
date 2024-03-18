import React from "react";
import Footer from "./Footer";

const ImageGallery = () => {
  return (
    <>
      <div className="">
        <div
          className="grid grid-cols-1 lg:gap-8 gap-3 lg:px-8 px-2 lg:pt-14 lg:pb-12 bg-white sm:grid-cols-2 md:grid-cols-3"
          id="imageGallery"
        >
          <div>
            <div className="relative overflow-hidden cursor-pointer ">
              <img
                className="object-cover object-center w-full lg:h-[800px] h-[400px] max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/thumbnail_230526_162436_e49f8295ccc5a85e1a76e2d68c06456f.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  Design
                </h6>
              </div>
            </div>
            <div className="relative overflow-hidden lg:mt-8 mt-3 cursor-pointer">
              <img
                className="object-cover object-center w-full lg:h-[500px] h-[400px] max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/fvv-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  Development
                </h6>
              </div>
            </div>
            <div className="relative overflow-hidden lg:mt-8 mt-3 cursor-pointer">
              <img
                className="object-cover object-center w-full h-[400px] max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/fog-pop-v1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  mineral
                </h6>
              </div>
            </div>
            <div className="relative overflow-hidden lg:mt-8 mt-3 cursor-pointer">
              <img
                className="object-cover object-center w-full h-[400px] max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/BOLDLY-1_1a58980f77ae6d8c6a1e26c40e92a05d.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  Converse
                </h6>
              </div>
            </div>
            <div className="relative overflow-hidden lg:mt-8 mt-3 cursor-pointer">
              <img
                className="object-cover object-center w-full lg:h-[600px] h-[400px] max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/JACKIELEEPHOTO_090717_INSTITUTE-KITHSPORT-203255_201124_023510_e49f8295ccc5a85e1a76e2d68c06456f.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  Creative
                </h6>
              </div>
            </div>
          </div>
          <div className="mid">
            <div className="relative overflow-hidden cursor-pointer">
              <img
                className="object-cover object-center w-full lg:h-[550px] h-[400px] max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/public-cover2_e49f8295ccc5a85e1a76e2d68c06456f.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  Streatgy
                </h6>
              </div>
            </div>
            <div className="relative overflow-hidden  lg:mt-8 mt-3 cursor-pointer">
              <img
                className="object-cover object-center w-full lg:h-[650px] h-[400px] max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/fog-pop-v1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  Branding
                </h6>
              </div>
            </div>
            <div className="relative overflow-hidden lg:mt-8 mt-3 cursor-pointer">
              <img
                className="object-cover object-center w-full lg:h-[600px] h-[400px] max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/Call-of-Duty-League-Championship-2021-Air-Force-1-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  Web design
                </h6>
              </div>
            </div>
            <div className="relative overflow-hidden  lg:mt-8 mt-3 cursor-pointer">
              <img
                className="object-cover object-center w-full h-[400px]  max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/fvv-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  Creative design
                </h6>
              </div>
            </div>
            <div className="relative overflow-hidden lg:mt-8 mt-3 cursor-pointer">
              <img
                className="object-cover object-center w-full lg:h-[550px] h-[400px] max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/xi-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  Streatgy
                </h6>
              </div>
            </div>
          </div>
          <div className="last">
            <div className="relative overflow-hidden lg:mt-8 mt-3 cursor-pointer">
              <img
                className="object-cover object-center w-full lg:h-[800px] h-[400px] max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/BOLDLY-1_1a58980f77ae6d8c6a1e26c40e92a05d.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  Branding
                </h6>
              </div>
            </div>
            <div className="relative overflow-hidden lg:mt-8 mt-3 cursor-pointer">
              <img
                className="object-cover object-center w-full lg:h-[500px] h-[400px] max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/xi-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  Development
                </h6>
              </div>
            </div>
            <div className="relative overflow-hidden lg:mt-8 mt-3 cursor-pointer">
              <img
                className="object-cover object-center w-full lg:h-[650px] h-[400px] max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/fvv-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  marketing
                </h6>
              </div>
            </div>
            <div className="relative overflow-hidden lg:mt-8 mt-3 cursor-pointer">
              <img
                className="object-cover object-center w-full lg:h-[800px] h-[400px]  max-w-full transition-transform duration-300 transform hover:scale-105"
                src="/imgs/Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h6 className="text-white uppercase lg:text-[3vw] text-2xl italic font-[Works] text-center">
                  seo
                </h6>
              </div>
            </div>
          </div>
        </div>
        <Footer bgColor="#ffffff" />
      </div>
    </>
  );
};

export default ImageGallery;
