import React, { PureComponent } from "react";

import rajImg from "../assets/raju.jpeg"

export default class Songs extends PureComponent {
  render() {
    const songs = [{id:1,name:"Timilai Dekhara" ,date:"2015"}, {id:2,name:"Choto chha Jindagi",date:"2011"}];

    return (

        <>
     <hr></hr>
        <h1> Raju Lama</h1>
        <img
        src= {rajImg}
        width="135"
        height="144"
        alt="peak img"
      />

      <p>Raju Lama (Nepali: राजु लामा; born 16 March 1978) is a Nepalese singer-songwriter. 
        He is the backstage singer of the musical band Mongolian Heart. His work involves songs in Nepali, Tibetan, Tamang and other languages. 
        Lama is currently based in the US and Nepal. He is one of the coaches in The Voice of Nepal.</p>
        <ul>
        
         {songs.map(song => <li key={song.id}>{song.name} {"-"} {song.date}</li>)}
        </ul>
        
        </>
        
        )
         
       }
    }