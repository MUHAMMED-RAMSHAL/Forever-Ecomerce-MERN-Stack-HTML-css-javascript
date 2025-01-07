// eslint-disable-next-line no-unused-vars
import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32 " alt="" />
          <p className="w-full md:2/3 text-gray-600">
            Explore vibrant colors, timeless patterns, and the seasons hottest
            trends—crafted to make every moment special. Dont wait—shop now and
            redefine your style game!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="about">ABOUT US</Link></li>
            <li>DELIVERY</li>
            <li>PRIVACY & POLICY</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-semibold mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-9961666592</li>
            <li>contact@foreever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-sm py-5 text-center">
          Copyright 2024@ forever.com-All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
