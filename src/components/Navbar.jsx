// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { assets } from "../assets/assets";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 shadow-md">
      
//       {/* FULL WIDTH NAVBAR */}
//       <div className="h-16 flex items-center justify-between px-4 md:px-10">

//         {/* LOGO - LEFT SIDE */}
//         <Link to="/" className="flex items-center">
//           <img
//             src={assets.Shipy_logo}
//             alt="Shipy Logo"
//             className="h-35 w-auto object-contain filter brightness-200 contrast-200"
//           />
//         </Link>

        
//         <nav className="hidden md:flex items-center gap-8 text-white/90 font-medium">
//           <Link to="/" className="hover:text-white">Home</Link>
//           <Link to="/about" className="hover:text-white">About</Link>
//           <Link to="/blog" className="hover:text-white">Blogs</Link>
//           <Link to="/contact" className="hover:text-white">Contact</Link>
//           <Link to="/pricing" className="hover:text-white">Pricing</Link>
//           <Link to="/track" className="hover:text-white">Tracking</Link>

//           <Link
//             to="/signin"
//             className="ml-4 px-5 py-2 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-slate-100 transition"
//           >
//             Sign In
//           </Link>
//         </nav>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-white"
//         >
//           {open ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="md:hidden px-4 pb-4 pt-2 space-y-3 text-white font-medium">
//           <Link onClick={() => setOpen(false)} to="/" className="block">Home</Link>
//           <Link onClick={() => setOpen(false)} to="/about" className="block">About</Link>
//           <Link onClick={() => setOpen(false)} to="/blog" className="block">Blog</Link>
//           <Link onClick={() => setOpen(false)} to="/contact" className="block">Contact</Link>
//           <Link onClick={() => setOpen(false)} to="/pricing" className="block">Pricing</Link>
//           <Link onClick={() => setOpen(false)} to="/track" className="block">Tracking</Link>

//           <Link
//             onClick={() => setOpen(false)}
//             to="/signin"
//             className="inline-block mt-2 px-5 py-2 rounded-xl bg-white text-emerald-600 font-semibold"
//           >
//             Sign In
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { assets } from "../assets/assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <nav className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 shadow-md text-white sticky top-0 z-50">
       

      <div className="h-16 flex items-center justify-between px-4 md:px-10">
        
        <Link to="/" className="flex items-center">
           <img
             src={assets.Shipy_logo}
             alt="Shipy Logo"
             className="h-35 w-auto object-contain filter brightness-200 contrast-200"
           />
         </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white/90 font-medium">
          <Link to="/" className="hover:text-white">Home</Link>
           <Link to="/about" className="hover:text-white">About</Link>
           <Link to="/blog" className="hover:text-white">Blogs</Link>
           <Link to="/contact" className="hover:text-white">Contact</Link>
           <Link to="/pricing" className="hover:text-white">Pricing</Link>
           <Link to="/track" className="hover:text-white">Tracking</Link>

           <Link
             to="/signin"
             className="ml-4 px-5 py-2 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-slate-100 transition"
           >
        Sign In
       </Link>
        </div>

        {/* Mobile Hamburger / Cross */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-slate-700 transition"
        >
          {isOpen ? (
            <IoCloseSharp className="text-white text-3xl" />
          ) : (
            <IoMenu className="text-white text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500  overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col">
          <Link
            onClick={() => setIsOpen(false)}
            to="/"
            className="block py-3  hover:text-amber-400"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/about"
            className="block py-3 hover:text-amber-400"
          >
            About
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/blog" className="block py-3  hover:text-amber-400">Blog</Link>
           <Link onClick={() => setIsOpen(false)} to="/contact" className="block py-3  hover:text-amber-400">Contact</Link>
          <Link onClick={() => setIsOpen(false)} to="/pricing" className="block py-3 hover:text-amber-400">Pricing</Link>
          <Link onClick={() => setIsOpen(false)} to="/track" className="block py-3  hover:text-amber-400">Tracking</Link>

         <Link
           onClick={() => setIsOpen(false)}
            to="/signin"
           className="inline-block self-start w-fit mt-2 px-5 py-2 rounded-xl bg-white text-emerald-600 font-semibold"
           >
            Sign In
         </Link>
        </div>
      </div>
    </nav>
  );
}