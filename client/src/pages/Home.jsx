import React from 'react'
import Navbar from '../components/Navbar'
import useAuth from '../hooks/useAuth'

function Home() {
  const { user} = useAuth();

  return (
    <div>
        <Navbar />
        <h1>Home, hai {user ? user.username : 'Guest'}</h1>
    </div>
  )
}

export default Home