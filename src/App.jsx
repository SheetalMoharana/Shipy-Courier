import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
 import Home from "./pages/Home";
 import Sign_In from "./pages/Sign_In";
function App(){
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<Sign_In />} />
        
        </Route>
        </Routes>
  )
}
export default App;