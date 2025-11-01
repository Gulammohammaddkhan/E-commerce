import React, { useState } from "react";
import random from "../../assets/Images/Random.png";
import jeans from "../../assets/Images/Jeans1.png";
import glasses from "../../assets/Images/Glasses.png";
import dress from "../../assets/Images/Dress.png";
import accesories from "../../assets/Images/Accesories.png";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Offer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  let images = [jeans, glasses, dress, accesories];
  function nextBtn() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }
  function backBtn() {
    setCurrentIndex((prev) => (prev - 1) % images.length);
  }
  return (
    <div>
      <div className="px-10">
        <div className="flex flex-col items-center py-14">
          <h3 className="text-4xl font-semibold font-serif py-6">
            What we Have for you
          </h3>
          <img
            src={random}
            alt=""
            className=" w-[80%] h-[500px] rounded-4xl shadow-2xl shadow-gray-300 "
          />
        </div>
        <div className="flex px-10 py-4 bg-gray-100 rounded-2xl">
          <div className="relative w-[80%]">
            <img
              src={images[currentIndex]}
              alt=""
              className="w-fit rounded-2xl "
            />
            <button
              onClick={backBtn}
              className=" absolute top-[45%] left-[-2%] text-black "
            >
              <IoIosArrowDropleftCircle size={"30px"} />
            </button>
            <button
              onClick={nextBtn}
              className="absolute top-[45%] right-[-2%] text-black  "
            >
              <IoIosArrowDroprightCircle className="" size={"30px"} />
            </button>
          </div>
          <div className="w-fit flex flex-col justify-center items-center px-10">
            <h2 className="text-2xl font-semibold font-serif pb-4 text-blue-400">
              Why Choose <strong>Mk</strong>
              <strong className="text-orange-300">art</strong> for Your Fashion
              Needs?
            </h2>
            <p className="text-sm text-center pb-4 text-gray-400 ">
              Mkart is not just a shopping brand — it's a premium fashion
              experience. We deliver outfits made with the latest trends,
              premium fabrics, and perfect fitting, designed to be stylish as
              well as comfortable. Our focus is on quality, reasonable pricing,
              and customer satisfaction, so you look confident and classy at
              every event — whether it’s a party, a casual outing, or everyday
              wear.
            </p>
            <h3 className="font-semibold font-serif text-blue-800">
              Shop once, and you’ll feel the difference yourself.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
