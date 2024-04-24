import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route, NavLink } from 'react-router-dom'
import AboutUs from './aboutus';
import ContactUs from './contactus';
import Home from './home';

import Onlinetraining from './online';
import Courses from './courses';




export const Navbar = () => {
    const[menuOpen, setMenuOpen] =useState(false);
  return (
    <div>
<Router>
    <div>
      
    <div className='box'>
         {/* Email : rjtechnology@gmail.com 
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact :+91 902574001</span>*/}
        
        
        <div>Email: rjtechnology@gmail.com</div>
       
       
        <div>Contact: +91 973537738</div>
        <div></div>
        <div>Icons</div>
      
        
        </div>
       
      <nav>
        
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
  <ul className={menuOpen ? "open" : ""}>
    <li className='title'><NavLink to="/">RJ Technology</NavLink></li>
    <li><NavLink to="/home">Home</NavLink></li>
    <li><NavLink to="/aboutus">About</NavLink></li>
    <li><NavLink to="/courses">Courses</NavLink></li>
    <li><NavLink to="/online">Online Training</NavLink></li>
    <li><NavLink to="/contactus">Contact</NavLink></li>


   
   
    
  </ul></nav>
<Routes>
  <Route exact path='/home' element={<Home/>}></Route>
  <Route exact path='/aboutus'element={<AboutUs/>}></Route>
  <Route exact path='/courses' element={<Courses/>}></Route>
  <Route exact path='/online' element={<Onlinetraining/>}></Route>
  <Route exact path='/contactus' element={<ContactUs/>}></Route>

  
</Routes>
</div>
</Router>




    </div>
  )
}
