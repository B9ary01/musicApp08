import React,{useEffect,useState} from "react";
import * as ReactDOM from "react-dom/client";

import axios from "axios";
import"../../App"
import ShowCard from "../ShowCard";

import SearchForm from "../SearchForm";


export default function Show({name,song}){
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
    setSearchString(userInput);}

    return(
     
  
<>
      <SearchForm handleSearchSubmission={handleSearch}/>

      {showData.map(d =><ShowCard key={d["show"].id} data={d["show"]} />)}
      
       </>  
    
    )

}