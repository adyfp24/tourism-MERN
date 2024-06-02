import React, { useState, useEffect, useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';

const RegisterForm = () => {
    const { register, loading, error } = useAuth();
    const { values, handleChange, handleSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        role: '',
    });

    const passwordRef = useRef(null);
    const [passwordValue, setPasswordValue] = useState('');

    useEffect(() => {
        setPasswordValue(values.password);
    }, [values.password]);

    const togglePasswordVisibility = () => {
        if (passwordRef.current.type === 'password') {
            passwordRef.current.type = 'text';
        } else {
            passwordRef.current.type = 'password';
        }
    };

    return (
        <div className="px-1 mt-3 md:px-5">
            <form onSubmit={handleSubmit(() => register(values))} className="p-1 md:p-5">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 lg:text-xl">Nama pengguna</label>
                    <input type="text" name='username' onChange={handleChange} value={values.username} className="w-full px-3 py-2 mt-1 border-gray-300 rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 lg:text-xl">Email</label>
                    <input type="email" name="email" onChange={handleChange} value={values.email} className="w-full px-3 py-2 mt-1 border-gray-300 rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="block text-gray-700 lg:text-xl">Role</label>
                    <input type="text" name="role" onChange={handleChange} value={values.role} className="w-full px-3 py-2 mt-1 border-gray-300 rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 lg:text-xl">Password</label>
                    <div className="flex items-center">
                        <input
                            type="password"
                            name='password'
                            onChange={handleChange}
                            value={passwordValue}
                            className="w-full px-3 py-2 mt-1 border-gray-300 rounded-lg"
                            ref={passwordRef}
                        />
                        <button type="button" onClick={togglePasswordVisibility}>
                            Show
                        </button>
                    </div>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button type='submit' disabled={loading} className="w-full mt-4 font-semibold text-white bg-custom-200 md:py-3 xl:py-4px-4 rounded-xl hover:bg-custom-500 lg:text-2xl">Daftar</button>
            </form>
        </div>
    );
};

export default RegisterForm;
