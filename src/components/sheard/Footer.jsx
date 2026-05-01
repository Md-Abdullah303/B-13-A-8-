import React from "react";
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="w-[90%] md:container mx-auto py-8 px-3">
        {/* top text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="space-y-3">
            <h1 className="text-xl font-bold">Contact info</h1>
            <ul className="space-y-2">
              <li className="flex items-center gap-1.5 text-gray-400 hover:text-gray-300 cursor-pointer">
                <IoCall /> +63 2542 23965
              </li>
              <li className="flex items-center gap-1.5 text-gray-400 hover:text-gray-300 cursor-pointer">
                <FaGooglePlusG /> text@gmail.com
              </li>
              <li className="flex items-center gap-1.5 text-gray-400 hover:text-gray-300 cursor-pointer">
                <IoCall /> +880 017 6327 1340
              </li>
              <li className="flex items-center gap-1.5 text-gray-400 hover:text-gray-300 cursor-pointer">
                <FaGooglePlusG /> test2@gmail.com
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h1 className="text-xl font-bold">Social links</h1>
            <ul className="space-y-2">
              <li className="flex items-center gap-1.5 text-gray-400 hover:text-gray-300 cursor-pointer">
                <FaFacebook /> Facebook
              </li>
              <li className="flex items-center gap-1.5 text-gray-400 hover:text-gray-300 cursor-pointer">
                <FaYoutube /> Youtube
              </li>
              <li className="flex items-center gap-1.5 text-gray-400 hover:text-gray-300 cursor-pointer">
                <FaInstagram /> Instagram
              </li>
              <li className="flex items-center gap-1.5 text-gray-400 hover:text-gray-300 cursor-pointer">
                <FaTwitter /> Twitter
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h1 className="text-xl font-bold">About section</h1>
            <p className="text-gray-400">
              We are a trusted online Qurbani marketplace dedicated to providing
              healthy, farm-raised animals for your sacred Qurbani. Our mission
              is to make the process easy, transparent, and reliable for
              everyone. 
            </p>
          </div>
        </div>
        <hr  className="my-4 md:my-8 text-gray-400"/>

        {/* button text */}
        <div className="flex justify-center items-center">
            <p className="text-gray-400 text-xs">&copy; All rights reserved 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
