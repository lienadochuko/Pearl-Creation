import React, { useContext } from 'react';
import "./about.css"
import { ThemeContext } from "../../context";
import black from "../../images/driven.png";
import sch from "../../images/HRBA.png";
import imag from "../../images/logo.png";
import sch2 from "../../images/Meritorious Service.png";
import sch3 from "../../images/jobberman.png";
import sch4 from "../../images/certificate-cola.png"
import Toggel from "../toggle/Toggel";
import "../../app.css";
import { useNavigate } from "react-router-dom";


const About = () => {
  let nav = useNavigate();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = () => {
    nav("/");
}
const handleSubmit1 = () => {
    nav("/About");
}
const handleSubmit2 = () => {
    nav("/Blog");
}
  return (
    <div className='a'  style={{backgroundColor:darkMode ? "#222" : "white", 
    color:darkMode ? "white" : "black"}}>
     <div className='tmenu' 
     style={{color:darkMode ? "black" : "white" , 
     background:darkMode ? "rgba(255, 255, 255, 0.447)" : "rgba(0, 0, 0, 0.486"}}>
       <img src={imag} className="imag" alt="logo"/>
       <p className="name">Pearl Creation</p>
      <div className="tog" 
      style={{backgroundColor:theme.state.darkMode ? "#fff" : "#222",
      border:theme.state.darkMode ? "2px solid #fff" : "2px solid #222" , 
      borderRadius:theme.state.darkMode ? "50px" : "50px"}}><Toggel/></div>
      <div className='p2' onClick={handleSubmit}>Home</div>
      <div className='p1' onClick={handleSubmit1}>About</div>
      <div className='p1' onClick={handleSubmit2}>Blog</div>
      <div className='p3' >Contact</div>
      </div>
      <div className='abwrapper'>
      <div className="a-left">
        <div className="a-card">
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
            The web is truly in our grasp or to be more precise the web is a place
            where we developer can build and create borders, give titles, and
            determine the colour/fashion trends("Our own little Kingdom"). <br/>
            I have ever since the beginning been a builder 
            and discoverer, can still hear the echos of my mother's voice 
            in my head.
        </p>
        <p className="a-desc">
            I am a Web developer, I build and develop websites to 
            put it simple, for customers, be it stylish, modern
            websites, online stores, web services and even site-Cloning.
            I am also a UI/UX Designer and Graphics Designer.
            </p>
            <br/>
        <p className="a-desc">
            I Graduated with a B.sc in Computer Science from Hill City 
            University, Republic of Benin. While in school I engaged in 
            various projects in different programming languages, it was 
            a rush to be honest, but it was worth it because everything
            in the Tech-World share the same foundation.
        </p>
        <div className="a-award-wrapper">
            <div className="a-award-ani">
            <div className="a-award">
            <img src={sch4} alt="" className="a-award-img" />
            <div className="a-award-text">
                <h4 className="a-award-title">Certificate of Completion</h4>
                <p className="a-award-desc">
                    Nigerian Bottling Company Limited<br/>
                    #YouthEmpower2021<br/>
                    #DiscoverDevelopSuceed
                    </p>
            </div>
        </div>
        <div className="a-award">
            <img src={sch3} alt="" className="a-award-img" />
            <div className="a-award-text">
                <h4 className="a-award-title">Certificate of Completion</h4>
                <p className="a-award-desc">
                    Jobberman<br/>
                    Certificate showing completion
                 and satisfaction of all Requirement Approved for Jobberman Soft-Skills Training</p>
            </div>
        </div>
        <div className="a-award">
            <img src={sch2} alt="" className="a-award-img" />
            <div className="a-award-text">
                <h4 className="a-award-title">Certificate of Meritorious Service</h4>
                <p className="a-award-desc">Certificate showing recognition of immense 
                contribution towards improving the quality of primary healthcare data</p>
            </div>
        </div>
        <div className="a-award">
            <img src={sch} alt="" className="a-award-img" />
            <div className="a-award-text">
                <h4 className="a-award-title">Certificate of Completion</h4>
                <p className="a-award-desc">Succesful completion of the Human Rights 
                Based Approach course</p>
            </div>
        </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
