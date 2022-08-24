import React,{useEffect,useState} from "react";
import * as ReactDOM from "react-dom/client";
import {Routes, Route} from "react-router-dom";

import axios from "axios";

import Header from "./layouts/Header";
import About from "./components/About";
import Home from "./components/Home";
import Show from "./components/Show";


import"./App.css"

export default function App({name,song}){
 /* const songs = [{id:1,name:"Timi Nai Hau"}, {id:2,name:"Samjhana"}];
    
const [showData, setshowData]=useState([]);
const [searchString, setSearchString]= useState("Friends");

useEffect(() => {
    async function searchApi(){
        const result=await axios.get(`https://api.tvmaze.com/search/shows?q=${searchString}`)
     setshowData(result.data);
    }
    searchApi();

}, [searchString]);
   

function handleSearch(userInput){
    setSearchString(userInput);

}*/
   return ( 
   <> 
   <Routes>

<Route path="/" element={<Header/>} >

<Route path="/show" element={<Show/>} />
    </Route>

<Route index element={<Home/>} />
<Route path="/about" element={<About/>} />
  


<Route path="*" element={<h1>Page Not Found </h1>} />
</Routes>



   </>
   
   )
    
  }
