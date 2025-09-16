"use client";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaShieldAlt, FaSmile } from "react-icons/fa"; 

import Carousel from "@/components/Carousel";
import { features, review, services, steps } from "@/Data";
import dynamic from "next/dynamic";
import Image from "next/image";


const Lottie = dynamic(() => import("lottie-react"), { ssr: false });



export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <Carousel />
      </section>

      {/* Features Section */}
      <section className="bg-[#7B2F14] text-white py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center px-6">
          {/* Feature 1 */}
          <div className="flex flex-col items-center justify-center p-4">
            <Lottie
              loop
              autoplay
                  path="/animation/services.json"  
              className="w-12 h-12"
            />
            <p className="font-semibold mt-2">Same Day Services</p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center justify-center p-4">
            <FaShieldAlt className="text-3xl mb-2" />
            <p className="font-semibold">Verified Handyman</p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center justify-center p-4">
            <Lottie
              loop
              autoplay
              path="/animation/Insured-Work.json"
              className="w-12 h-12"
            />
            <p className="font-semibold">Insured Work</p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center justify-center p-4">
            <FaSmile className="text-3xl mb-2" />
            <p className="font-semibold">Satisfaction Guaranteed</p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-[#A4451F] uppercase">
            Why Us?
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-2">
            Your Trusted Partner for Quality Home Services
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full px-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-6">
              <Image
                src={feature.img}
                alt={feature.title}
                width={160}
                height={96}
                sizes="(max-width:768px) 100vw, 160px"
                className="w-32 h-24 md:w-40 md:h-28 rounded-lg object-cover shadow-md"
                loading="lazy"
              />
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

      {/* Services Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#7B2F14] uppercase">
            Karo Call Services
          </h1>
          <p className="text-gray-700 mt-2">
            From Repairing to Electrical, We’re Here to Help You Maintain Your
            Home with Ease and Expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-md p-8 text-center border hover:shadow-xl transition"
            >
              <div className="bg-[#7B2F14] text-white w-16 h-16 flex items-center justify-center rounded-md mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-[#7B2F14] font-semibold hover:underline flex items-center justify-center gap-1"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="relative h-screen w-screen">
        <Image
          src="/image/bg-review.webp"
          alt="Customer Reviews Background"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="w-screen h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40">
          <h2 className="text-4xl font-bold text-white my-2">
            Customer Reviews
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            What our customers say...
          </p>
          <div className="relative w-screen overflow-hidden">
            <div className="flex animate-marquee space-x-8">
              {[...review, ...review].map((data, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-white shadow-lg rounded-2xl p-6 text-center"
                >
                  <Image
                    src={data.img}
                    alt={data.name}
                    width={80}
                    height={80}
                    sizes="80px"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold">{data.name}</h3>
                  <p className="text-gray-600 mt-2">{data.des}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#7B2F14] mb-2">
          How does it work
        </h2>
        <p className="text-gray-800 font-semibold text-lg">
          Comprehensive Home Care & Repair Services – Reliable, Fast & Affordable!
        </p>
        <div className="w-40 h-1 bg-gradient-to-r from-orange-400 to-orange-700 mx-auto my-6 rounded-full"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto mt-10 px-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center justify-center hover:shadow-lg transition"
            >
              <Image
                src={step.img}
                alt={step.title}
                width={64}
                height={64}
                sizes="64px"
                className="w-16 h-16 mb-4"
                loading="lazy"
              />
              <p className="font-semibold text-sm mt-2">{step.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Book a Service */}
      <section className="w-full bg-gray-50 py-12">
        <div className="w-full px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book a Service</h2>
            <p className="text-gray-600 italic mt-2">“Get a Free Estimate Today!”</p>
            <div className="mt-6 space-y-6">
              <div className="flex items-center p-6 bg-blue-50 rounded-md shadow-sm">
                <FaPhoneAlt className="text-2xl text-brown-700 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Call Us Now</h3>
                  <p className="text-gray-700">18008892771</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-blue-50 rounded-md shadow-sm">
                <MdEmail className="text-3xl text-brown-700 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Mail Us Now</h3>
                  <p className="text-gray-700">contact@karocallservices.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-md shadow-md">
            <form className="space-y-4">
              <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none">
                <option>Select Service</option>
                <option>CCTV Camera</option>
                <option>Car Washing</option>
                <option>Electrician</option>
                <option>Laptop & Monitor</option>
                <option>Washing Machine</option>
                <option>Fridge Repair Services</option>
                <option>Plumbing Services</option>
                <option>AC Maintenance</option>
              </select>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <textarea
                placeholder="Address"
                rows={3}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              ></textarea>
              <p className="text-sm text-gray-600">
                By clicking the 'Book Now' button, you agree to our{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms & Conditions
                </a>
                .
              </p>
              <button
                type="submit"
                className="w-full bg-orange-950 hover:bg-brown-800 text-white py-2 rounded-md font-semibold transition"
              >
                Book Now
              </button>
              <div className="text-center mt-2 text-gray-700">
                <p>or</p>
                <p>Call Now: 18008892771</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
