"use client";

import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const ResponsiveNav = () => {
  const [nav, setNav] = useState();
  return (
    <div>
      <Nav />
      <MobileNav />
    </div>
  );
};

export default ResponsiveNav;
