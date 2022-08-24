import React,{useEffect,useState} from "react";
import * as ReactDOM from "react-dom/client";
import {Routes, Route} from "react-router-dom";

import axios from "axios";

import Profile from "./components/Profile";
import Songs from "./components/Songs";
import {ShowCard, SearchForm} from "./components";
import"./App.css"

export default function App({name,song}){
  const songs = [{id:1,name:"Timi Nai Hau"}, {id:2,name:"Samjhana"}];
    
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

}
   return ( 
   <> 
   <Routes>

<Route path="/" element={<h1>index page</h1>} >

<Route path="/songs" element={< h1>songs page</h1>} >
<Route path=":name" element={< h2>description</h2>} >
</Route> 
</Route>

  <Route path="/about" element={<h1>about page</h1>} />
  
</Route>

<Route path="*" element={<h1>Page Not Found </h1>} />
</Routes>




   <SearchForm handleSearchSubmission={handleSearch}/>

{showData.map(d =><ShowCard key={d["show"].id} data={d["show"]} />)}

   
   </>
   
   )
    
  }
