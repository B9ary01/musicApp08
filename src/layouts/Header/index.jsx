import React from "react";

import { NavLink,Outlet } from "react-router-dom";

const Header=()=>{
    let activeStyle = {
        textDecoration: "underline",
      };

    return(
    <>
    <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink> <br/>
    <NavLink to="about"  style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink><br/>
    <NavLink to="show"  style={({ isActive }) => (isActive ? activeStyle : undefined)}>Show</NavLink>

  <Outlet/>
       
</>

    )

}

export default Header;