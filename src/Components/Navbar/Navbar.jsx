import React, { useEffect, useState } from "react";
import logo from "../../assets/Images/Logo.png";
import { SlUserFemale } from "react-icons/sl";
import { SiCarto } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function Navbar() {
  // const [userName, setUserName] = useState("");
  // useEffect(() => {
  //   const user = localStorage.getItem("username");
  //   setUserName(user);
  // }, []);

  return (
    <div className="flex justify-around items-center h-16 sticky top-0 z-50 bg-white shadow-md">
      <Link to="/">
        <button className="cursor-pointer">
          <img src={logo} alt="" className="w-[100px] h-18" />
        </button>
      </Link>
      <div className="flex items-center w-[500px]  rounded-md py-1.5 px-2  h-10 bg-[#f0f5ff]">
        <CiSearch />
        <input
          type="text"
          placeholder="Search for Products,Brand & More"
          className=" w-full  outline-0 "
        />
      </div>
      <Link
        //  to={!userName && "/login"}
        to={"/login"}
        replace={true}
      >
        <button className="flex justify-center items-center px-4 py-2 gap-2 text-[#172657] font-serif hover:bg-[#172657] cursor-pointer hover:text-white rounded-md">
          <SlUserFemale /> Login
          {/* {userName ? userName : "Login"} */}
        </button>
      </Link>
      <button className="flex items-center gap-3 font-serif text-[#172657] cursor-pointer ">
        <AiOutlineShoppingCart /> Cart
      </button>
    </div>
  );
}

export default Navbar;
