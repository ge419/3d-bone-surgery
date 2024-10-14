import Image from 'next/image'
import React from 'react'
import SkeletonImg from "@/public/images/skeleton.jpg";


const BoneMap = () => {
  return (
    <div>
        <div className="mt-[2rem] relative">
            <Image src={SkeletonImg} alt='skeleton'/>
            <button
                style={{position: "absolute", top: "330px", left: "500px",}}
                className="rounded-full px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group 
            bg-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-400 text-white hover:ring-2
            hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300"
                >
                Scapular
            </button>
            <button
                style={{position: "absolute", top: "510px", left: "580px",}}
                className="rounded-full px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group 
            bg-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-400 text-white hover:ring-2
            hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300"
                >
                Humerus
            </button>
            <button
                style={{position: "absolute", top: "750px", left: "660px",}}
                className="rounded-full px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group 
            bg-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-400 text-white hover:ring-2
            hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300"
                >
                Lower Arm
            </button>
            <button
                style={{position: "absolute", top: "820px", left: "370px",}}
                className="rounded-full px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group 
            bg-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-400 text-white hover:ring-2
            hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300"
                >
                Pelvis
            </button>
            <button
                style={{position: "absolute", top: "1100px", left: "530px",}}
                className="rounded-full px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group 
            bg-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-400 text-white hover:ring-2
            hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300"
                >
                Femur
            </button>
            <button
                style={{position: "absolute", top: "1500px", left: "500px",}}
                className="rounded-full px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group 
            bg-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-400 text-white hover:ring-2
            hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300"
                >
                Tibia
            </button>
            <button
                style={{position: "absolute", top: "1750px", left: "500px",}}
                className="rounded-full px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group 
            bg-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-400 text-white hover:ring-2
            hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300"
                >
                Foot
            </button>
        </div>
    </div>
  )
}

export default BoneMap