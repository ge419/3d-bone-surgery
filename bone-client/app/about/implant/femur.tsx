import Image from 'next/image'
import React from 'react'
import ProfileImg from "@/public/images/profile/profile1.jpg";
import SectionHeading from '@/components/SectionHeading/SectionHeading';

      {/*예시 페이지입니다. BoneMap에서 클릭했을 때 얼추 이렇게 뜨면 될 것 같고.*/}
const femur = () => {
  return (
    <div>
        <div className="min-h-[70vh] lg:min-h-[88vh] md:min-h-[80vh] sm:min-h-[75vh] flex items-center flex-col justify-center py-8">
        {" "}
        {/* Changed h to min-h and added py-8 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center w-[80%] mx-auto gap-y-8">

          <div className="col-span-2">
            <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
              Professor Hyun-Guy Kang
            </h1>
            <p className="md:text-[17px] text-[15px] leading-[1.5rem] md:leading-[1.5rem] text-black opacity-90 font-[400]">
              Dr. Hyun-Guy Kang is currently Head of the center for rare cancer
              at the National Cancer Center, South Korea, and Clinical Professor
              of orthopaedic department, and Adjunct Professor of the
              International graduate school of cancer science and policy. Dr.
              Kang specializes in musculoskeletal oncology, sarcoma, and bone
              metastasis surgery. He strives to introduce innovative methods,
              including minimally invasive surgery for bone metastasis and 3D
              printing technology for bone reconstruction. He was the President
              of the Korean Musculoskeletal Tumor Society(www.kmsts.org) in
              2023, and is serving as the President of the Korean Society of 3D
              Printing in Medicine (https://www.3dpm.or.kr) from 2023 to 2024.
              As he is an orthopedic oncology surgeon, he has been able to
              experience 3D printing bone reconstruction surgery for various
              skeletal areas. Dr. Kang has been performing 3D printed bone
              reconstruction surgery not only on tumor patients but also on
              severe bone defects caused by trauma and surgical complications.
              Dr. Kang writes and lectures extensively on the issues associated
              with 3D printing applications in bone reconstruction both
              nationally and internationally. Dr. Hyun-Guy Kang is passionate
              about research and surgery to ensure that patient-specific 3D
              printed bone reconstruction provides the best functional results
              while maintaining long-term stability without complications.
            </p>
          </div>
        </div>
      </div>
      <SectionHeading headingMini='more than 30 cases' headingPrimary='State Of The Art Femur Bone Implant'/>
      <div className="col-span-2 hidden sm:block m-auto">
            <Image src={ProfileImg} alt="Dr Hyun Guy Kang" />
      </div>
      {/*여기 사진에다가 아빠한테 각 부위별 case 사진들 요구해서 넣으면 될 듯 */}
    </div>
  )
}

export default femur