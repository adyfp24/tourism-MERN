import React from 'react';
import Navbar from '../../components/layout/Navbar';
import useBlog from '../../hooks/useBlog';

function Blog() {
  const { loading, error, blogs } = useBlog();

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <Navbar />
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );

}

export default Blog;
