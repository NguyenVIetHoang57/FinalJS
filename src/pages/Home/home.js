import React from "react";
import { Link } from "react-router-dom";
import "./home.css";


function Home() {
  return (
    <div className="home" >
      <div className="headerContainer" >
        <h1> WELCOME TO MY SHOP </h1>
        <p> YOU CAN FIND ANYTHING YOU WANT IN HERE </p>
        <Link to="/product">
          <button> BUY NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
