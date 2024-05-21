import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about/About'
import Destinasi from './pages/destinasi/Destinasi'
import Blog from './pages/blog/Blog'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/blog' Component={Blog}></Route>
          <Route path='/destinasi' Component={Destinasi}></Route>
        </Routes>
    </>
  )
}

export default App
