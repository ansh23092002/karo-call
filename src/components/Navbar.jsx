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
    <nav className="w-full absolute z-20 bg-[#7B2F14] text-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-12 ">
        {/* Logo */}
        <Link href="/" className="flex items-center ga justify-around p-2">
          <img
            src="/image/logo.png" // ✅ replace with your logo file in public/
            alt="Logo"
            className="w-26 h-15"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg md:text-sm lg:text-lg font-semibold">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-yellow-300" : "hover:text-yellow-200"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathname === "/about"
                  ? "text-yellow-300"
                  : "hover:text-yellow-200"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`${
                pathname === "/services"
                  ? "text-yellow-300"
                  : "hover:text-yellow-200"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`${
                pathname === "/blog"
                  ? "text-yellow-300"
                  : "hover:text-yellow-200"
              }`}
            >
              Blog
            </Link>
          </li>
            <li className="relative cursor-pointer">
      {/* Trigger */}
      <div
        className="flex items-center hover:text-yellow-200"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`${
            pathname.startsWith("/join-us") ? "text-yellow-300" : ""
          }`}
        >
          Join Us
        </span>
        <IoMdArrowDropdown
          className={`ml-1 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      {open && (
        <ul className="absolute left-0 mt-2 w-50 bg-white text-gray-800 rounded shadow-lg z-50">
          <li
            className={`px-4 py-2 hover:bg-yellow-100    ${
              pathname === "/join-us/career" ? "bg-yellow-200" : ""
            }`}
          >
            <Link href="/join-us/career" onClick={() => setOpen(false)}>
              Career
            </Link>
          </li>
          <li
            className={`px-4 py-2 hover:bg-yellow-100 ${
              pathname === "/join-us/serviceProvider" ? "bg-yellow-200" : ""
            }`}
          >
            <Link href="/join-us/serviceProvider" onClick={() => setOpen(false)}>
             Service Provider
            </Link>
          </li>
        </ul>
      )}
    </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact"
                  ? "text-yellow-300"
                  : "hover:text-yellow-200"
              }`}
            >
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
        <button className="min-md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <MdCancel size={28} /> : <CgMenuRightAlt size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#7B341E] shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-6 text-lg font-semibold">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`${
                  pathname === "/" ? "text-yellow-300" : "hover:text-yellow-200"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={`${
                  pathname === "/about"
                    ? "text-yellow-300"
                    : "hover:text-yellow-200"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className={`${
                  pathname === "/services"
                    ? "text-yellow-300"
                    : "hover:text-yellow-200"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => setOpen(false)}
                className={`${
                  pathname === "/blog"
                    ? "text-yellow-300"
                    : "hover:text-yellow-200"
                }`}
              >
                Blog
              </Link>
            </li>

            <li className="cursor-pointer">
              <div
                className="flex justify-between items-center hover:text-yellow-200"
                onClick={() => setJoinOpen(!joinOpen)}
              >
                <span
                  className={`${
                    pathname.startsWith("/join-us") ? "text-yellow-300" : ""
                  }`}
                >
                  Join Us
                </span>
                <IoMdArrowDropdown
                  className={`ml-1 transition-transform duration-200 ${
                    joinOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown for Mobile */}
              {joinOpen && (
                <ul className="flex flex-col ml-4 mt-2 gap-2 text-gray-200">
                  <li>
                    <Link
                      href="/join-us/career"
                      onClick={() => {
                        setJoinOpen(false);
                        setOpen(false); // closes mobile menu
                      }}
                      className={`${
                        pathname === "/join-us/career"
                          ? "text-yellow-300"
                          : "hover:text-yellow-200"
                      }`}
                    >
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/join-us/service"
                      onClick={() => {
                        setJoinOpen(false);
                        setOpen(false);
                      }}
                      className={`${
                        pathname === "/join-us/service"
                          ? "text-yellow-300"
                          : "hover:text-yellow-200"
                      }`}
                    >
                      Service Provider
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={`${
                  pathname === "/contact"
                    ? "text-yellow-300"
                    : "hover:text-yellow-200"
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button className="bg-white text-[#7B341E] font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition">
                Book A Service
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
