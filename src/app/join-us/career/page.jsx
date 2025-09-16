import React from "react";
import Link from "next/link";

const CareerPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
    

      {/* Join Our Team */}
      <section className="flex flex-col items-center py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#7B2F14] mb-8">
          Join Our Team
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="/image/Joinus.webp"
            alt="Join Us"
            className="w-full md:w-1/2 h-[350px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
          <p className="w-full md:w-1/2 text-lg leading-relaxed">
            At <span className="font-semibold text-amber-600">Karo Call Services</span>, we believe in building a team of passionate,
            skilled, and driven professionals who are ready to make a difference.  
            Whether you're a technician, customer support specialist, or admin
            expert, we offer a dynamic work environment, continuous learning
            opportunities, and room to grow.  
            <br />
            <br />
            If you're looking to be part of a company that values{" "}
            <span className="font-semibold">integrity, quality service, and teamwork</span> — we’d love to hear from you!
          </p>
        </div>
      </section>

      {/* New Openings */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-center font-bold text-3xl md:text-4xl text-gray-800 mb-12">
          New Openings
        </h2>
        <div className="max-w-3xl mx-auto bg-white border shadow-lg rounded-3xl p-8 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-700">
            Digital Marketing Executive
          </h3>
          <p><span className="font-medium">Location:</span> Raipur</p>
          <p><span className="font-medium">Category:</span> IT</p>
          <p><span className="font-medium">Job Type:</span> Full-time</p>
          <p><span className="font-medium">Job ID:</span> KCS1746681628160</p>
          <p><span className="font-medium">Description:</span> We are looking for a creative and strategic Digital Marketing Executive to join our growing team...</p>
          
          <div className="flex items-center gap-6 mt-4">
            <Link
              href="/career"
              scroll={true}
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              See More
            </Link>
            <button className="px-6 py-2 rounded-xl bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
