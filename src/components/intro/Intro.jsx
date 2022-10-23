import React, { useContext } from "react";
import "./intro.css";
import { ThemeContext } from "../../context";
import pic from "../../images/feature.png";
import pic1 from "../../images/feature.png";
import pic2 from "../../images/feature.png";
import pic3 from "../../images/feature.png";
import pic4 from "../../images/feature.png";
import { useNavigate } from "react-router-dom";


const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let nav = useNavigate();
 
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
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro"
                style={{color:darkMode ? "white" : "white"}}
                >Hello, I am</h2>
                <h1 className="i-name"
                style={{color:darkMode ? "white" : "white"}}
                >Erhisohwode Precious Ejiro </h1>
                <p className="i-desc"
                 style={{color:darkMode ? "white" : "white"}}
                >
                   Welcome to <b>PEARL CREATION</b> we offer:
                </p>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">NYSC UPDATE and KITS</div>
                        <div className="i-title-item" onClick={handleSubmit2}>PEARLBLOG</div>
                        <div className="i-title-item">FASHION ADVICE</div>
                        <div className="i-title-item">JUICY GOSSIP</div>
                        <div className="i-title-item">SONG OF THE WEEK(LOCAL)</div>
                    </div>
                </div>
                <p className="i-desc"
                 style={{color:darkMode ? "white" : "white"}}
                >
                    We offer Nysc kits for our soon to be corper to make your camp
                    experience easy, lets us provide you with the basic nessecity 
                    of camp ranging from white sneaker to even Khaki, we also offer
                     fresh gists and more!
                </p>
            </div>
           </div>
           <div className="i-right">
           <div className="i-right-wrapper">
          <div className="i-title-2">
          <div className="i-title-wrapper2">
                        <img src={pic} className="i-title-item1"  alt="ibage"/>
                        <img src={pic1} className="i-title-item1" alt="ibage"/>
                        <img src={pic2} className="i-title-item1" alt="ibage"/>
                        <img src={pic3} className="i-title-item1" alt="ibage"/>
                        <img src={pic4} className="i-title-item1" alt="ibage"/>
            </div>
          </div>
           </div>
           </div>
           </div>
  )
}

export default Intro