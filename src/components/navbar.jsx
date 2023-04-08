
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "phosphor-react";
import "./navbar.css";




export const Navbars = () => {
  return (


    <div className="navbar1">
      <div className="link" ><Link to="/" >STORE</Link> </div>
    <div className="navbar2">
    <div className="links" ><Link to="/product" >Product</Link> </div>
      <div className="links">
    <Link to="/cart">
      <ShoppingBag size={40} />
    </Link>
  </div>
    </div>
    </div>  
  );
};

export default Navbars;
