import React,{useEffect,useState} from "react";
import * as ReactDOM from "react-dom/client";
import axios from "axios";

import Header from "./components/Header";
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
   <Header/>

   <Profile />
   <Songs/>

   <SearchForm handleSearchSubmission={handleSearch}/>

{showData.map(d =><ShowCard key={d["show"].id} data={d["show"]} />)}

   
   </>
   
   )
    
  }
