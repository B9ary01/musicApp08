import React, { PureComponent } from "react";


export default class Songs extends PureComponent {
  render() {
    const songs = [{id:1,name:"Timi Nai Hau"}, {id:2,name:"Samjhana"}];

    return (

        <>
      
     
     
        <h2> Sabin</h2>
        <ul>
        
         {songs.map(song => <li key={song.id}>{song.name}</li>)}
        </ul>
     
        
        </>
        
        )
         
       }
    }