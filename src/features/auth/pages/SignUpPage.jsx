import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Horr logo.png";

function EyeIcon({ visible }) {
  return visible ? (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 21 21">
      <rect x="1" y="1" width="9" height="9" fill="#F25022" />
      <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
      <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
      <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
    </svg>
  );
}

export default function SignUpPage() {
  const [role, setRole] = useState("freelancer");
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      {/* Card */}
      <div className="bg-white rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] w-full max-w-[440px] px-8 sm:px-10 py-10">
        
        {/* Logo Area */}
        <div className="text-center mb-6">
          <img src={logo} alt="Horr Logo" className="h-[100px] mx-auto mb-2 object-contain" />
          <p className="text-[10px] sm:text-[10.5px] tracking-[2.5px] sm:tracking-[3px] text-[#9b8c6a] font-medium uppercase font-sans">
            Hire Egyptian Talent Worldwide.
          </p>
        </div>

        {/* Role Toggle */}
        <div className="flex bg-[#1a2332] p-1 rounded-[10px] mb-7">
          <button
            onClick={() => setRole("freelancer")}
            className={`flex-1 py-2.5 text-[14px] font-semibold rounded-[8px] transition-all duration-300 ${
              role === "freelancer"
                ? "bg-gradient-to-r from-[#c4a44a] to-[#a8853a] text-[#1a2332] shadow-sm"
                : "text-white/70 hover:text-white"
            }`}
          >
            Freelancer
          </button>
          <button
            onClick={() => setRole("client")}
            className={`flex-1 py-2.5 text-[14px] font-semibold rounded-[8px] transition-all duration-300 ${
              role === "client"
                ? "bg-gradient-to-r from-[#c4a44a] to-[#a8853a] text-[#1a2332] shadow-sm"
                : "text-white/70 hover:text-white"
            }`}
          >
            Client
          </button>
        </div>

        {/* Full Name */}
        <div className="mb-[16px]">
          <label className="block text-[13px] font-semibold text-[#1a2332] mb-[6px] tracking-wide">
            Full Name
          </label>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handle}
            className="w-full px-4 py-[10px] rounded-[8px] border border-gray-200 bg-white text-[#1a2332] text-[14px] placeholder-gray-400 outline-none focus:border-[#a8853a] focus:ring-1 focus:ring-[#a8853a] transition-all"
          />
        </div>

        {/* Email */}
        <div className="mb-[16px]">
          <label className="block text-[13px] font-semibold text-[#1a2332] mb-[6px] tracking-wide">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handle}
            className="w-full px-4 py-[10px] rounded-[8px] border border-gray-200 bg-white text-[#1a2332] text-[14px] placeholder-gray-400 outline-none focus:border-[#a8853a] focus:ring-1 focus:ring-[#a8853a] transition-all"
          />
        </div>

        {/* Phone */}
        <div className="mb-[16px]">
          <label className="block text-[13px] font-semibold text-[#1a2332] mb-[6px] tracking-wide">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handle}
            className="w-full px-4 py-[10px] rounded-[8px] border border-gray-200 bg-white text-[#1a2332] text-[14px] placeholder-gray-400 outline-none focus:border-[#a8853a] focus:ring-1 focus:ring-[#a8853a] transition-all"
          />
        </div>

        {/* Password */}
        <div className="mb-[22px]">
          <label className="block text-[13px] font-semibold text-[#1a2332] mb-[6px] tracking-wide">
            Password
          </label>
          <div className="relative">
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handle}
              className="w-full px-4 py-[10px] pr-11 rounded-[8px] border border-gray-200 bg-white text-[#1a2332] text-[14px] placeholder-gray-400 outline-none focus:border-[#a8853a] focus:ring-1 focus:ring-[#a8853a] transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPass((p) => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#a8853a] transition-colors"
            >
              <EyeIcon visible={showPass} />
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button className="w-full py-[12px] rounded-[8px] bg-[#1a2332] hover:bg-[#243048] text-white text-[15px] font-semibold tracking-wide shadow-md hover:shadow-lg hover:-translate-y-[1px] active:scale-[0.98] transition-all duration-200">
          Sign Up
        </button>

        {/* Sign In Link */}
        <p className="text-center mt-5 text-[13px] text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-[#a8853a] font-semibold hover:underline">
            Sign In
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-[12px] text-gray-400 font-medium whitespace-nowrap">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 py-[10px] rounded-[8px] border border-gray-200 bg-white text-[#1a2332] text-[13px] font-semibold hover:border-[#a8853a] hover:bg-gray-50 transition-all duration-200 shadow-sm">
            <GoogleIcon />
            Continue with Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-[10px] rounded-[8px] border border-gray-200 bg-white text-[#1a2332] text-[13px] font-semibold hover:border-[#a8853a] hover:bg-gray-50 transition-all duration-200 shadow-sm">
            <MicrosoftIcon />
            Continue with Microsoft
          </button>
        </div>
      </div>
    </>
  );
}
