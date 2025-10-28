import React, { useState } from "react";
import logo from "../../assets/Images/Mkart.png";
import Cards from "../Cards/Cards";

function Home() {
  return (
    <div>
      <img src={logo} alt="" />
      <Cards />
    </div>
  );
}

export default Home;
