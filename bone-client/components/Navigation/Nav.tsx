"use client";

import Link from "next/link";
import React from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import ButtonBlue from "../Button/ButtonBlue";
import ButtonRed from "../Button/ButtonRed";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import ButtonLogout from "../Button/ButtonLogout";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return <ButtonLogout text={"로그아웃"} />;
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7">Loading...</span>;
    } else {
      return (
        <>
          <ButtonBlue link="/login" text="로그인" />
          <ButtonRed link="/register" text="회원가입" />
        </>
      );
    }
  };

  return (
    <div className="h-[12h] bg-white shadow-md">
      <div className="w-[85%] flex item-center justify-between mx-auto h-[12vh]">
        <h1 className="text-[16px] md:text-[25px] font-bold text-slate-800">
          <span className="text-[27px] md:text-[40px] text-blue-600">3D </span>
          Bone Surgery
        </h1>
        <ul className="hidden lg:flex items-center space-x-10">
          {/* Modify list items as required */}
          <li className="text-[17px] cursor-pointer text-blue-500">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/about">About</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/forPatients">For Patients</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/forProfessionals">For Professional</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/news">News</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/">Blog</Link>
            {/* 임시로 홈페이지로 routing, 외부링크 네이버 카페 예정*/}
          </li>
        </ul>
        <div className="flex items-center space-x-2 md:space-x-5">
          {showSession()}
          <Bars3BottomRightIcon
            onClick={openNav}
            className="w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
