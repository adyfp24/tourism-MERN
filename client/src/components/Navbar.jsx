import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const navigateTo = (path) => {
        setIsDropdownOpen(false);
        window.scrollTo(0, 0);
        navigate(path);
    };

    return (
        <div className="flex flex-wrap mb-20">
            <section className="relative mx-auto">
                <nav className="fixed top-0 left-0 z-50 flex justify-between w-screen text-black bg-custom-100">
                    <div className="flex items-center justify-between w-full px-5 py-4 lg:px-12">
                        <Link to="/" className="font-sans text-xl font-semibold font-heading">
                            MalangKuy
                        </Link>
                        <div className="items-center hidden space-x-5 md:flex">
                            <ul className="items-center hidden mx-auto space-x-8 font-sans font-thin md:flex font-heading">
                                <li className='hover:text-custom-500'><button onClick={() => navigateTo('/')}>Beranda</button></li>
                                <li className='hover:text-custom-500'><button onClick={() => navigateTo('/about')}>Tentang</button></li>
                                <li className='hover:text-custom-500'><button onClick={() => navigateTo('/destinasi')}>Destinasi</button></li>
                                <li className='hover:text-custom-500'><button onClick={() => navigateTo('/blog')}>Blog</button></li>
                                <li className='hover:text-custom-500'><button onClick={() => navigateTo('/login')} className="px-8 py-2 font-sans font-normal text-white bg-custom-200 rounded-2xl hover:bg-white hover:text-black">Login</button></li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={toggleDropdown}>
                        <a className="flex items-center self-center mr-4 navbar-burger md:hidden" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                    </button>
                    {isDropdownOpen && (
                        <ul className="absolute right-0 z-50 flex flex-col w-2/5 p-5 mx-4 text-black list-none bg-white shadow-xl animate__animated animate__fadeInDown rounded-2xl top-full md:hidden">
                            <li className="mb-2">
                                <button onClick={() => navigateTo('/')}>Beranda</button>
                            </li>
                            <li className="mb-2">
                                <button onClick={() => navigateTo('/about')}>Tentang</button>
                            </li>
                            <li className="mb-2">
                                <button onClick={() => navigateTo('/destinasi')}>Destinasi</button>
                            </li>
                            <li className="mb-2">
                                <button onClick={() => navigateTo('/blog')}>Blog</button>
                            </li>
                            <li>
                                <button className="px-4 text-white border rounded-md bg-custom-200 hover:bg-custom-300" onClick={() => navigateTo('/register')}>Login</button>
                            </li>
                        </ul>
                    )}
                </nav>
            </section>
        </div>
    );
}

export default Navbar;