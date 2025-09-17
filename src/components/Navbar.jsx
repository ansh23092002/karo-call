"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  const [joinOpen, setJoinOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full absolute z-20 bg-[#7B2F14] text-white shadow-md" role="navigation" aria-label="Main Navigation">
      <div className="flex justify-between items-center px-6 md:px-12">
        
        {/* Logo */}
        <Link href="/" className="flex items-center justify-around p-2">
          <img
            src="/image/logo.png"
            alt="Karo Call Services Logo"
            className="w-26 h-15"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg md:text-sm lg:text-lg font-semibold">
          <li>
            <Link href="/" className={pathname === "/" ? "text-yellow-300" : "hover:text-yellow-200"}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={pathname === "/about" ? "text-yellow-300" : "hover:text-yellow-200"}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className={pathname === "/services" ? "text-yellow-300" : "hover:text-yellow-200"}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/blog" className={pathname === "/blog" ? "text-yellow-300" : "hover:text-yellow-200"}>
              Blog
            </Link>
          </li>

          {/* Join Us Dropdown */}
          <li className="relative">
            <button
              className="flex items-center hover:text-yellow-200 font-semibold"
              onClick={() => setJoinOpen(!joinOpen)}
              aria-haspopup="true"
              aria-expanded={joinOpen ? "true" : "false"}
            >
              Join Us
              <IoMdArrowDropdown
                className={`ml-1 transition-transform duration-200 ${joinOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {joinOpen && (
              <ul className="absolute left-0 mt-2 w-50 bg-white text-gray-800 rounded shadow-lg z-50" role="menu" aria-label="Join Us Submenu">
                <li role="none">
                  <Link href="/join-us/career" role="menuitem" className={`block px-4 py-2 hover:bg-yellow-100 ${pathname === "/join-us/career" ? "bg-yellow-200" : ""}`} onClick={() => setJoinOpen(false)}>
                    Career
                  </Link>
                </li>
                <li role="none">
                  <Link href="/join-us/serviceProvider" role="menuitem" className={`block px-4 py-2 hover:bg-yellow-100 ${pathname === "/join-us/serviceProvider" ? "bg-yellow-200" : ""}`} onClick={() => setJoinOpen(false)}>
                    Service Provider
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/contact" className={pathname === "/contact" ? "text-yellow-300" : "hover:text-yellow-200"}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-white text-[#7B341E] font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition">
            Book A Service
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={open ? "true" : "false"}
        >
          {open ? <MdCancel size={28} /> : <CgMenuRightAlt size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#7B341E] shadow-lg" role="menu" aria-label="Mobile Navigation">
          <ul className="flex flex-col gap-4 px-6 py-6 text-lg font-semibold">
            <li role="none">
              <Link href="/" role="menuitem" onClick={() => setOpen(false)} className={pathname === "/" ? "text-yellow-300" : "hover:text-yellow-200"}>Home</Link>
            </li>
            <li role="none">
              <Link href="/about" role="menuitem" onClick={() => setOpen(false)} className={pathname === "/about" ? "text-yellow-300" : "hover:text-yellow-200"}>About Us</Link>
            </li>
            <li role="none">
              <Link href="/services" role="menuitem" onClick={() => setOpen(false)} className={pathname === "/services" ? "text-yellow-300" : "hover:text-yellow-200"}>Services</Link>
            </li>
            <li role="none">
              <Link href="/blog" role="menuitem" onClick={() => setOpen(false)} className={pathname === "/blog" ? "text-yellow-300" : "hover:text-yellow-200"}>Blog</Link>
            </li>

            {/* Join Us Dropdown Mobile */}
            <li className="relative" role="none">
              <button
                className="flex justify-between items-center w-full hover:text-yellow-200 font-semibold"
                onClick={() => setJoinOpen(!joinOpen)}
                aria-haspopup="true"
                aria-expanded={joinOpen ? "true" : "false"}
              >
                Join Us
                <IoMdArrowDropdown className={`ml-1 transition-transform duration-200 ${joinOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {joinOpen && (
                <ul className="flex flex-col ml-4 mt-2 gap-2 text-gray-200" role="menu" aria-label="Join Us Submenu">
                  <li role="none">
                    <Link href="/join-us/career" role="menuitem" onClick={() => { setJoinOpen(false); setOpen(false); }} className={pathname === "/join-us/career" ? "text-yellow-300" : "hover:text-yellow-200"}>Career</Link>
                  </li>
                  <li role="none">
                    <Link href="/join-us/service" role="menuitem" onClick={() => { setJoinOpen(false); setOpen(false); }} className={pathname === "/join-us/service" ? "text-yellow-300" : "hover:text-yellow-200"}>Service Provider</Link>
                  </li>
                </ul>
              )}
            </li>

            <li role="none">
              <Link href="/contact" role="menuitem" onClick={() => setOpen(false)} className={pathname === "/contact" ? "text-yellow-300" : "hover:text-yellow-200"}>Contact Us</Link>
            </li>
            <li role="none">
              <button className="bg-white text-[#7B341E] font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition">Book A Service</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
