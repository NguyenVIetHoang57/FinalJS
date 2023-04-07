import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "phosphor-react";
import "./navbar.css";




export const Navbars = () => {
  return (

    // <>
    //  <Navbar bg="dark" variant="dark">
    //     <Container>
    //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#features">Features</Nav.Link>
    //         <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    
    // </>
    <div className="navbar1">
      <div className="link" ><Link to="/" >STORE</Link> </div>
    <div className="navbar2">
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
