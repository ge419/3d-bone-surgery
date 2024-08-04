import ButtonBlue from "@/components/Button/ButtonBlue";
import Image from "next/image";
import React from "react";
import ImplantImg from "@/public/images/amputation/implantclear.png";
import ModelImg from "@/public/images/amputation/modelclear.png";
import AnimalTestImg from "@/public/images/amputation/animalTest.jpg";
import ImageCarousel from "@/components/Slick/ImageCrousel";




function Amputation() {
  return <div>
    <div className="mt-[12vh] flex items-center flex-col justify-center py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center w-[80%] mx-auto">
          <div className="col-span-2">
            <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
              What is Osseointegration
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
              <ButtonBlue text="Learn More" link="/"/>
            </div>
          </div>
          <div className="col-span-2 hidden sm:block w-[20%] m-auto">
            <Image src={ModelImg} alt="profile" />
          </div>
        </div>
    </div>

    <div className="mt-[12vh] flex items-center flex-col justify-center py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center w-[80%] mx-auto">
          <div className="col-span-2">
            <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
              A Novel Patented Design
            </h1>
            <p className="md:text-[17px] text-[15px] leading-[1.5rem] md:leading-[1.5rem] text-black opacity-90 font-[400]">
              With a visionary approach to medicine, Dr. Kang is redefining
              cancer treatment possibilities. His pioneering work in minimally
              invasive surgery for bone metastasis and 3D printing technology
              for bone reconstruction has set new standards in the medical
              field, establishing him as an innovator and leader in surgical
              techniques.
            </p>
          </div>
          <div className="col-span-2 hidden sm:block w-[60%] m-auto">
            <Image src={ImplantImg} alt="profile" />
          </div>
        </div>
    </div>

    <div className="mt-[12vh] flex items-center flex-col justify-center py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center w-[80%] mx-auto">
          <div className="col-span-2">
            <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
            Successful Completion of Animal Trials
            </h1>
            <p className="md:text-[17px] text-[15px] leading-[1.5rem] md:leading-[1.5rem] text-black opacity-90 font-[400]">
              With a visionary approach to medicine, Dr. Kang is redefining
              cancer treatment possibilities. His pioneering work in minimally
              invasive surgery for bone metastasis and 3D printing technology
              for bone reconstruction has set new standards in the medical
              field, establishing him as an innovator and leader in surgical
              techniques.
            </p>
          </div>
          <div className="col-span-2 hidden sm:block w-[60%] m-auto">
            <ImageCarousel/>
          </div>
        </div>
    </div>
  </div>;
}

export default Amputation;
