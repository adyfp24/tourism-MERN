import React from "react";

function BlogCard({ blog, onClick }) {
    const baseUrl = 'http://localhost:3000/storage';
    return (
      <div className="overflow-hidden bg-white rounded-lg shadow-lg" onClick={onClick}>
        <img src={`${baseUrl}/${blog.blogImg}`} alt={blog.title} className="object-cover w-full h-48" />
        <div className="p-4">
          <h2 className="mb-2 text-xl font-semibold">{blog.title}</h2>
          <p className="mb-4 text-gray-700">{blog.content.substring(0, 200)}...</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>By {blog.writer.name}</span>
            <span>{new Date(blog.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    );
  }

export default BlogCard