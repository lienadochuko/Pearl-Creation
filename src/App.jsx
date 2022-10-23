import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import About from "./components/about/About";
import Insert from "./Insert";
import ProductList from "./components/productList/ProductList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Insert />}/>
        <Route exact path="/About" element={<About />}/>
        <Route exact path="/Blog" element={<ProductList />}/>
      </Routes>
    </Router>
  )
};

export default App;