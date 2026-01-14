import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        
        <div className="h-16 flex items-center justify-between">

          
          <Link to="/" className="flex items-center">
            
              <img src={assets.Shipy_logo} alt="logo" className=" h-30 w-auto object-contain filter brightness-200 contrast-200 "/>
              
            <span className="text-lg font-semibold text-white">
              Shipy-Courier
            </span>
          </Link>

          
          <nav className="hidden md:flex items-center gap-8 text-white/90 font-medium">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/about" className="hover:text-white">About</Link>
             <Link to="/blog" className="hover:text-white">Blogs</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/pricing" className="hover:text-white">Pricing</Link>
            <Link to="/track" className="hover:text-white">Tracking</Link>


            <Link to="/signin" className="ml-4 px-5 py-2 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-slate-100 transition" >
              Sign In
            </Link>
          </nav>

          
          <button onClick={() => setOpen(!open)} className="md:hidden text-white"> {open ? <X size={22} /> : <Menu size={22} />}
</button>

        </div>

        
        {open && (
          <div className="md:hidden pb-4 pt-2 space-y-3 text-white font-medium">
            <Link onClick={() => setOpen(false)} to="/" className="block">
              Home
            </Link>
             <Link onClick={() => setOpen(false)} to="/about" className="block">
              About
            </Link>
            <Link onClick={() => setOpen(false)} to="/blog" className="block">
              Blog
            </Link>
            <Link onClick={() => setOpen(false)} to="/contact" className="block">
              Contact
            </Link>
            <Link onClick={() => setOpen(false)} to="/pricing" className="block">
              Pricing
            </Link>


            <Link onClick={() => setOpen(false)} to="/track" className="block">
              Tracking
            </Link>


            <Link
              onClick={() => setOpen(false)}
              to="/signin"
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
