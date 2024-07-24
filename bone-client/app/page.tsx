import React from "react";
import Home from "../components/Home";
import ResponsiveNav from "../components/Navigation/ResponsiveNav";

const HomePage = () => {
  return (
    <>
      <ResponsiveNav />
      <div className="text-9xl text-blue-900">
        <Home />
      </div>
    </>
  );
};

export default HomePage;
