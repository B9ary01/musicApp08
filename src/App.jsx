import React from "react";
import * as ReactDOM from "react-dom/client";
import Header from "./components/Header";

export default function App({name,song}){
  const cats = [{id:1,name:"Timi Nai Hau"}, {id:2,name:"Samjhana"}];

   return ( 
   <> 
   <Header/>

   <h2>Singer {name}</h2>
   <p>Songs </p>
   <ul>
   
    {cats.map(cat => <li key={cat.id}>{cat.name}</li>)}
   </ul>

   
   </>
   
   )
    
  }
