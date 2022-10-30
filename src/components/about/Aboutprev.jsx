import React, { useContext } from 'react';
import "./about.css"
import { ThemeContext } from "../../context";
import "../../app.css";
import pic from "../../images/precious1.png"

const Aboutprev = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='a1'  style={{backgroundColor:darkMode ? "#222" : "white", 
    color:darkMode ? "white" : "black"}}>
      <div className='abwrapper1' style={{borderColor:darkMode ? "" : "black"}}>
      <div className="a-left1">
        <div className="a-card1">
            <img src={pic} alt="my pic" className='cardimg'/>
        </div>
      </div>
      <div className="a-right1">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub1">
            The web is truly in our grasp or to be more precise the web is a place
            where we developer can build and create borders, give titles, and
            determine the colour/fashion trends("Our own little Kingdom"). <br/>
            I have ever since the beginning been a builder 
            and discoverer, can still hear the echos of my mother's voice 
            in my head.
        </p>
        <p className="a-desc1">
            I am a Web developer, I build and develop websites to 
            put it simple, for customers, be it stylish, modern
            websites, online stores, web services and even site-Cloning.
            I am also a UI/UX Designer and Graphics Designer.
            </p>
      </div>
      </div>
    </div>
  )
}

export default Aboutprev;