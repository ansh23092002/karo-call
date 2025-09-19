"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    router.push("/admin/dashbord");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Banner */}
      <div className="order-2 lg:order-1 w-full lg:w-1/2 bg-gradient-to-br from-green-900 to-green-700 text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl lg:text-4xl font-extrabold leading-snug mb-6 text-center lg:text-left">
          Welcome to the <br /> KCS Administration, <br /> Portal
        </h1>
      </div>

      {/* Right Side - Login Form */}
      <div className="order-1 lg:order-2 w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-12 bg-white">
        <div className="mb-10 text-center lg:text-left">
          <Image
            width={48}
            height={48}
            priority
            src="/image/logo.png"
            alt="Logo"
            className="w-12 h-12 mb-4 mx-auto lg:mx-0"
          />
          <h2 className="text-2xl font-bold">Log in</h2>
          <p className="text-gray-500">
            Welcome back – please enter your details
          </p>
        </div>

        {/* Login Form */}
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();

            handleSubmit(e);
          }}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              placeholder="hello@filitano.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
