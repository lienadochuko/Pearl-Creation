import React, { useContext } from 'react';
import Product from '../product/Product';
import { ThemeContext } from "../../context";
import imag from "../../images/logo.png";
import Toggel from "../toggle/Toggel";
import "../../app.css";
import './productList.css';
import { products } from '../../data';
import { useNavigate } from "react-router-dom";


const ProductList = () => {
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
   <div className="pl" style={{backgroundColor:darkMode ? "#222" : "white", 
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
      <div className='plwrapper'>
    <div className="pl-circle"></div>
    <div className="pl-texts">
        <h1 className="pl-title"> Pearl's BLOG</h1>
        <p className="pl-desc">
            Eris is a Modern and Creative portfolio that
             your work needs. Beautiful pages, stunning 
             portfolio and styles and a whole lot more
             awaits you.
        </p>
    </div>
    <div className="pl-list">
        {products.map((item) =>(
            <Product key={item.id} img={item.img} link={item.link}/>
        ))}
    </div>
    </div>
   </div>
  )
}
 
export default ProductList