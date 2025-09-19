"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PiFlagBannerFold } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showCallToAction, setShowCallToAction] = useState(false);

  const menuItems = [
    { href: "/admin/dashboard", label: "Home", icon: <FaHome size={20} /> },
    { href: "/admin/dashboard/testimonial", label: "Testimonial", icon: <GoCodeReview size={20} /> },
    { href: "/admin/dashboard/banner", label: "Banner", icon: <PiFlagBannerFold size={20} /> },
    { 
      label: "Call to Action", 
      icon: <FaAngleDoubleDown size={20} />,
      subItems: [
        { href: "/admin/dashboard/call-to-action/general-enquiry", label: "General Enquiry" },
        { href: "/admin/dashboard/call-to-action/job-request", label: "Job Request" },
        { href: "/admin/dashboard/call-to-action/service-provider", label: "Service Provider" },
        { href: "/admin/dashboard/call-to-action/service-booking", label: "Service Booking" },
      ]
    },
    { href: "/admin/dashboard/career-page", label: "Career Page", icon: <GrNotes size={20} /> },
  ];

  return (
    <aside
      className={`h-screen bg-[#5e0304] text-white flex flex-col justify-between transition-all duration-200 ${
        collapsed ? "w-20" : "w-64"
      }`}
      aria-label="Sidebar navigation"
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        {!collapsed && <h2 className="text-xl font-semibold">Karo Call Services</h2>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="p-2 rounded hover:bg-[#7a1415]"
        >
          <BsReverseLayoutTextSidebarReverse size={20} />
        </button>
      </div>

      {/* Menu */}
      <ul className="flex-1 flex flex-col mt-4 space-y-2">
        {menuItems.map((item) => (
          <li key={item.label}>
            {!item.subItems ? (
              <Link
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 hover:bg-[#7a1415] rounded transition"
                aria-label={item.label}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </Link>
            ) : (
              <div>
                <button
                  onClick={() => setShowCallToAction(!showCallToAction)}
                  className="flex items-center justify-between w-full px-4 py-2 hover:bg-[#7a1415] rounded transition"
                  aria-label="Toggle Call to Action menu"
                >
                  <span className="flex items-center gap-3">
                    {item.icon}
                    {!collapsed && <span>{item.label}</span>}
                  </span>
                  {!collapsed && (showCallToAction ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />)}
                </button>
                {showCallToAction && !collapsed && (
                  <ul className="ml-10 mt-2 space-y-1 text-sm">
                    {item.subItems.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="block px-2 py-1 hover:underline"
                          aria-label={sub.label}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Logout button */}
      <div className="p-4">
        <button
          aria-label="Logout"
          className="w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 shadow transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
