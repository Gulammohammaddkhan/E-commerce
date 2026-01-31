import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { TfiInstagram } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Cards from "../../assets/Images/Cards.avif";

function Footer() {
  return (
    <div className="bg-[#112255] mt-8">
      <div className="flex flex-col sm:flex sm:flex-row gap-4 justify-between pt-8 pb-14 px-10 text-[#8090c0] border-b-1 border-b-[#6074b0]">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold pb-2 text-[#a0acd0]">Menu</h2>
          <div>Home</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold pb-2 text-[#a0acd0]">
            Quick Links
          </h2>
          <div>Privacy Policy</div>
          <div>Shipping Pokicy</div>
          <div>Returns & Refund</div>
          <div>Term & Conditions</div>
        </div>
        <div>
          <h2 className="text-xl font-semibold pb-2 text-[#a0acd0]">Store</h2>
          <div>M-7, Kirti Nagar, Mumbai</div>
          <div>Zip Code: 401107</div>
          <div>Phone:-+917977199080</div>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex sm:flex-row justify-around px-2 py-4">
        <div>
          <img src={Cards} alt="" />
        </div>
        <p className="text-[#8090c0] text-sm font-semibold">© Mkart 2025</p>
        <div className="flex gap-4 text-[#8090c0]">
          <div>
            <GrFacebookOption />
          </div>
          <div>
            <TfiInstagram />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaLinkedin />
          </div>
          <div>
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
