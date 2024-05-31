import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about/About'
import Destinasi from './pages/destinasi/Destinasi'
import Blog from './pages/blog/Blog'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import DashboardAdmin from './pages/admin/Dashboard'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/blog' Component={Blog}></Route>
          <Route path='/destinasi' Component={Destinasi}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/register' Component={Register}></Route>
          <Route path='/admin-dashboard' Component={DashboardAdmin}></Route>
        </Routes>
    </>
  )
}

export default App
