import React from "react";
import ButtonBlue from "../Button/ButtonBlue";
import ButtonRed from "../Button/ButtonRed";
import HeroImg from "@/public/images/hero.svg";
import Image from "next/image";
import SectionHeading from "../SectionHeading/SectionHeading";

const About = () => {
  return (
    <div className="mt-[12vh] flex items-center flex-col justify-center py-8">
      {/* mt-[12vh] h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center */}
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center w-[80%] mx-auto">
        <div className="col-span-2">
          <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
            Professor Hyun Guy Kang
          </h1>
          <p className="md:text-[17px] text-[15px] leading-[1.5rem] md:leading-[1.5rem] text-black opacity-90 font-[400]">
            Dr. Hyun-Guy Kang is a world-renowned expert in orthopedic oncology,
            leading the Center for Rare Cancer at the prestigious National
            Cancer Center in South Korea.
            <br />
            Dr. Kang is at the forefront of advancements in musculoskeletal
            oncology, sarcoma, and bone metastasis surgery.
            <br />
            With a visionary approach to medicine, Dr. Kang is redefining cancer
            treatment possibilities. His pioneering work in minimally invasive
            surgery for bone metastasis and 3D printing technology for bone
            reconstruction has set new standards in the medical field,
            establishing him as an innovator and leader in surgical techniques.
            <div className="flex items-center space-x-4 md:space-x-6 mt-[2rem]">
              <ButtonBlue text="Learn More about Prof. Kangs work" />
            </div>
          </p>
        </div>
        <div className="col-span-2 hidden sm:block mt-[2rem]">
          <Image src={HeroImg} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default About;
