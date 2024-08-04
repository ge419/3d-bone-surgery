"use client";

import React from "react";
import Home from "../../components/Home";
import { useTranslations } from "next-intl";

export default function HomePage() {
  return (
    <>
      {/* className="text-9xl text-blue-900" */}
      <div>
        <Home />
      </div>
    </>
  );
}
