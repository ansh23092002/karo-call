"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 w-full" role="contentinfo">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Left - Logo & About */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/image/logo.png"
            alt="Karo Call Services Logo"
            className="w-20 mb-4"
          />
          <p className="text-gray-300 leading-relaxed max-w-sm">
            We specialize in professional home services designed to make your
            life easier. From electrical work and repairs to car wash and
            general maintenance, our expert team delivers fast, reliable, and
            affordable solutions.
          </p>
        </div>

        {/* Middle - Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <MdPhone aria-hidden="true" className="text-orange-500" />
            <a
              href="tel:18008892771"
              aria-label="Call Karo Call Services at 18008892771"
              className="hover:text-yellow-300"
            >
              18008892771
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <MdEmail aria-hidden="true" className="text-orange-500" />
            <a
              href="mailto:contact@karocallservices.com"
              aria-label="Email Karo Call Services at contact@karocallservices.com"
              className="hover:text-yellow-300"
            >
              contact@karocallservices.com
            </a>
          </p>
        </div>

        {/* Right - Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-300">
            <a
              href="#"
              aria-label="Follow Karo Call Services on Facebook"
              className="flex items-center gap-2 hover:text-blue-500"
            >
              <FaFacebook aria-hidden="true" /> Facebook
            </a>
            <a
              href="#"
              aria-label="Follow Karo Call Services on Instagram"
              className="flex items-center gap-2 hover:text-pink-500"
            >
              <FaInstagram aria-hidden="true" /> Instagram
            </a>
            <a
              href="#"
              aria-label="Follow Karo Call Services on YouTube"
              className="flex items-center gap-2 hover:text-red-500"
            >
              <FaYoutube aria-hidden="true" /> YouTube
            </a>
            <a
              href="#"
              aria-label="Follow Karo Call Services on LinkedIn"
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Karo Call Services. All rights reserved.
      </div>
    </footer>
  );
}
