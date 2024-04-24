import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/navi.css';

import Button from 'react-bootstrap/Button';

import twitter from './Icons/twitter.svg';
import instagram from './Icons/instagram.svg';
import youtube from './Icons/youtube.svg';
import linkedin from './Icons/linkedin.svg';
import logoicon from './images/logoicon.png';


import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import AboutUs from './aboutus';
import ContactUs from './contactus';
import Home from './home';

import Onlinetraining from './online';
import Courses from './courses';

import './css/sticker.css'


function Navigation() {
  return (
   <Router>
     <div>
     <div className="Container">
     <div className='yellowban'>
      <div className='container-fluid'>
      
      
      <div class="ticker">
        {/* <div class="title"><h5>Breaking News</h5></div> */}
         <div class="news"> 
            <marquee class="news-content"> 
                <p>Hurry up.....Limited seats available</p>
                     
                      </marquee> </div> 
                            </div>
      
      
      </div>
</div></div>
     
       
       
<div className='topp'>
    
<Container>
<Row>
        <Col className='emaill'>Email: rjtechnology@gmail.com</Col>
        <Col xs={5}>Contact : +91973537738</Col>
        <Col>
        <div className='Icons'>
        <div className='Icons1'><a href="#"><img src={twitter} alt='twitter'></img></a></div>
        <div className='Icons1'><a href="#"><img src={youtube} alt='twitter'></img></a></div>
        <div className='Icons1'><a href="#"><img src={instagram} alt='twitter'></img></a></div>
        <div className='Icons1'><a href="#"><img src={linkedin} alt='twitter'></img></a></div>
        </div>

        
        
        
        
        </Col>
      </Row>
      
      
    </Container>





      </div>
{/*------------------------------------------------------------------------------------- */}
<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='logoname'><img src={logoicon}></img>&nbsp;RJ Technology</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navii' as={Link} to={"/Home"}></Nav.Link>
            <Nav.Link className='navii' as={Link} to={"/AboutUs"}></Nav.Link>
            <NavDropdown title="Courses" id="collapsible-nav-dropdown" className='navii'>
              <NavDropdown.Item href="#action/3.1">Front-End</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Back-end</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link  className='navii' as={Link} to={"/Online"}>Online Training</Nav.Link>
            <Nav.Link  className='navii' as={Link} to={"/Contact"}>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="success">Enquiry</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
        
  
    <Routes>
  <Route exact path='/home' element={<Home/>}></Route>
  <Route exact path='/about' element={<AboutUs/>}></Route>
  <Route exact path='/courses' element={<Courses/>}></Route>
  <Route exact path='/online' element={<Onlinetraining/>}></Route>
  <Route exact path='/contactus' element={<ContactUs/>}></Route>

  
</Routes>
    
    </div>
    </Router>
  )
}

export default Navigation