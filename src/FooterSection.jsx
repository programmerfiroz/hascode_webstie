import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-[#1A2B47] text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold">LOGO</h2>
          <p className="text-sm text-gray-300 mt-4">
            Duis vel nunc orci. Maecenas ullamcorper lacus at tortor volutpat fermentum.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            MAKE A APPOINTMENT
          </button>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Clinic</a></li>
            <li><a href="#">Our Doctors</a></li>
            <li><a href="#">News And Media</a></li>
            <li><a href="#">Appointments</a></li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-3">Our Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            <img src="/gallery1.jpg" alt="Gallery 1" className="w-20 h-16 object-cover rounded" />
            <img src="/gallery2.jpg" alt="Gallery 2" className="w-20 h-16 object-cover rounded" />
            <img src="/gallery3.jpg" alt="Gallery 3" className="w-20 h-16 object-cover rounded" />
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Contacts</h3>
          <p className="text-gray-300">If you have any questions or need help</p>
          <p className="text-lg font-bold mt-2">+123 456 7890</p>
          <p className="text-gray-300">1582 Aliquam consectetur libero</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white transition"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white transition"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white transition"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 text-sm mt-8">
        © 2025, Copy Right By <span className="text-blue-400">Yahoo Baba</span> All Rights Reserved | <a href="#" className="hover:text-white">About Us</a> | <a href="#" className="hover:text-white">Services</a> | <a href="#" className="hover:text-white">Privacy</a>
      </div>
    </footer>
  );
};

export default FooterSection;
