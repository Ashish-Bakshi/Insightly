import React from "react";
import { ArrowRight, Clock, User } from "lucide-react";

interface FeaturedPostCardProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
  author: string;
  readTime: string;
  link?: string;
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({
  image,
  tags,
  title,
  description,
  author,
  readTime,
  link = "#",
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden max-w-6xl mx-auto">
      {/* Image Left */}
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-l-xl"
        />
      </div>

      {/* Content Right */}
      <div className="md:w-1/2 bg-violet-50 p-6 flex flex-col justify-center rounded-r-xl">
        {/* Tags */}
        <div className="flex gap-2 pb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-3 text-start">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-lg leading-relaxed text-start">
          {description}
        </p>

        {/* Footer: Author, Time, Read More */}
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>

          <div className="flex items-center gap-1 pl-4">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
          {/* <div className="ml-auto"> */}
          <a
            href={link}
            className="flex items-center gap-1 text-indigo-600 font-semibold hover:text-indigo-700 transition-all duration-200 group ml-auto"
          >
            Read More
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
