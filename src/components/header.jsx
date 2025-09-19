"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [title, setTitle] = useState("");

  useEffect(() => {
    // map routes to titles
    const titles = {
      "/admin/dashboard": "Dashboard",
      "/admin/dashboard/testimonial": "Testimonials",
      "/admin/dashboard/banner": "Banner",
      "/admin/dashboard/call-to-action": "Call to Action",
      "/admin/dashboard/career-page": "Career Page",
      "/admin/dashboard/blog": "Blog",
    };

    // set title if exists, 
    setTitle(titles[pathname] );
    console.log("Current Pathname:", pathname);
  }, [pathname]);

  return (
    <header className="bg-[#6b0405] text-white p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;
