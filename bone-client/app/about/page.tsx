import Image from "next/image";
import React from "react";
import HeroImg from '@/public/images/hero.svg'
import ButtonBlue from "@/components/Button/ButtonBlue";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

function About() {
  return (       
  <div className="mt-[2.5rem]">
    <div className='h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] items-center flex-col justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-4 items-center w-[80%] mx-auto'>
            <div className='col-span-2 hidden sm:block mt-[2rem]'>
                <Image src={HeroImg} alt="Hero"/>
            </div>
            <div className='col-span-2'>
                <h1 className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]'>
                    Professor Hyun Guy Kang 
                </h1>
                <p className='md:text-[17px] text-[15px] leading-[1.5rem] md:leading-[1.5rem] text-black opacity-90 font-[400]'>
                Dr. Hyun-Guy Kang is currently Head of the center for rare cancer at the National Cancer Center,
                South Korea, and Clinical Professor of orthopaedic department, 
                and Adjunct Professor of the International graduate school of cancer science and policy.
                Dr. Kang specializes in musculoskeletal oncology, sarcoma, and bone metastasis surgery.
                He strives to introduce innovative methods, including minimally invasive surgery for bone metastasis and 3D printing technology for bone reconstruction.
                He was the President of the Korean Musculoskeletal Tumor Society(www.kmsts.org) in 2023, 
                and is serving as the President of the Korean Society of 3D Printing in Medicine (https://www.3dpm.or.kr) from 2023 to 2024.
                As he is an orthopedic oncology surgeon, he has been able to experience 3D printing bone reconstruction surgery for various skeletal areas.
                Dr. Kang has been performing 3D printed bone reconstruction surgery not only on tumor patients but also on severe bone defects caused by trauma and surgical complications.
                Dr. Kang writes and lectures extensively on the issues associated with 3D printing applications in bone reconstruction both nationally and internationally. 
                Dr. Hyun-Guy Kang is passionate about research and surgery to ensure that patient-specific 3D printed bone reconstruction provides the best functional results while maintaining long-term stability without complications.
                </p>
            </div> 
        </div>
    </div>

    <div className='h-[50vh] lg:h-[68vh] md:h-[60vh] sm:h-[55vh] items-center flex flex-col justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-4 items-center w-[80%] mx-auto'>
            <div className='col-span-4'>
              <h1 className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]'>
                  Research & Scientific Publications
              </h1> 
            </div>
              <div className='col-span-2'>
                <p className='md:text-[21px] text-[19px] leading-[1.5rem] md:leading-[1.5rem] text-black opacity-90 font-[400]'>
                  Professor Al Muderis has led research and contributed to over 40 scientific papers in the past 15 years.
                </p>
                <div className='flex items-center space-x-4 md:space-x-6 mt-[1rem]'>
                    <ButtonBlue text='Learn More'/>
                </div>
              </div>
        </div>
      </div>
      <SectionHeading headingMini='Ideal MJ' headingPrimary='Books by Hyun Guy Kang'/>
  </div>
)
}

export default About;
