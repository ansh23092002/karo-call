import React from "react";
import Link from "next/link";
import Image from "next/image";

const CareerPage = () => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 ">
    

      {/* Join Our Team */}
      <section className="flex flex-col items-center py-16 px-6 md:px-20" aria-label="Join Our Team Section">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7B2F14] mb-8">
          Careers at Karo Call Services
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#7B2F14] mb-8">
          Join Our Team
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <Image
            src="/image/Joinus.webp"
            alt="Join Us at Karo Call Services"
            width={700}
            height={350}
            className="w-full md:w-1/2 h-[350px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            priority={true}
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
  <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-orange-50 to-orange-100" aria-label="New Job Openings Section">
        <header>
          <h2 className="text-center font-bold text-3xl md:text-4xl text-gray-800 mb-12">
            New Openings
          </h2>
        </header>
  <div className="max-w-3xl mx-auto bg-white border shadow-lg rounded-3xl p-8 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300" itemScope itemType="https://schema.org/JobPosting">
          <h3 className="text-xl font-semibold text-blue-700" itemProp="title">
            Digital Marketing Executive
          </h3>
          <p><span className="font-medium">Location:</span> <span itemProp="jobLocation">Raipur</span></p>
          <p><span className="font-medium">Category:</span> <span itemProp="occupationalCategory">IT</span></p>
          <p><span className="font-medium">Job Type:</span> <span itemProp="employmentType">Full-time</span></p>
          <p><span className="font-medium">Job ID:</span> <span itemProp="identifier">KCS1746681628160</span></p>
          <p><span className="font-medium">Description:</span> <span itemProp="description">We are looking for a creative and strategic Digital Marketing Executive to join our growing team...</span></p>
          
          <div className="flex items-center gap-6 mt-4">
            <Link
              href="/career"
              scroll={true}
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              See More
            </Link>
            <button className="px-6 py-2 rounded-xl bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-300" aria-label="Apply for Digital Marketing Executive">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
