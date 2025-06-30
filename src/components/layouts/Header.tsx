import React from "react";
// import image from "../../assets/image.png";
import { BookOpen } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white-600 text-white pl-4 pr-4 pt-2">
      <div className="flex justify-between px-35">
        <div className="flex items-center justify-start space-x-2">
          <BookOpen className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-bold text-gray-900">Insightly</span>
        </div>

        <div className="flex items-center space-x-6">
          <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Home</a>
            <a href="#articles" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Articles</a>
            <a href="#categories" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Categories</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">About</a>
        </div>

        <div className="space-x-4">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 cursor-pointer">Sign up</button>

          <button className="text-indigo-600 bg-white border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition duration-200 shadow-sm cursor-pointer">Log in</button>
        </div>

      </div>
    </header>
  );
};

export default Header;
