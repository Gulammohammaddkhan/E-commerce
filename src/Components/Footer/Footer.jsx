import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { TfiInstagram } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Cards from "../../assets/Images/Cards.avif";

function Footer() {
  return (
    <div className="bg-[#112255]">
      <div></div>
      <div className="flex  justify-around">
        <div>
          <img src={Cards} alt="" />
        </div>
        <p className="text-[#6074b0] text-sm font-semibold">© Mkart 2025</p>
        <div className="flex gap-4 text-[#6074b0]">
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
