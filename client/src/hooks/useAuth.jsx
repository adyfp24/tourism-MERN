import userService from "../services/userService";

import React from 'react'

function useAuth() {
  const getUser = () => {
    userService.login()
    .then((res)=> console.log('oke', res))
  }
  return (
    <div>
        <h1>useauth</h1>
        
    </div>
  )
}

export default useAuth