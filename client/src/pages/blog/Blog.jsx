import React from 'react';
import Navbar from '../../components/layout/Navbar';
import useBlog from '../../hooks/useBlog';
import BlogCard from '../../components/blog/BlogCard';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/layout/Footer';

function Blog() {
  const { loading, error, blogs } = useBlog();
  const navigate = useNavigate()

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <Navbar />
      <section id='head' className='bg-custom-100'>
        <div className='flex flex-col p-6 mx-8 mt-20 sm:flex-row bg-custom-300 sm:mx-16 sm:mt-24 rounded-2xl'>
          <div className='flex flex-col w-full h-full sm:w-5/12'>
            <h3 className='mb-2 font-light sm:mt-3'>baca 3 menit</h3>
            <p className='mb-4 text-2xl font-bold sm:text-4xl'>Liburan? Museum <br />Angkut, yuk</p>
            <p className='mb-4 text-sm font-light sm:text-base'>Museum Angkut adalah salah satu destinasi wisata yang menampilkan berbagai perkembangan transportasi dunia, cocok untuk menambah wawasan kamu!</p>
            <div>
              <Link to='/blog/content'>
                <button className='px-3 py-2 text-sm font-semibold bg-white hover:bg-custom-200 hover:text-white sm:text-base rounded-xl sm:rounded-3xl sm:px-6 sm:py-3'>Selengkapnya</button>
              </Link>
            </div>
            <div className='w-full sm:w-7/8 mr-8 my-5 sm:my-6 h-0.5 bg-black'></div>
            <div className='flex items-center'>
              <div className='max-w-1/2'>
                <img className='w-10 sm:max-w-full' src={avatar} alt="" />
              </div>
              <div className='flex flex-col ml-4'>
                <h3 className='text-xs font-medium sm:text-base'>Rani</h3>
                <h6 className='text-xs font-light sm:text-base'>23 Oktober 2023</h6>
              </div>
            </div>
          </div>
          <div className='w-full h-full mt-4 sm:w-7/12 sm:mt-0'>
            <img className='w-full' src={headImg} alt="" />
          </div>
        </div>
      </section>
      
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} onClick={() => navigate(`/blog/${blog._id}`)} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );

}

export default Blog;
