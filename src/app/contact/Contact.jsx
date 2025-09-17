'use client'
import React from 'react'
import Image from "next/image";

const Contact = () => {
  return (
    <div className='bg-gradient-to-r from-orange-50 to-orange-100'>
      {/* Banner */}
      <section className="relative h-[50vh] md:h-[60vh] w-full" aria-label="Contact Banner Section">
        <Image
          src="/image/Banner_contactUs.webp"
          alt="Contact Banner"
          width={1920}
          height={600}
          className="w-full h-full object-cover"
          priority={true}
          aria-label="Contact Banner Image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form */}
  <div className="flex flex-col items-center justify-center py-16 px-4" aria-label="Contact Form Section">
        <h2 className="font-bold text-3xl mb-3 text-[#7B2F14] text-center">
          Have a Query? Get in Touch!
        </h2>
        <h3 className="font-semibold text-lg mb-10 text-gray-700 text-center">
          Toll Free: <span className="text-blue-700">1800 889 2771</span>
        </h3>

        <form className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              className="bg-gray-100 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              className="bg-gray-100 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
              required
            />
          </div>

          {/* Mobile */}
          <div className="flex flex-col">
            <label htmlFor="mobile" className="text-sm font-medium text-gray-700 mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Your mobile number"
              className="bg-gray-100 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
              required
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Your subject"
              className="bg-gray-100 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#7B2F14] hover:bg-[#A4451F] text-white font-semibold px-10 py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              aria-label="Submit Contact Form"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
