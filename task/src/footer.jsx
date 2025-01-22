import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#964B00] mt-44 py-8 opacity-90">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="text-center sm:text-left">
            <h1 className="font-extrabold text-white text-3xl font-serif">
              90NORTH
            </h1>
          </div>
          
          {/* Contact Us Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-white font-extralight text-xl mb-4">
              CONTACT US
            </h2>
            <div className="space-y-2">
              <p className="font-thin cursor-pointer text-white underline text-sm">
                Email: 90North_info@gmail.com
              </p>
              <p className="font-thin text-white text-sm">
                Telephone: +44(0) 7731648474
              </p>
              <p className="font-thin text-white text-sm">
                Whatsapp: +44(0) 746424384y4
              </p>
              <div className="flex justify-center sm:justify-start space-x-4 mt-4">
                <FaWhatsapp className="text-white text-2xl cursor-pointer hover:text-blue-200 transition-colors" />
                <CiLinkedin className="text-white text-2xl cursor-pointer hover:text-blue-200 transition-colors" />
              </div>
            </div>
          </div>
          
          {/* Navigation Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-white font-extralight text-xl mb-4">
              NAVIGATION
            </h2>
            <nav className="space-y-2">
              {['HOME', 'ABOUT US', 'THE TEAM', 'NEWS & VIEWS', 'CONTACT US'].map((item) => (
                <p key={item} className="text-sm text-white cursor-pointer font-light hover:text-blue-200 transition-colors">
                  {item}
                </p>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;