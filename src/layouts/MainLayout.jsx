import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
  return (
     <div className='min-h-screen bg-white'>
      <Navbar />
      <Outlet />
      
    </div>
  )
}

export default MainLayout