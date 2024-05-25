import React from 'react'
import RegisterForm from '../../components/auth/RegistForm'
import Navbar from '../../components/Navbar'

function Register() {
    return (
        <div className='flex justify-center h-screen bg-custom-300'>
            <Navbar />
            <div className='w-1/2 mx-24 my-24 shadow-2xl rounded-2xl bg-custom-300'>
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register