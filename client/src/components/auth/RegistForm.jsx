import React, { useState, useEffect, useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';
import { Link } from "react-router-dom";
import fb from "../../assets/images/universal/fb.png";
import google from "../../assets/images/universal/google.png";
import bg1 from "../../assets/images/auth/bg1.png";
import bg2 from "../../assets/images/auth/bg2.png";

const RegisterForm = () => {
    const { register, loading, error } = useAuth();
    const { values, handleChange, handleSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        role: '',
    });

    const passwordRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative flex items-center justify-center h-screen overflow-hidden bg-custom-300">
            <img src={bg2} className="absolute top-0 left-0" />
            <img src={bg1} className="absolute bottom-0 right-0" />
            <div className="z-10 flex flex-col w-4/5 p-2 bg-gray-200 shadow-lg sm:w-3/5 rounded-2xl lg:p-1" 
                 style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', 
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '10px', 
                    border: '1px solid rgba(255, 255, 255, 0.18)'
                }}>
                <div className="flex justify-end mx-6 mt-4">
                    <Link to='/login'><h1 className="mr-4 text-3xl font-bold text-gray-400">Login</h1></Link>
                    <Link to='/register'><h1 className="text-3xl font-bold">Register</h1></Link>
                </div>
                <div className="px-1 mt-3 md:px-5 lg:px-12">
                    <form onSubmit={handleSubmit(() => register(values))} className="p-1 md:p-5 lg:p-10">
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 lg:text-xl">Nama pengguna</label>
                            <input 
                                type="text" 
                                name='username' 
                                onChange={handleChange} 
                                value={values.username} 
                                className="w-full px-3 py-2 mt-1 border-gray-300 rounded-lg" 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 lg:text-xl">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                onChange={handleChange} 
                                value={values.email} 
                                className="w-full px-3 py-2 mt-1 border-gray-300 rounded-lg" 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="role" className="block text-gray-700 lg:text-xl">Role</label>
                            <input 
                                type="text" 
                                name="role" 
                                onChange={handleChange} 
                                value={values.role} 
                                className="w-full px-3 py-2 mt-1 border-gray-300 rounded-lg" 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 lg:text-xl">Password</label>
                            <div className="relative flex items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name='password'
                                    onChange={handleChange}
                                    value={values.password}
                                    className="w-full px-3 py-2 mt-1 border-gray-300 rounded-lg"
                                    ref={passwordRef}
                                />
                                <span 
                                    onClick={() => setShowPassword(!showPassword)} 
                                    className="absolute cursor-pointer right-3"
                                >
                                    <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </span>
                            </div>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <button 
                            type="submit" 
                            disabled={loading} 
                            className="w-full px-4 py-3 mt-4 font-semibold text-white bg-custom-200 md:py-3 xl:py-4 rounded-xl hover:bg-custom-500 lg:text-2xl"
                        >
                            Daftar
                        </button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
