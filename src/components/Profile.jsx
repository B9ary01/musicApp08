import React, { PureComponent } from "react";
import nepImg from "../assets/sabin.jpeg"

import singerImg from "../assets/dim.jpeg"

export default class Profile extends PureComponent {
  render() {
    const songs = [{id:1,name:"SOS", relDate:"2017/02"}, {id:2,name:"Ognie Pietra" ,relDate:"2020/03"}];
    const songSabin = [{id:1,name:"Timi Nai Hau", relDate:"2010/05"}, {id:2,name:"Samjhana", relDate:"2009/09"}];

    return (
        <>
         <h1> Sabin Rai</h1>
        <img
        src= {nepImg}
        width="135"
        height="144"
        alt="peak img"
      />
      <p>Sabin Rai is a Nepali singer and lyricist who is called as the Bryan Adams of Nepal because of the voice. His first successful single was "Komal Tyo Timro" from
         the album Sataha. Although his song "Ekai Aakash Muni" was released before Sataha. He has performed concerts in Australia, Hong Kong, United Kingdom,
          United States, South Korea, Bahrain, Singapore, Thailand, Japan, Denmark, Finland, and India. 
          Rai known for his stage performances and the interest he brings in his old songs by singing in different style. Now he has his own band called "Sabin Rai and The Pharaoh.</p>
          <ul>
        
        {songSabin.map(song => <li key={song.id}>{song.name} {"-"}  {song.relDate}</li>)}
       </ul>
    
<hr></hr>

<h1> Dimash Kudaibergen</h1>
          <img
        src= {singerImg}
        width="135"
        height="144"
        alt="peak img"
      />
      <p>Dinmukhammed Kanatuly Kudaibergen (Kazakh: Дінмұхаммед Қанатұлы Құдайберген, Dınmūhammed Qanatūly Qūdaibergen), born 24 May 1994, known professionally as Dimash Kudaibergen, is a Kazakh singer, songwriter, and multi-instrumentalist. He is university-trained in classical as well as contemporary music, and is known for his exceptionally wide vocal range.
        He has performed songs in thirteen languages.</p>
       
        <ul>
        
         {songs.map(song => <li key={song.id}>{song.name} {"-"} {song.relDate}</li>)}
        </ul>
     
</>
    )
}

}