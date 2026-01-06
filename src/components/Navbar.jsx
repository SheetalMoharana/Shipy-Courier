import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        
        <div className="h-16 flex items-center justify-between">

          
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white font-bold">
              U
            </div>
            <span className="text-lg font-semibold text-white">
              Shipy-Courier
            </span>
          </Link>

          
          <nav className="hidden md:flex items-center gap-8 text-white/90 font-medium">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/about" className="hover:text-white">About</Link>
             <Link to="/blogs" className="hover:text-white">Blogs</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/orders" className="hover:text-white">Orders</Link>


            <Link
              to="/sign-in"
              className="ml-4 px-5 py-2 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-slate-100 transition"
            >
              Sign In
            </Link>
          </nav>

          
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        
        {open && (
          <div className="md:hidden pb-4 pt-2 space-y-3 text-white font-medium">
            <Link onClick={() => setOpen(false)} to="/" className="block">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} to="/services" className="block">
              Services
            </Link>
            <Link onClick={() => setOpen(false)} to="/about" className="block">
              About
            </Link>
            <Link onClick={() => setOpen(false)} to="/about" className="block">
              Blogs
            </Link>
            <Link onClick={() => setOpen(false)} to="/contact" className="block">
              Contact
            </Link>
            <Link onClick={() => setOpen(false)} to="/contact" className="block">
              Orders
            </Link>


            <Link
              onClick={() => setOpen(false)}
              to="/services"
              className="inline-block mt-2 px-5 py-2 rounded-xl bg-white text-emerald-600 font-semibold"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
