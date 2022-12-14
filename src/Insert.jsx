import React,{ useContext, useRef } from "react"; 
import About from "./components/about/About";
import Aboutprev from "./components/about/Aboutprev";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import { ThemeContext } from "./context";
import "./app.css"

const Insert = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  /*const scrollRef = document.getElementById('julie'); 
    useEffect(() => {
        scrollRef.julie?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        })
    }, [])*/

  const scollToRef = useRef();
  const scollToRef2 = useRef();
  const scollToRef3 = useRef();

  

  return (
  <div style={{backgroundColor:darkMode ? "#222" : "white", 
  color:darkMode && "white" }} className="homie">
    <section ref={scollToRef}>
    <Intro/>
    </section>
    <section ref={scollToRef2}>
    <ProductList/>
    </section>
    <section className="about">
    <Aboutprev/>
    </section> 
    <section ref={scollToRef3}>
    <Contact/>
    </section>
  </div>
  )
};

export default Insert;