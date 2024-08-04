import ButtonBlue from "@/src/components/Button/ButtonBlue";
import Carousel from "@/src/components/Slick/Carousel";
import Image from "next/image";
import React from "react";
import ProfileImg from "@/public/images/profile/profile1.jpg";
import SkeletonImg from "@/public/images/skeleton.jpg";

function Implant() {
  return (
    <div>
      <div className="mt-[12vh] flex items-center flex-col justify-center py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center w-[80%] mx-auto">
          <div className="col-span-2">
            <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
              What is 3D Implant Surgery
            </h1>
            <p className="md:text-[17px] text-[15px] leading-[1.5rem] md:leading-[1.5rem] text-black opacity-90 font-[400]">
              With a visionary approach to medicine, Dr. Kang is redefining
              cancer treatment possibilities. His pioneering work in minimally
              invasive surgery for bone metastasis and 3D printing technology
              for bone reconstruction has set new standards in the medical
              field, establishing him as an innovator and leader in surgical
              techniques.
            </p>
            <div className="flex items-center space-x-4 md:space-x-6 mt-[1rem]">
              <ButtonBlue text="Learn More" link="/about" />
            </div>
          </div>
          <div className="col-span-2 hidden sm:block mt-[2rem]">
            <Image src={ProfileImg} alt="profile" />
          </div>
        </div>
      </div>

      <div className="mt-[12vh] flex items-center flex-col justify-center py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center w-[80%] mx-auto">
          <div className="col-span-2">
            <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
              Understanding 3D Implant Surgery
            </h1>
            <p className="md:text-[17px] text-[15px] leading-[1.5rem] md:leading-[1.5rem] text-black opacity-90 font-[400]">
              With a visionary approach to medicine, Dr. Kang is redefining
              cancer treatment possibilities. His pioneering work in minimally
              invasive surgery for bone metastasis and 3D printing technology
              for bone reconstruction has set new standards in the medical
              field, establishing him as an innovator and leader in surgical
              techniques.
            </p>
            <div className="flex items-center space-x-4 md:space-x-6 mt-[1rem]">
              <ButtonBlue text="Frequently Ask Questions" link="/about" />
            </div>
          </div>
          <div className="col-span-2 hidden sm:block mt-[2rem]">
            <Image src={ProfileImg} alt="profile" />
          </div>
        </div>
      </div>
      <h1 className="text-center mt-[2rem] font-bold text-[22px] md:text-[30px] text-[#02073e]">
        Process of 3D Implant Surgery
      </h1>
      <Carousel />

      <div className="mt-[2rem] relative">
        <Image src={SkeletonImg} alt="skeleton" />
        <button
          style={{ position: "absolute", top: "150px", left: "150px" }}
          className="rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group 
    bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2
    hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
        >
          femur
        </button>
      </div>
    </div>
  );
}

export default Implant;
