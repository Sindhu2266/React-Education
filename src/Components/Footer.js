import React from 'react'


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaYoutube, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

import './css/footer.css';

function Footer() {
    const year = new Date();
    return (
        <>
       
                  <div className="footer-container">
                     
        <Row>
          
        
          <Col className='textaline'>
          <h1>RJ Technology</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex sem, hendrerit aliquam elit quis, 
          vehicula posuere sapien. Ut euismod cursus velit eget luctus. Fusce facilisis neque ultrices, ultrices nisl et, ultrices sapien. 
          Quisque viverra porttitor faucibus. Aenean at nunc in quam tincidunt suscipit. 
          Vestibulum facilisis nec arcu vitae pellentesque. Vivamus iaculis vulputate fermentum.</p>
            </Col>
            
          <Col >
            <div className="services">
          <h1>Our Services</h1>
          <ul>
            <li>Mobile Application Design</li>
            <li>Web Application Design</li>

            <li>Websites Design</li>

            <li>Web User Interface Design</li>

            <li>Web UX Design and Research</li>
            <li>Theme Development</li>

          </ul></div>
            </Col>
           
          <Col>
          <h1>Our Address</h1>
          <p><b>
          1/2 Marathahalli, Bengaluru <br></br>
          Karnataka 560087<br></br> 
        
          Email : rjtechnology@gmail.com <br></br>
          Ph no: 8763547289</b>
          <br></br>
          <br></br>
          <b>Office Time :</b>10 AM - 6 PM
          </p>
          </Col>
          <Col>
          <h1>Subscribe Us</h1>
          <br></br>
          <p>
            <input type='text' className='subsinput'></input>
            <br></br>
            
            <a href='https://mail.google.com/mail/u/0/#drafts?compose=new' target="_blank">
              <button className="subsbutton">Subscribe</button></a>
            
         
         
          </p>
          <p>
          <a href="https://www.youtube.com/" target="_blank"> <FaYoutube className="icons youtube" /></a>
          <a href="https://twitter.com/?lang=en-in" target="_blank" > <FaTwitter className="icons twitter"/></a>
          
          <a href="https://www.instagram.com/?hl=en" target="_blank" > <FaInstagram className="icons instagram" /></a>
          <a href= "https://www.linkedin.com/login" target="_blank"> <FaLinkedin className="icons linkedin" /></a>
          </p>
          
          </Col>
        </Row>
        </div>
  
  
     
        <footer className='bg'>Copyright  &copy; {year.getFullYear()}</footer>
        </>
  )
}

export default Footer


