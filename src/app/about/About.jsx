"use client";

import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { BiHappyBeaming } from "react-icons/bi";
import { about, aboutWhatdeliver } from "@/Data";

export default function AboutPage() {
  return (
    <div>
      {/* About Section */}
      <section className="py-20 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl shadow-sm">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent mb-6">
            About Us
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg md:text-xl max-w-xl mx-auto md:mx-0">
            <span className="font-semibold text-amber-600">Karo Call Services (KCS)</span> 
            is a trusted service provider specializing in professional installation, 
            repair, and sales services. With a strong commitment to 
            <span className="font-semibold text-amber-600"> quality</span> and 
            <span className="font-semibold text-amber-600"> customer satisfaction</span>, 
            our skilled team ensures reliable, efficient, and timely solutions tailored to your needs.
            <br /> <br />
            Whether it&apos;s setting up new equipment or fixing technical issues, 
            we deliver excellence every time. Serving with integrity and expertise, 
            we aim to be your <span className="underline decoration-blue-400">go-to partner</span> for all service needs.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/image/Banner_about.webp"
            alt="About Karo Call Services"
            width={500}
            height={350}
            priority
            className="rounded-2xl transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            What We Deliver
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-12 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ">
            {aboutWhatdeliver.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-2xl shadow-md bg-gradient-to-r from-orange-50  hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="h-20 w-20 flex items-center justify-center rounded-full bg-white mb-6 shadow-lg">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={64}
                    height={64}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg">{item.text}</h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{item.dec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          <div className="flex flex-col items-center">
            <FaCalendarAlt className="mb-4 text-orange-500" aria-hidden="true" />
            <p className="text-orange-500 text-sm">Years</p>
            <h3 className="text-4xl font-bold">2+</h3>
          </div>
          <div className="flex flex-col items-center">
            <GrUserWorker className="mb-4 text-orange-500" aria-hidden="true" />
            <p className="text-orange-500 text-sm">Handymen</p>
            <h3 className="text-4xl font-bold">101</h3>
          </div>
          <div className="flex flex-col items-center">
            <BiHappyBeaming className="mb-4 text-orange-500" aria-hidden="true" />
            <p className="text-orange-500 text-sm">Happy Clients</p>
            <h3 className="text-4xl font-bold">348+</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaLocationDot className="mb-4 text-orange-500" aria-hidden="true" />
            <p className="text-orange-500 text-sm">Pincodes</p>
            <h3 className="text-4xl font-bold">81</h3>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Goals */}
      <section className="min-h-screen p-6 bg-gradient-to-r from-orange-50 to-orange-100">
        {about.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 my-10 justify-around ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="h-50 w-50 lg:max-w:full">
              <Image
                src={service.img}
                alt={service.top}
                width={500}
                height={350}
                loading="lazy"
                className="mix-blend-multiply"
              />
            </div>
            <div className="sm:w-1/2 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{service.top}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
