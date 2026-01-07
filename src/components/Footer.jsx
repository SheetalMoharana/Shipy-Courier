import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20">
      
      <div className= "bg-gradient-to-br from-[#e8f1ff] via-[#e6fbf6] to-[#ffffff] px-6 md:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          
          <div>
            <h2 className="text-2xl font-bold text-blue-600">
              Shipy <span className="text-green-500">Courier</span>
            </h2>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Smart logistics built for speed, transparency, and a smoother delivery experience.
            </p>
            
          </div>

          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <MapPin size={18} className="text-green-500" />
                Cuttack , Odisha, India
              </li>
              <li className="flex gap-2">
                <Phone size={18} className="text-green-500" />
                +91 9876543210
              </li>
              <li className="flex gap-2">
                <Mail size={18} className="text-green-500" />
                info@shipycourier.com
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Pick & Drop</li>
              <li>Packaging</li>
              <li>Domestic Shipping</li>
              
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>

            <h4 className="mt-6 mb-3 font-medium">Follow Us</h4>
            <div className="flex gap-4">
              <Facebook className="cursor-pointer hover:text-blue-600" />
              <Twitter className="cursor-pointer hover:text-sky-500" />
              <Instagram className="cursor-pointer hover:text-pink-500" />
              <Linkedin className="cursor-pointer hover:text-blue-700" />
            </div>
          </div>

        </div>
      </div>

      
      <div className="bg-black text-gray-300 px-6 md:px-16 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>
          © {new Date().getFullYear()} <span className="text-white">Shipy Courier</span>.
          All rights reserved.
        </p>

        
      </div>
    </footer>
  );
};

export default Footer;
