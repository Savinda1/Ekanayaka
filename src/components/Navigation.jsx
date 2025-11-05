import React, { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ use react-router-dom instead of react-router

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="z-50 bg-[#8b3d1c] text-white fixed w-full shadow-lg">
      <div className="flex items-center justify-between px-6 sm:px-10 md:px-16 py-4">
        {/* ✅ Left Section (Logo + Nav Links) */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-50 via-blue-200 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
         Ekanayaka Spices
          </p>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 font-semibold">
            <Link to="/" className="hover:text-yellow-300 transition-colors">
              Home
            </Link>
            <Link to="/" className="hover:text-yellow-300 transition-colors">
              Oder Now
            </Link>
            <Link to="/" className="hover:text-yellow-300 transition-colors">
              product
            </Link>
          </div>
        </div>

        {/* ✅ Right Section (Buttons + User) */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="hidden sm:flex">
            <Globe className="h-5 w-5 mr-2" />
            EN
          </Button>

          {/* Auth Buttons */}
          <SignedOut>
            <Button variant="ghost" asChild>
              <Link to="/sign-in">Log In</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/sign-up">Sign Up</Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <Button variant="ghost" asChild>
              <Link to="/account">My Account</Link>
            </Button>
          </SignedIn>

          {/* ✅ Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-sky-800 px-6 pb-4 flex flex-col space-y-3 text-base font-semibold">
          <Link
            to="/"
            className="hover:text-yellow-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/Register"
            className="hover:text-yellow-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
          <Link
            to="/About"
            className="hover:text-yellow-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          {/* Auth Links (Mobile) */}
          <SignedOut>
            <Link
              to="/sign-in"
              className="hover:text-yellow-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              to="/sign-up"
              className="hover:text-yellow-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </SignedOut>

          <SignedIn>
            <Link
              to="/account"
              className="hover:text-yellow-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              My Account
            </Link>
          </SignedIn>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
