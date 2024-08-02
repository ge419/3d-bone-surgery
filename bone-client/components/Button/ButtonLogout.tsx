"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  text: string;
  // link: string;
}

const ButtonLogout = ({ text }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    // router.push(link);
    signOut({ redirect: false }).then(() => {
      router.push("/");
    });
  };
  return (
    <button
      onClick={handleClick}
      className="rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group 
    bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2
    hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 "
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease"></span>
      <span className="relative">{text}</span>
    </button>
  );
};

export default ButtonLogout;
