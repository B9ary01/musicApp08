import React, { PureComponent } from "react";
import "./Header.css";
import peakImg from "../assets/guitar.jpeg"
import nepImg from "../assets/mus.jpeg"


export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src= {peakImg}
          width="220"
          height="142"
          alt="peak img"
        />
        Music App
        <img
          src={nepImg}
          width="220"
          height="142"
          alt=""
        />
      </header>
    );
  }
}