"use client";
import React, { useState } from "react";

const ServicesProvider = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    pincode: "",
    state: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 py-16 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-amber-800">
            Become Our Partner
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Collaborate with{" "}
            <span className="font-semibold text-amber-900">
              Karo Call Services
            </span>{" "}
            and be part of a growing network committed to{" "}
            <span className="font-medium">quality, trust, and excellence</span>.
            Gain access to new opportunities, resources, and a platform to grow
            while delivering outstanding services to our customers.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-amber-800 text-white font-semibold shadow-md hover:bg-amber-900 transition duration-300">
              Book a Service
            </button>
            <button className="px-6 py-3 rounded-lg border border-amber-800 text-amber-800 font-semibold hover:bg-amber-50 transition duration-300">
              Join Us
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/image/bg-joiunus2.webp"
            alt="Join Us"
            className="rounded-3xl shadow-lg object-cover w-full max-w-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8">
            Join Our Network
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 p-2 focus:ring-amber-800 focus:border-amber-800 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 p-2 focus:ring-amber-800 focus:border-amber-800 shadow-sm"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 p-2 focus:ring-amber-800 focus:border-amber-800 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="+91 9876543210"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 p-2 focus:ring-amber-800 focus:border-amber-800 shadow-sm"
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pincode <span className="text-red-500">*</span>
                </label>
                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  placeholder="492001"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 p-2 focus:ring-amber-800 focus:border-amber-800 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="Chhattisgarh"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 p-2 focus:ring-amber-800 focus:border-amber-800 shadow-sm"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="px-10 py-3 bg-amber-800 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-amber-900 hover:scale-105 transition-all duration-300"
              >
                Join Us
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ServicesProvider;
