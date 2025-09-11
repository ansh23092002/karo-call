"use client"

import Carousel from '@/components/Carousel';
import {  FaShieldAlt, FaTools, FaSmile } from "react-icons/fa";
import { features,services } from '@/Data';
import Lottie from 'lottie-react';



export default function Home() {
  return (
    <section className="">
      <Carousel/>
      <div>
          {/* all Feature */}
         <div className="bg-[#7B2F14] text-white py-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/30 text-center">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center justify-center p-4">
          {/* <FaTruck className="text-2xl mb-2" /> */}
        <Lottie path="/animation/services.json" className="w-20 h-20" />
          <p className="font-semibold">Same Day Services</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center justify-center p-4">
          <FaShieldAlt className="text-2xl mb-2" />
          <p className="font-semibold">Verified Handyman</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center justify-center p-4">
          <FaTools className="text-2xl mb-2" />
          <p className="font-semibold">Insured Work</p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center justify-center p-4">
          <FaSmile className="text-2xl mb-2" />
          <p className="font-semibold">Satisfaction Guaranteed</p>
        </div>

      </div>
    </div>

     <section className="py-16 px-6 md:px-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-xl font-bold text-[#A4451F] uppercase">Why Us?</h2>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mt-2">
          Your Trusted Partner for Quality Home Services
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Image */}
            <img
              src={feature.img}
              alt={feature.title}
              className="w-32 h-24 md:w-40 md:h-28 rounded-lg object-cover shadow-md"
            />
            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold text-[#A4451F]">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-2">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16 px-6 md:px-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#7B2F14] uppercase">
          Karo Call Services
        </h2>
        <p className="text-gray-700 mt-2">
          From Repairing to Electrical, We’re Here to Help You Maintain Your Home with Ease and Expertise.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-md p-8 text-center border hover:shadow-xl transition"
          >
            {/* Icon */}
            <div className="bg-[#7B2F14] text-white w-16 h-16 flex items-center justify-center rounded-md mx-auto mb-6">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-sm">{service.description}</p>

            {/* Learn More */}
            <a
              href={service.link}
              className="text-[#7B2F14] font-semibold hover:underline flex items-center justify-center gap-1"
            >
              Learn More →
            </a>

            {/* Bottom Border */}
            <div className="mt-6 border-t border-gray-300"></div>
          </div>
        ))}
      </div>
    </section>
 
      </div>
    </section>
  );
}
