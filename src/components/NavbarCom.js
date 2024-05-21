import React, { Component } from 'react';
import "./NavbarCom.css" ;
import {Navbar, Nav, NavDropdown,  Container} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import About from './About';
  import History from './History';
  import ContactUs from './ContactUs';
  import Home from './Home';
  import Gallery2 from './Gallery2';
  import WeddingCost from './WeddingCost';
 
 
 
 


export default class NavbarComp extends Component {
    render(){
        return(
            <Router>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky = "top">
  <Container>
  
  <Nav>
    <Navbar.Brand ><img src='./images/TriyugiWeddingslogo.png' className='img-fluid shadow-4 wtsapp' alt='here is' /> TRIYUGI-WEDDINGS</Navbar.Brand>
   

    </Nav>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as = {Link} to ={"/"}>Home</Nav.Link> 
  
    <Nav.Link as = {Link} to ={"/About"}>About Us</Nav.Link>
    <Nav.Link as = {Link} to ={"/History"}>History</Nav.Link>
   <NavDropdown title="Wedding-cost" id="collasible-nav-dropdown">
        <NavDropdown.Item as = {Link} to ={"/WeddingCost"}>Wedding Cost and accomodation</NavDropdown.Item>
        <NavDropdown.Divider /> 
        
      </NavDropdown>
    </Nav>
    
    <Nav>
    <Nav.Link as = {Link} to ={"/Gallery2"}>Gallery</Nav.Link>
    <Nav.Link as = {Link} to ={"/ContactUs"}>ContactUs</Nav.Link>
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<div><Switch>
<Route exact path="/">

<Home/>
</Route>
          <Route path="/about">
            <About />
          </Route>
         
        
         
         
          <Route path="/history">
            <History />  </Route>
          <Route path="/gallery2">
            <Gallery2 />
            </Route>
          <Route path="/ContactUs">
            <ContactUs/>
          </Route>
         
        
          <Route path="/WeddingCost">

          <WeddingCost/>
          </Route>
        </Switch></div>
            
            </Router>
        )
    }
}