import { KCS_Promises, services_data,Popular_Services } from "@/Data";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
    

      <section className="min-h-screen p-6 bg-gray-50">
        {services_data.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 my-10 ${
              //  Start with image RIGHT for first item
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={service.img}
                alt={service.top}
                width={500}
                height={350}
                className="rounded-lg shadow-md object-cover w-full h-[300px]"
              />
            </div>

            {/* Text */}
            <div className="w-full    p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {service.top}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {service.why.title}
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {service.why.list.map((item, i) => (
                  <li key={i}>{item.point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
        <section className="py-16 bg-white text-center">
           {/* Heading */}
           <h2 className="text-2xl md:text-3xl font-bold text-[#7B2F14] mb-2">
           KCS Promises
           </h2>
          
     
           {/* Divider line */}
           <div className="w-40 h-1 bg-gradient-to-r from-orange-400 to-orange-700 mx-auto my-6 rounded-full"></div>
     
           {/* Steps */}
           <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4  gap-8 max-w-6xl mx-auto mt-10 px-4">
             {KCS_Promises.map((step, index) => (
               <div
                 key={index}
                 className=" p-5 flex flex-col items-center justify-center"
               >
                 <img
                   src={step.img}
                   alt={step.title}
                   className="w-16 h-16 mb-4"
                 />
                 <p className=" px-4 py-2 rounded-md font-semibold text-sm mt-2">
                   {step.title}
                 </p>
               </div>
             ))}
           </div>
         </section>
        <section className="py-16 bg-white text-center">
           {/* Heading */}
           <h2 className="text-2xl md:text-3xl font-bold text-[#7B2F14] mb-2">
        Popular Services
           </h2>
          
     
           {/* Divider line */}
           <div className="w-40 h-1 bg-gradient-to-r from-orange-400 to-orange-700 mx-auto my-6 rounded-full"></div>
     
           {/* Steps */}
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-8 max-w-6xl mx-auto mt-10 px-4">
             {Popular_Services.map((step, index) => (
               <div
                 key={index}
                 className=" p-5 flex flex-col items-center justify-center"
               >
                 <img
                   src={step.img}
                   alt={step.title}
                   className="w-56 h-36 mb-4 rounded-xl"
                 />
                 <p className=" px-4 py-2 rounded-md font-semibold text-sm mt-2">
                   {step.title}
                 </p>
               </div>
             ))}
           </div>
         </section>
    </div>
  );
};

export default page;
