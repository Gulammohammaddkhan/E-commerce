import React, { useState } from "react";
import hero from "../../assets/Images/Hero.png";
import random from "../../assets/Images/Random.png";
import Offer from "../Offer/Offer";

import Cards from "../Cards/Card";
import Testimonial from "../Testimonial/Testimonial";
import ProductDetail from "../ProductDetail/ProductDetail";
import Card from "../Cards/Card";
import Category from "../Category/Category";

function Home() {
  return (
    <div>
      <img src={hero} alt="" className="w-full" />
      <div className="relative w-full overflow-hidden bg-black py-2 font-semibold text-white">
        {/* Outer container: Overflow hidden */}
        {/* Inner container jismein animation class 'marquee-container' aur width: 200% applied hai */}
        <div className="flex marquee-container whitespace-nowrap">
          {/* Content Set 1 (Original) - Gap-16 ke liye margin set karna zaroori hai */}
          <div className="flex gap-16 px-8 items-center justify-start">
            <div className="font-serif text-orange-400 text-lg">एमकार्ट</div>
            <div className="text-xl text-blue-400">MKart</div>
            <div className="font-serif text-green-500 text-lg">ایم کارٹ</div>
            <div className="text-base text-gray-400">
              Your Shopping Destination
            </div>
            <div className="text-xl text-red-400">Best Price in India.</div>
          </div>

          {/* Content Set 2 (Duplicated for seamless loop) - Repeat the content exactly */}
          <div
            className="flex gap-16 px-8 items-center justify-start"
            aria-hidden="true"
          >
            <div className="font-serif text-orange-400 text-lg">एमकार्ट</div>
            <div className="text-xl text-blue-400">MKart</div>
            <div className="font-serif text-green-500 text-lg">ایم کارٹ</div>
            <div className="text-base text-gray-400">
              Your Shopping Destination
            </div>
            <div className="text-xl text-red-400">Best Price in India.</div>
          </div>
        </div>
      </div>
      <Offer />
      <Category />
      <Testimonial />
      <p>home page </p>
      {/* <Card item={item} /> */}
    </div>
  );
}

export default Home;
