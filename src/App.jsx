import React from "react";
import * as ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Songs from "./components/Songs";

export default function App({name,song}){
  const songs = [{id:1,name:"Timi Nai Hau"}, {id:2,name:"Samjhana"}];

   return ( 
   <> 
   <Header/>
   

<Profile />


  
   
   </>
   
   )
    
  }
