import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import useAuth from '../hooks/useAuth'

function Home() {
  const { user, getProfile } = useAuth();

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h1>Home, hai {user ? user.username : 'Guest'}</h1>
        {user && (
          <div>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <p>Created At: {new Date(user.createdAt).toLocaleString()}</p>
          </div>
        )}
      </div>

    </div>
  )
}

export default Home