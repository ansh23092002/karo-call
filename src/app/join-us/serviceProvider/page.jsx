"use client";
import React from "react";
import { useState } from "react";

const page = () => {
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
    <div>
      <div>
        
        <div>
          <h1>BECOME OUR PARTNER</h1>
          <p>
            Collaborate with Karo Call Services and be part of a growing network
            committed to quality, trust, and excellence. As our partner, you'll
            gain access to new opportunities, resources, and a platform to
            expand your reach while delivering outstanding services to our
            customers.
          </p>
          <div className="flex  gap-4">
            <button>book a Service</button>
            <button>Join us</button>
          </div>
        </div>
        <div>
          <img src="/image/bg-joiunus2.jpeg
          " alt="" />
        </div>
      </div>

      <div className="min-h-screen  flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-slate-50 rounded-lg p-8   shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row - First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-200 focus:border-amber-800 focus:ring-amber-800"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-700"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-200 focus:border-amber-800 focus:ring-amber-800"
                />
              </div>
            </div>

            {/* Second Row - Email and Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-200 focus:border-amber-800 focus:ring-amber-800"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="mobile"
                  className="text-sm font-medium text-gray-700"
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Your Mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-200 focus:border-amber-800 focus:ring-amber-800"
                />
              </div>
            </div>

            {/* Third Row - Pincode and State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="pincode"
                  className="text-sm font-medium text-gray-700"
                >
                  Pincode <span className="text-red-500">*</span>
                </label>
                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  placeholder="Your Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-200 focus:border-amber-800 focus:ring-amber-800"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="state"
                  className="text-sm font-medium text-gray-700"
                >
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-200 focus:border-amber-800 focus:ring-amber-800"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-amber-800 hover:bg-amber-900 text-white px-12 py-3 text-base font-medium rounded-md"
              >
                Join Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
