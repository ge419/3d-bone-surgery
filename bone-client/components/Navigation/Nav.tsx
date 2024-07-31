"use client";

import Link from "next/link";
import React from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import ButtonBlue from "../Button/ButtonBlue";
import ButtonRed from "../Button/ButtonRed";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
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
            <Link href="/For_Patients">For Patients</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/For_Professional">For Professional</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/News">News</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/bone3">Blog</Link>
            {/* 외부링크 네이버 카페 예정*/}
          </li>
        </ul>
        <div className="flex items-center space-x-2 md:space-x-5">
          {/* 로그인 */}
          <ButtonBlue link="/login" text="로그인" />
          {/* 회원가입 */}
          <ButtonRed text="회원가입" />
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
