import React from "react";
import Image from "next/image";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section: Newsletter Subscription */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-32 py-12 bg-gray-800">
        <div className="text-white w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold">
            <span className="text-blue-500">Stay</span> Updated
          </h2>
          <p className="text-sm md:text-base font-normal mt-4">
            Subscribe to our newsletter for the latest blog posts and updates.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-white text-gray-900 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700 mx-4 md:mx-32" />

      {/* Main Footer Content */}
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-32 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="mb-6 text-xl font-semibold">About Us</h2>
            <p className="text-sm text-gray-400">
              We are a team of passionate writers and developers dedicated to bringing you the best content on technology, lifestyle, and more.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="bg-blue-500 flex justify-center items-center w-12 h-12 rounded-lg">
                <PiClockClockwiseBold className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-lg text-white font-semibold">Opening Hours</h3>
                <p className="text-sm text-gray-400">24/7</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="mb-6 text-xl font-semibold">Useful Links</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h2 className="mb-6 text-xl font-semibold">Help?</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="mb-6 text-xl font-semibold">Recent Posts</h2>
            <ul className="text-sm text-gray-400 space-y-4">
              <li className="flex gap-4">
                <Image src="/Post-2.webp" alt="Post Image" width={64} height={64} className="rounded-lg" />
                <div>
                  <h3 className="text-white">Top 10 Tech Trends in 2025</h3>
                  <p className="text-xs text-gray-400">02 Jan 2025</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Image src="/Post 1.webp" alt="Post Image" width={64} height={64} className="rounded-lg" />
                <div>
                  <h3 className="text-white">How to Stay Productive</h3>
                  <p className="text-xs text-gray-400">2 Jan 2025</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright and Social Links */}
      <div className="bg-gray-800 px-4 md:px-32 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-400">
            &copy; 2025 TechTonic. All Rights Reserved.
          </span>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaYoutube className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaPinterest className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;