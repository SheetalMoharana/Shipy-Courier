import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import Let_connect from '../components/Let_connect';
const MainLayout = () => {
  return (
     <div className='min-h-screen bg-white'>
      <Navbar />
      <Outlet />
      <Let_connect/>
      <Footer/>
      
    </div>
  )
}

export default MainLayout