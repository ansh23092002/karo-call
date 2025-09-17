 'use client'
import React from 'react';

import Image from "next/image";
import { FaUser, FaRegCommentDots, FaCalendarAlt } from "react-icons/fa";


const BLog = () => {
 
  return (
    <div className='bg-gradient-to-r from-orange-50 to-orange-100 pt-10'>
      <section className='h-screen w-full relative'>
        <img src="/image/Banner_blog.webp" alt="blog banner" className='w-full h-full object-cover' />
      </section>

      <section className="min-h-screen flex justify-center items-center p-6 px-15ṇ ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">

        {/* Card 1 */}
        <div className="rounded-xl overflow-hidden shadow-md bg-white lg:w-full  md:w-70  sm:w-[400px]">
          <Image
            src="/image/blog/KCS_blog.webp"
            alt="Tools"
            width={400}
            height={250}
            className="object-cover w-full h-70"
          />
          <div className="p-4">
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
              <span className="flex items-center gap-1">
                <FaUser /> Admin
              </span>
              <span className="flex items-center gap-1">
                <FaRegCommentDots /> 0
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> 13/05/2025
              </span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Top 5 Home Repair Signs You Shouldn’t Ignore — And Why a Pro is the Answer
            </h3>
            <a
              href="#"
              className="text-orange-600 font-medium hover:underline flex items-center gap-1"
            >
              Read more →
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl overflow-hidden shadow-md bg-white lg:w-full  md:w-70 sm:w-[400px]">
          <Image
            src="/image/blog/KCS_blog2.webp"
            alt="Electrician"
            width={400}
            height={250}
            className="object-cover w-full h-70"
          />
          <div className="p-4">
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
              <span className="flex items-center gap-1">
                <FaUser /> Admin
              </span>
              <span className="flex items-center gap-1">
                <FaRegCommentDots /> 0
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> 13/05/2025
              </span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Why Every Home Needs a Trusted Home Care Service Provider
            </h3>
            <a
              href="#"
              className="text-orange-600 font-medium hover:underline flex items-center gap-1"
            >
              Read more →
            </a>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}

export default BLog
