import { React ,useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserNavbar } from './components/layouts/UserNavbar'
// import './App.css'
import './assets/css/adminlte.css'
import './assets/css/adminlte.min.css'
import { UserSidebar } from './components/layouts/UserSidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Signup } from './components/common/Signup'
import { Login } from './components/common/Login'
import axios from 'axios'
import { SellerSidebar } from './components/seller/SellerSidebar'
import { AddProduct } from './components/seller/AddProduct'
import  Dashboard  from './components/layouts/Dashboard'
import SelDashboard from './components/seller/SelDashboard'
import { SelHome } from './components/seller/SelHome'
import Home from './components/layouts/Home'
import LandPage from './components/layouts/LandPage'



function App() {
  
  axios.defaults.baseURL = 'http://localhost:8000';

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup" || location.pathname === '/') {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  return (
    <div
      className={
        location.pathname === "/login" || location.pathname === "/signup" || location.pathname === '/'
          ? ""
          : "app-wrapper"
     }
    >
        <Routes>
        <Route path='/' element={<LandPage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>

          <Route path='/user' element={<UserSidebar/>}>
            <Route path='dashboard' element={<Dashboard/>}></Route>
              <Route path='home' element={<Home/>}></Route>
          </Route>

          <Route path='/seller' element={<SellerSidebar/>}>
            <Route path='addproduct' element={<AddProduct/>}></Route>
            <Route path='seldashboard' element={<SelDashboard/>}></Route>
            { <Route path='selhome' element={<SelHome/>}></Route> }

          </Route>

        </Routes>
    </div>
  )
}

export default App
