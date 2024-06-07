import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import fb from "../../assets/images/universal/fb.png";
import google from "../../assets/images/universal/google.png";
import bg1 from "../../assets/images/auth/bg1.png";
import bg2 from "../../assets/images/auth/bg2.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const { login, loading, error } = useAuth();
    const { handleSubmit, values, handleChange } = useForm({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex items-center justify-center h-screen bg-custom-300">
            <img src={bg2} className="absolute top-0 left-0" />
            <img src={bg1} className="absolute bottom-0 right-0" />
            <div className="z-10 flex flex-col w-4/5 p-2 bg-gray-200 shadow-lg sm:w-3/5 rounded-2xl lg:p-1" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.18)'
            }}>
                <div className="flex justify-end mx-6 mt-4">
                    <Link to='/login'><h1 className="mr-4 text-3xl font-bold">Login</h1></Link>
                    <Link to='/register'><h1 className="text-3xl font-bold text-gray-400">Register</h1></Link>
                </div>
                <div className="px-1 mt-3 md:px-5 lg:px-12">
                    <form onSubmit={handleSubmit(() => login(values))} className="p-1 md:p-5 lg:p-10">
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 lg:text-xl">Nama pengguna</label>
                            <input
                                type="text"
                                name='username'
                                placeholder="masukkan username Anda"
                                onChange={handleChange}
                                value={values.username}
                                className="w-full px-3 py-2 mt-1 border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 lg:text-xl">Password</label>
                            <div className="flex items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="masukkan password Anda"
                                    name='password'
                                    onChange={handleChange}
                                    value={values.password}
                                    className="w-full px-3 py-2 mt-1 border-gray-300 rounded-lg"
                                />
                                <input
                                    type="checkbox"
                                    onChange={() => setShowPassword(!showPassword)}
                                    className="ml-2"
                                />

                            </div>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full px-4 py-3 mt-4 font-semibold text-white bg-custom-200 md:py-3 xl:py-4 rounded-xl hover:bg-custom-500 lg:text-2xl"
                        >
                            Login
                        </button>
                        <p className="mt-3 text-xl text-center text-slate-600">atau</p>
                        <div className="flex justify-center gap-2 mt-5">
                            <button className="flex items-center justify-center w-1/5 gap-2 p-3 text-base text-white bg-blue-500 md:w-1/2 sm:w-full rounded-xl text-start">
                                <img src={fb} className="md:ml-2 w-15 sm:w-7 xl:w-10" />
                                <p className="hidden md:block">Masuk dengan facebook</p>
                            </button>
                            <button className="flex items-center justify-center w-1/5 gap-2 p-3 text-base text-white md:w-1/2 bg-slate-800 sm:w-full rounded-xl text-start">
                                <img src={google} className="w-15 sm:w-7 xl:w-10" />
                                <p className="hidden md:block">Masuk dengan google</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
