import React from "react";
import { useNavigate } from 'react-router';

import Header from "../Header";

const About=()=>{
    let navigate = useNavigate();

    function handleClick() {
      navigate('/show')
    }
    return(
       <>

   <h1>About Us</h1>
    <Header/>
    <button onClick={handleClick}>Go show page</button>

    </>

    )

}

export default About;