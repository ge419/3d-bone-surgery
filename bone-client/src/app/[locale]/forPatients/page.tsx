import Carousel from "@/src/components/Slick/Carousel";
import React from "react";

const ForPatients = () => {
  return (
    <div>
      <h1 className="text-center mt-[2rem] font-bold text-[22px] md:text-[30px] text-[#02073e]">
        Process of 3D Implant Surgery
      </h1>
      <Carousel />
    </div>
    ///밑에 이메일 컴포넌트 연결시키기
  );
};

export default ForPatients;
