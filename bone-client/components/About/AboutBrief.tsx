import React from "react";
import ButtonBlue from "../Button/ButtonBlue";
import Image from "next/image";
import HeroImg from "@/public/images/hero.svg";
import SectionHeading from "../SectionHeading/SectionHeading";
import FeatureCard from "../Features/FeatureCard";
import Icon1 from "@/public/images/icon1.png";
import Icon2 from "@/public/images/icon2.png";
import Icon3 from "@/public/images/icon3.png";
import ProfileImg from "@/public/images/profile/profile1.jpg";
import ImplantImg from "@/public/images/3dimplant.png";

const AboutBrief = () => {
  return (
    <div>
      <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center w-[80%] mx-auto">
          <div className="col-span-4">
            <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
              Transforming lives with advanced prosthetic technology
            </h1>
          </div>
          <div className="col-span-2">
            <p className="md:text-[21px] text-[19px] leading-[1.5rem] md:leading-[1.5rem] text-black opacity-90 font-[400]">
              Osseointegration has transformed the lives of thousands of people
              with limb loss. By inserting an advanced implant into the bone, it
              provides a secure and stable connection for a range of external
              prosthetic limbs. Eliminating the need for a traditional socket
              prosthetic, osseointegration can improve mobility, comfort and
              quality of life.
            </p>
            <div className="flex items-center space-x-4 md:space-x-6 mt-[1rem]">
              <ButtonBlue link="/" text="Learn More" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[1rem] pb-[3rem]">
        <SectionHeading
          headingMini="Ideal MJ"
          headingPrimary="Our Speciality"
        />
        <div className="pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]">
          <div>
            <FeatureCard
              title="3D implant"
              image={Icon1.src}
              info="Designed 3d titatnium implant"
              link="/about/implant"
            />
          </div>
          <div>
            <FeatureCard
              title="Oncology"
              image={Icon2.src}
              info="more than 1000 cases"
              link="/about/oncology"
            />
          </div>
          <div>
            <FeatureCard
              title="Amputation"
              image={Icon3.src}
              info="FDA approved amputation design"
              link="/about/amputation"
            />
          </div>
        </div>
      </div>

      <div className="mt-[12vh] flex items-center flex-col justify-center py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center w-[80%] mx-auto">
          <div className="col-span-2">
            <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
              Professor Hyun-Guy Kang
            </h1>
            <p className="md:text-[17px] text-[15px] leading-[1.5rem] md:leading-[1.5rem] text-black opacity-90 font-[400]">
              Dr. Hyun-Guy Kang is a world-renowned expert in orthopedic
              oncology, leading the Center for Rare Cancer at the prestigious
              National Cancer Center in South Korea.
              <br />
              Dr. Kang is at the forefront of advancements in musculoskeletal
              oncology, sarcoma, and bone metastasis surgery.
              <br />
              With a visionary approach to medicine, Dr. Kang is redefining
              cancer treatment possibilities. His pioneering work in minimally
              invasive surgery for bone metastasis and 3D printing technology
              for bone reconstruction has set new standards in the medical
              field, establishing him as an innovator and leader in surgical
              techniques.
            </p>
            <div className="flex items-center space-x-4 md:space-x-6 mt-[1rem]">
              <ButtonBlue
                text="Learn More about Prof. Kangs work"
                link="/about"
              />
            </div>
          </div>
          <div className="col-span-2 hidden sm:block mt-[2rem]">
            <Image src={ProfileImg} alt="profile" />
          </div>
        </div>
      </div>
      <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center w-[80%] mx-auto">
          <div className="col-span-2 hidden sm:block mt-[2rem]">
            <Image src={ImplantImg} alt="3d implant" />
          </div>
          <div className="col-span-2">
            <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
              3D Bone Implant: What to Know
            </h1>
            <p className="md:text-[17px] text-[15px] leading-[1.5rem] md:leading-[1.5rem] text-black opacity-90 font-[400]">
              As with any medical procedure, it is important to understand
              what’s involved. Click on the link below to learn about the
              surgery, what you can do before and after surgery to reduce your
              chances of developing a complication, and the steps we take to
              optimise your rehabilitation and recovery.
            </p>
            <div className="flex items-center space-x-4 md:space-x-6 mt-[1rem]">
              <ButtonBlue link="/" text="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBrief;
