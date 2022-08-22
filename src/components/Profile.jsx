import React, { PureComponent } from "react";
import nepImg from "../assets/sabin.jpeg"


export default class Profile extends PureComponent {
  render() {
    return (
        <>
        <img
        src= {nepImg}
        width="134"
        height="162"
        alt="peak img"
      />
      <p>Sabin Rai is a Nepali singer and lyricist who is called as the Bryan Adams of Nepal because of the voice. His first successful single was "Komal Tyo Timro" from the album Sataha. Although his song "Ekai Aakash Muni" was released before Sataha. He has performed concerts in Australia, Hong Kong, United Kingdom, United States, South Korea, Bahrain, Singapore, Thailand, Japan, Denmark, Finland, and India. Rai known for his stage performances and the interest he brings in his old songs by singing in different style. Now he has his own band called "Sabin Rai and The Pharaoh.</p>
</>
    )
}

}