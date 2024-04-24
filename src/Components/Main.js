import React from 'react'
import './css/main.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import staricon from './Icons/staricon.png';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import word from './Icons/word.svg';
import book from './Icons/book.svg';
import laptop from './Icons/laptop.svg';
import call from './Icons/call.svg';
import { useNavigate } from 'react-router-dom';
import { Link, Outlet } from "react-router-dom";
import Apply from './Apply';


function Main() {

const navigate = useNavigate();
function handleclick(){
  navigate("./Apply")
}

  return (
    
         <div className="container-fluid">
            <div className='container'>
<div className='main_content'>
        <h1>Key Features</h1>
        
        <br></br>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit id diam sit amet faucibus. 
    Aliquam at nisi venenatis sem suscipit lacinia. 
    Aenean at eleifend purus, non maximus elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit id diam sit amet faucibus. 
    Aliquam at nisi venenatis sem suscipit lacinia. 
    Aenean at eleifend purus, non maximus elit.</p>
    <br></br>


        
        <Container>
    
      <Row>
        <Col sm>
     
        <Card className="part1" >
      <Card.Body>
        <div className='icon'><img src={word}></img></div>
        <Card.Title>Expert Faculty</Card.Title>
        <br></br>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    
        </Col>
        
        
        <Col sm>
        <Card className="part1">
      <Card.Body>
      <div className='icon'><img src={laptop}></img></div>
        <Card.Title>Well Equiped Labs</Card.Title>
        <br></br>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
        
        
        <Col sm>
            
        <Card className="part1">
      <Card.Body>
      <div className='icon'><img src={book}></img></div>
        <Card.Title>Quality Education</Card.Title>
        <br></br>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>   
            </Col>
    <Col sm>
    <Card className="part1">
    
      <Card.Body>
      <div className='icon'><img src={call}></img></div>
        <Card.Title>24*7 Access</Card.Title>
        <br></br>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        
        </Col>
      </Row>
    </Container>
    <br></br>
    <br></br>
         <h1>Our Courses</h1>
        
        <br></br>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit id diam sit amet faucibus. 
    Aliquam at nisi venenatis sem suscipit lacinia. 
    Aenean at eleifend purus, non maximus elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit id diam sit amet faucibus. 
    Aliquam at nisi venenatis sem suscipit lacinia. 
    Aenean at eleifend purus, non maximus elit.</p>
    <br></br>
    {/*-----------------card2------------------ */}


<Container>
    <Row>
        
    <Col>
        <Card className="text-center">
      <Card.Header  className='headd'>Front End Development</Card.Header>
      <Card.Body>
        <Card.Title>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</Card.Title>
        <div className="staricon">
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        </div>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>      
        <Link to="/Apply"><Button variant="success">Apply Online</Button></Link>
       <Outlet/>
      </Card.Body>
    </Card>
        </Col>




       
        <Col>
        <Card className="text-center">
      <Card.Header  className='headd'>Back End Development</Card.Header>
      <Card.Body>
        <Card.Title>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</Card.Title>
        <div className="staricon">
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        </div>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="/Apply"> <Button variant="success">Apply Online</Button></Link>
       <Outlet/>
      </Card.Body>
    </Card>
        </Col>


        <Col>
        <Card className="text-center">
      <Card.Header  className='headd'>Full Stack Development</Card.Header>
      <Card.Body>
        <Card.Title>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</Card.Title>
        <div className="staricon">
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        </div>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        
        {/*<Button variant="success" onClick={(e) => handleclick()}>Applyy Online</Button>*/}
        <Link to="/Apply"><Button variant="success">Apply Online</Button></Link>
        <Outlet />
       
      
      
      </Card.Body>
    </Card>
        </Col>
</Row>

        <Row>

       
        <Col>
        <Card className="text-center">
      <Card.Header  className='headd'>Data science</Card.Header>
      <Card.Body>
        <Card.Title>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</Card.Title>
        <div className="staricon">
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        </div>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="/Apply"><Button variant="success">Apply Online</Button></Link>
       <Outlet/>
      </Card.Body>
    </Card>
        </Col>


      
        <Col>
        <Card className="text-center">
      <Card.Header  className='headd'>Devops</Card.Header>
      <Card.Body>
        <Card.Title>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</Card.Title>
        <div className="staricon">
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        </div>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="/Apply"><Button variant="success">Apply Online</Button></Link>
       <Outlet/>
      </Card.Body>
    </Card>
        </Col>


        <Col>
        <Card className="text-center">
      <Card.Header  className='headd'>AWS</Card.Header>
      <Card.Body>
        <Card.Title>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</Card.Title>
        <div className="staricon">
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        <div className="star"><img src={staricon}></img></div>
        </div>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="/Apply"><Button variant="success">Apply Online</Button></Link>
       <Outlet/>
       
      </Card.Body>
    </Card>
        </Col>
      
      </Row>
      </Container>

    </div>
    </div>  
       
    </div>
  )
}

export default Main