import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
 import Home from "./pages/Home";
 import Sign_In from "./pages/Sign_In"
 import Register from "./pages/Register";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Tracking from "./pages/Tracking";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
function App(){
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<Sign_In />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/track' element={<Tracking/>}/>
         
      </Route>
        </Routes>
  )
}
export default App;