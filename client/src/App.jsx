import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about/About'
import Destinasi from './pages/destinasi/Destinasi'
import Blog from './pages/blog/Blog'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import DashboardAdmin from './pages/admin/Dashboard'
import DetailBlog from './pages/blog/DetailBlog'
import DetailDestinasi from './pages/destinasi/DetailDestinasi'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/blog' Component={Blog}></Route>
          <Route path="/blog/:id" Component={DetailBlog}></Route>
          <Route path='/destinasi' Component={Destinasi}></Route>
          <Route path='/destinasi/:id' Component={DetailDestinasi}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/register' Component={Register}></Route>
          <Route path='/admin-dashboard' Component={DashboardAdmin}></Route>
        </Routes>
    </>
  )
}

export default App
