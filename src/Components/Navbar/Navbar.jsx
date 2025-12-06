import React, { useEffect, useState } from "react";
import logo from "../../assets/Images/Logo.png";
import { SlUserFemale } from "react-icons/sl";
import { SiCarto } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImSwitch } from "react-icons/im";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [userName, setUserName] = useState("");
  const nagivate = useNavigate();
  // const location = useLocation();
  // console.log("location", location);
  const cartCount = useSelector((state) => state.cartQuantity);

  useEffect(() => {
    const user = localStorage.getItem("userName");
    console.log("qwerty", user);

    if (user) {
      setUserName(user);
    }
  }, [userName]);

  function logOutHandler() {
    localStorage.removeItem("userName");
    setUserName("");
    nagivate("/");
  }

  return (
    <div>
      <div className=" flex justify-around items-center  h-16 sticky top-0 z-50 bg-white shadow-md">
        <Link to="/">
          <button className="  cursor-pointer">
            <img src={logo} alt="" className="w-[100px]  h-18" />
          </button>
        </Link>
        <div className="hidden sm:flex justify-between items-center w-[45%]  rounded-md py-1.5 px-2  h-10 bg-[#f0f5ff]">
          <CiSearch />
          <input
            type="text"
            placeholder="Search for Products,Brand & More"
            className=" w-full outline-0 "
          />
        </div>
        <Link
          //  to={!userName && "/login"}
          to={"/login"}
          replace={true}
        >
          <div className=" flex items-center gap-2">
            <button className=" flex justify-center items-center px-4 py-2 gap-2 text-[#172657] font-serif hover:bg-[#172657] cursor-pointer hover:text-white rounded-md">
              <SlUserFemale />
              {userName ? userName : "Login"}
            </button>
            {userName && (
              <button
                onClick={logOutHandler}
                className=" px-4 py-2 text-[#172657] font-serif hover:bg-[#172657] cursor-pointer hover:text-white rounded-md"
              >
                <ImSwitch />
              </button>
            )}
            {/* <div className="sm:hidden text-[#172657]">
              <GiHamburgerMenu />
            </div> */}
          </div>
        </Link>
        <Link to={"/products"}>
          {userName && (
            <button className="hidden sm:block px-4 py-2 gap-2 text-[#172657] font-serif hover:bg-[#172657] cursor-pointer hover:text-white rounded-md">
              Products
            </button>
          )}
        </Link>
        <Link to={"/cart"}>
          <button className="hidden sm:flex items-center gap-0.5 px-4 py-2 font-serif text-[#172657] hover:bg-[#172657] cursor-pointer hover:text-white rounded-md ">
            <AiOutlineShoppingCart />
            <p className="text-sm text-red-600 px-1">{cartCount}</p>
          </button>
        </Link>
      </div>
      <div className="sm:hidden flex justify-between mt-2">
        <div>
          <Link to={"/products"}>
            {userName && (
              <button className=" sm:hidden px-4 py-2 gap-2 text-[#172657] font-serif hover:bg-[#172657] cursor-pointer hover:text-white rounded-md">
                Products
              </button>
            )}
          </Link>
        </div>
        <div>
          <Link to={"/cart"}>
            <button className=" sm:hidden flex items-center gap-0.5 px-4 py-2 font-serif text-[#172657] hover:bg-[#172657] cursor-pointer hover:text-white rounded-md ">
              <AiOutlineShoppingCart />
              <p className="text-sm text-red-600 px-1">{cartCount}</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="sm:hidden flex justify-between items-center m-3 rounded-md py-1.5 px-2  h-10 bg-[#f0f5ff]">
        <CiSearch />
        <input
          type="text"
          placeholder="Search for Products,Brand & More"
          className=" w-full outline-0 "
        />
      </div>
    </div>
  );
}

export default Navbar;
