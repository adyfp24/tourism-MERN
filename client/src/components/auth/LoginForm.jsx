import React, {useState} from "react";
import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";

const LoginForm = () => {
    const { login, loading, error } = useAuth();
    const { handleSubmit, values, handleChange } = useForm({
        username: '',
        password: ''
    });

    const PasswordInput = () => {
        const [showPassword, setShowPassword] = useState(false);

        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };

        return (
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 lg:text-xl">Password</label>
                <div className="flex items-center">
                    <input
                        type={showPassword ? "text" : "password"}
                        name='password'
                        onChange={handleChange}
                        value={values.password}
                        className="w-full px-3 py-2 mt-1 border-gray-300 rounded-lg"
                    />
                    <button type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit(() => login(values))}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 lg:text-xl">Nama pengguna</label>
                    <input type="text" name='username' onChange={handleChange} value={values.username} className="w-full px-3 py-2 mt-1 border-gray-300 rounded-lg" />
                </div>
                <PasswordInput />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" disabled={loading} className="px-4 py-2 bg-lime-300 rounded-xl">Login</button>
            </form>
        </div>
    )
}

export default LoginForm