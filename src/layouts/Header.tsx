import React, { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useHandleLogout } from "../auth/logOut";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = useHandleLogout();
  const { user } = useAuth();

  return (
    <header className="bg-white text-white pl-4 pr-4 pt-4 sticky top-0 z-50 h-16 md:h-20">
      <div className="flex justify-between items-center px-4 md:px-35">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Insightly</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to={user ? "/dashboard" : "/"}
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            onClick={() => {
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            Home
          </Link>
          <Link
            to="/articles"
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
          >
            Articles
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
          >
            About
          </Link>
        </div>
        
        {/* Desktop Buttons */}
        {user ? (
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-700">Hi, {user.firstName || user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden md:flex space-x-4">
            <Link to="/signup">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 cursor-pointer">
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button className="text-indigo-600 bg-white border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition duration-200 shadow-sm cursor-pointer">
                Log in
              </button>
            </Link>
          </div>
        )}

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-indigo-600" />
            ) : (
              <Menu className="w-6 h-6 text-indigo-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4 pb-4 space-y-2 bg-white shadow-md">
          <Link
            to="/"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => {
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setIsOpen(false);
            }}
            // onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/articles"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Articles
          </Link>

          <Link
            to="/about"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <div className="pt-2 flex flex-col space-y-2">
            <Link to="/signup" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Sign up
              </button>
            </Link>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full text-indigo-600 bg-white border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50">
                Log in
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
