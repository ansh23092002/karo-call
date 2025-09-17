"use client";

import {  FaYoutube } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import dynamic from "next/dynamic";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { review, services} from "@/Data";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  return (
    <>
  
      <div>
        {/* Hero / Carousel */}
        <section aria-label="Hero Section">
          <Carousel />
        </section>

        {/* Features Section */}
        <section aria-label="Key Features" className="bg-[#7B2F14] text-white py-6">
          <div className="w-full px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center justify-center p-4">
              <Lottie
                loop
                autoplay
                path="/animation/services.json"
                className="w-10 h-10"
                aria-hidden="true"
              />
              <p className="font-semibold">Same Day Services</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center justify-center p-4">
              <MdPhone className="text-2xl mb-2" aria-hidden="true" />
              <p className="font-semibold">Verified Handyman</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center justify-center p-4">
              <Lottie
                loop
                autoplay
                path="/animation/Insured-Work.json"
                className="w-10 h-10"
                aria-hidden="true"
              />
              <p className="font-semibold">Insured Work</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center justify-center p-4">
              <FaYoutube className="text-2xl mb-2" aria-hidden="true" />
              <p className="font-semibold">Satisfaction Guaranteed</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section aria-label="Our Services" className="py-16 px-6 md:px-16 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#7B2F14] uppercase">
              Karo Call Services
            </h2>
            <p className="text-gray-700 mt-2">
              From Repairing to Electrical, We’re Here to Help You Maintain Your Home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-6">
            {services.map((service, index) => (
              <article key={index} className="bg-white shadow-lg rounded-md p-8 text-center border hover:shadow-xl transition">
                <div className="bg-[#7B2F14] text-white w-16 h-16 flex items-center justify-center rounded-md mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
                <a href={service.link} className="text-[#7B2F14] font-semibold hover:underline flex items-center justify-center gap-1">
                  Learn More →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Customer Reviews */}
        <section aria-label="Customer Reviews" className="relative h-screen  flex justify-center items-center">
          <Image
            src="/image/bg-review.webp"
            alt="Customer Reviews Background"
            width={1200}
            height={1080}
            className=" h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40">
            <h2 className="text-4xl font-bold text-white my-2">CUSTOMER REVIEWS</h2>
            <p className="text-lg text-gray-200 mb-8">What our customers say...</p>

            <div className="relative w-full overflow-hidden">
              <div className="flex animate-marquee space-x-8">
                {[...review, ...review].map((data, index) => (
                  <article
                    key={index}
                    className="flex-shrink-0 w-80 bg-white shadow-lg rounded-2xl p-6 text-center"
                  >
                    <Image
                      src={data.img}
                      alt={data.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      loading="lazy"
                    />
                    <h3 className="text-xl font-semibold">{data.name}</h3>
                    <p className="text-gray-600 mt-2">{data.des}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
<section className="w-full bg-gradient-to-r from-orange-50 to-orange-100 py-12">
  <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
    
    {/* Left Side - Info */}
    <div className="flex flex-col justify-center">
      <h4 className="text-3xl font-bold text-[#7B2F14] mb-4">Book a Service</h4>
      <p className="text-gray-700 italic mb-6">
        “Get a Free Estimate Today! Let our experts take care of your home.”
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <MdPhone className="text-orange-500 text-3xl" aria-hidden="true" />
          <div>
            <h5 className="font-semibold text-gray-800">Call Us Now</h5>
            <p className="text-gray-600">1800 889 2771</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <MdEmail className="text-orange-500 text-3xl" aria-hidden="true" />
          <div>
            <h5 className="font-semibold text-gray-800">Email Us</h5>
            <p className="text-gray-600">contact@karocallservices.com</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Side - Form */}
    <div className="bg-white p-8 rounded-2xl shadow-xl">
      <form className="space-y-6">
        {/* Service Select */}
        <div className="relative">
          <select
            className="w-full border border-gray-300 rounded-lg p-4 bg-transparent focus:ring-2 focus:ring-orange-400 outline-none appearance-none"
            aria-label="Select Service"
          >
            <option value="">Select Service</option>
            <option value="cctv">CCTV Camera</option>
            <option value="car">Car Washing</option>
            <option value="electrician">Electrician</option>
            <option value="laptop">Laptop & Monitor</option>
            <option value="washing">Washing Machine</option>
            <option value="fridge">Fridge Repair Services</option>
            <option value="plumbing">Plumbing Services</option>
            <option value="ac">AC Maintenance</option>
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            ▼
          </span>
        </div>

        {/* Name */}
        <div className="relative">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-4 peer focus:ring-2 focus:ring-orange-400 outline-none"
            aria-label="Your Name"
          />
        </div>

        {/* Contact */}
        <div className="relative">
          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full border border-gray-300 rounded-lg p-4 peer focus:ring-2 focus:ring-orange-400 outline-none"
            aria-label="Contact Number"
          />
        </div>

        {/* Address */}
        <div className="relative">
          <textarea
            placeholder="Address"
            rows={3}
            className="w-full border border-gray-300 rounded-lg p-4 peer focus:ring-2 focus:ring-orange-400 outline-none"
            aria-label="Address"
          ></textarea>
        </div>

        {/* Terms */}
        <p className="text-sm text-gray-500">
          By clicking <span className="font-semibold">Book Now</span>, you agree to our{" "}
          <a href="#" className="text-orange-600 underline">
            Terms & Conditions
          </a>
          .
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold text-lg hover:scale-105 transform transition duration-300 shadow-lg"
        >
          Book Now
        </button>
      </form>
    </div>
  </div>
</section>

          
      </div>

    </>
  );
}
