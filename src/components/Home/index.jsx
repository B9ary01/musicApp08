import React from "react";
import { Link,Outlet } from "react-router-dom";

import Profile from "../Profile";
const Home=()=>{
   
    return(
        <>
    <h1>Welcome to BongCloud Music App</h1>
    <nav>
        <Link to="classsical">Classical</Link>
        <br></br>

        <Link to="pop">Pop</Link>
        <br></br>
        <Link to="opera">Opera</Link>
        <br></br>
        <Link to="show">Show</Link>
        <br></br>
    </nav>

     <Outlet/>

     <Profile/>
     </>


    )

}

export default Home;