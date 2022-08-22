import React, { PureComponent } from "react";
import "./Header.css";
import peakImg from "../assets/peak.jpg"
import nepImg from "../assets/himal.jpg"


export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src= {peakImg}
          width="238"
          height="162"
          alt="peak img"
        />
        Emoji Search
        <img
          src={nepImg}
          width="232"
          height="142"
          alt=""
        />
      </header>
    );
  }
}