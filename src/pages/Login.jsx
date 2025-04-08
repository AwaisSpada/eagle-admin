import React from "react";
import logo from "/images/Logo.png";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();

    const token = "your_token_here";
    sessionStorage.setItem("token", token);
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-[url('/images/login_banner.jpg')] flex items-center justify-center bg-opacity-90">
      <div className="w-full max-w-md p-8 rounded-lg bg-secondary shadow-xl">
        {/* Logo */}
        <div className="flex justify-center">
          {/* <h1 className="text-4xl font-bold text-primary">Eagle</h1> */}
          <img src={logo} alt="" className="w-28" />
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded bg-[#000E17] text-white   focus:border-primary focus:outline-none"
              placeholder="admin@eagle.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded bg-[#000E17] text-white  focus:border-primary focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4  bg-background" />
            <label className="ml-2 text-gray-300">Remember Me</label>
          </div>

          <div className="flex justify-between items-center">
            <a href="#" className="text-primary text-sm font-medium">
              Forgot Password?
            </a>
            <button
              type="submit"
              onClick={loginUser}
              className="cursor-pointer py-2 px-6 !bg-background hover:bg-primaryHover text-white font-medium rounded transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
