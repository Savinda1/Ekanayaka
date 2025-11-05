import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#8b3d1c] text-white py-10 px-6 sm:px-10 md:px-16 lg:px-20">
      {/* ✅ Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/20 pb-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-3">
            Ekanayaka Products
          </h2>
          <p className="text-white/80 leading-relaxed">
            Bringing the purest Sri Lankan spices — harvested with love, packed
            with care, and delivered with authenticity. Experience the taste of
            nature in every pinch.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Register" className="hover:text-yellow-300 transition">
                Register
              </Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-yellow-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-300" />
              <span>Trincomalee, Sri Lanka</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-yellow-300" />
              <span>+94 77 123 4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-yellow-300" />
              <span>info@ekanayakaproducts.lk</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-yellow-300 transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Section */}
      <div className="text-center text-white/70 mt-6 text-sm">
        © {new Date().getFullYear()} Ekanayaka Products. All rights reserved.
      </div>
    </footer>
  );
}
