import Link from "next/link";
import React from "react";
import ButtonLogin from "../Button/ButtonLogin";
import ButtonSignUp from "../Button/ButtonSignUp";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";

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
            <Link href="/bone1">Bone1</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/bone2">Bone2</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/bone3">Bone3</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2 md:space-x-5">
          {/* 로그인 */}
          <ButtonLogin text="로그인" />
          {/* 회원가입 */}
          <ButtonSignUp text="회원가입" />
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
