// components/BlogCard.tsx
import React from "react";
import { Clock, User } from "lucide-react";

interface BlogCardProps {
  image: string;
  tag: string;
  title: string;
  description: string;
  author: string;
  readTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  tag,
  title,
  description,
  author,
  readTime,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300 max-w-sm">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-white text-gray-700 text-xs font-medium px-2 py-1 rounded">
          {tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
