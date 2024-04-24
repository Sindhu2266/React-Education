import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/navi.css';
import twitter from './Icons/twitter.svg';
import instagram from './Icons/instagram.svg';
import youtube from './Icons/youtube.svg';
import linkedin from './Icons/linkedin.svg';
/*import logoicon from './images/logoicon.png';
import logicon from './Icons/logicon.png';*/

import  './css/sticker.css';

function Header() {
  return (
   
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
        <Col className='emaill'><a href='#'>Email: rjtechnology@gmail.com</a></Col>
        <Col xs={4} className='phno'><a href='#'>Contact : +91973537738</a></Col>
        <Col>
        <div className='Icons'>
        <div className='Icons1'><a href="https://twitter.com/?lang=en-in" target="_blank"><img src={twitter} alt='twitter'></img></a></div>
        <div className='Icons1'><a href="https://www.youtube.com/" target="_blank"><img src={youtube} alt='Youtube'></img></a></div>
        <div className='Icons1'><a href="https://www.instagram.com/?hl=en" target="_blank"><img src={instagram} alt='Instagram'></img></a></div>
        <div className='Icons1'><a href= "https://www.linkedin.com/login" target="_blank"><img src={linkedin} alt='linkedin'></img></a></div>
        </div>

        </Col>
      </Row>
      
      
    </Container>





      </div>
    </div>
  )
}

export default Header