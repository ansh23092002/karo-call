"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 w-full ">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Left - Logo & About */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/image/logo.png" alt="Logo" className="w-20 mb-4" />
          <p className="text-gray-300  leading-relaxed max-w-sm">
            We specialize in professional home services designed to make your
            life easier. From electrical work and repairs to car wash and
            general maintenance, our expert team delivers fast, reliable, and
            affordable solutions.
          </p>
        </div>

        {/* Middle - Contact */}
        <div className="flex flex-col  items-center">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <MdPhone className="text-orange-500" />{" "}
            <a href="tel:18008892771" className="hover:text-yellow-300">
              18008892771
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <MdEmail className="text-orange-500" />{" "}
            <a
              href="mailto:contact@karocallservices.com"
              className="hover:text-yellow-300"
            >
              contact@karocallservices.com
            </a>
          </p>
        </div>

        {/* Right - Social Media */}
        <div className="flex flex-col  items-center">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-300">
            <a href="#" className="flex items-center gap-2 hover:text-blue-500">
              <FaFacebook /> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-pink-500">
              <FaInstagram /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-red-500">
              <FaYoutube /> Youtube
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-400">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kare Call Services. All rights reserved.
      </div>
    </footer>
  );
}
