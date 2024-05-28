import React from "react";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
    const { login, loading, error } = useAuth();
    

    return (
        <div>LoginForm</div>
    )
}

export default LoginForm