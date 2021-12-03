import React from "react";
import { Filter } from "./Components/Filter";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

const HolyPlaceApp = () => {
  return (
    <>
      <Navbar />
      <Filter />
      <Products />
    </>
  );
};

export default HolyPlaceApp;
