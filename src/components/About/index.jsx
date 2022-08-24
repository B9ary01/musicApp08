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
    <button onClick={handleClick}>Go back to Show</button>

    </>

    )

}

export default About;