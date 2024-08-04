"use client";

import Link from "next/link";
import React from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import ButtonBlue from "../Button/ButtonBlue";
import ButtonRed from "../Button/ButtonRed";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import ButtonLogout from "../Button/ButtonLogout";
import Dropdown from "./Dropdown";
import LanguageSwitcher from "../I18n/LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../I18n/LocaleSwitcher";
import { Locale } from "@/src/i18n.config";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const t = useTranslations("Navigation");
  const { status } = useSession();
  const router = useRouter();
  const locale = useLocale() as Locale;

  const showSession = () => {
    if (status === "authenticated") {
      return <ButtonLogout text={"로그아웃"} />;
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7">Loading...</span>;
    } else {
      return (
        <>
          <ButtonBlue link="/login" text={t("login")} />
          {/* <ButtonRed link="/register" text="회원가입" /> */}
        </>
      );
    }
  };

  const aboutItems = [
    { label: "Amputation", link: "/about/amputation" },
    { label: "Implant", link: "/about/implant" },
    { label: "Oncology", link: "/about/oncology" },
  ];

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
            <Link href="/">{t("home")}</Link>
          </li>
          <li className="text-[17px] cursor-pointer">
            {/* <Link href="/about">About</Link> */}
            <Dropdown title={t("about")} items={aboutItems} />
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/forPatients">{t("forPatients")}</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/forProfessionals">{t("forProfessionals")}</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/news">{t("news")}</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200">
            <Link href="/">{t("blog")}</Link>
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
        <div className="flex items-center">
          <LanguageSwitcher />
          {/* <LocaleSwitcher locale={locale} /> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
