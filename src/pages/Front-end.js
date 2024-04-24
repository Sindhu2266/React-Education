import React from 'react';
import "./css/Content.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
//import ListGroup from 'react-bootstrap/ListGroup';
import arrow from './images/arrow.png';


function Frontend(){
    return(
      <>
       <div className='content'>
      <h2>Front End </h2>
      <div className='butbox'>
      <button  className='buttton'>Enroll</button>
      <button className='buttton'>Javascript</button>
      <button  className='buttton'>React</button>
      <button  className='buttton'>View Batches</button></div>
      {/**card starts */}
      <Card style={{ marginTop: 25, marginBottom:30}}>
      <Card.Header>
        <div className='Headings'>
        Who this Course is for ?</div></Card.Header>
      
      <ul>
        <li>Cras justo odio</li>
        <li>Dapibus ac facilisis in</li>
        <li>Vestibulum at eros</li>
      </ul>
     
     
    </Card>


    {/**card starts */}
    <Card style={{ marginTop: 25, marginBottom:30}}>
      <Card.Header>
        <div className='Headings'> Why this Course?</div>
       
        </Card.Header>
     
        <ul>
        <li>Cras justo odio</li>
        <li>Dapibus ac facilisis in</li>
        <li>Vestibulum at eros</li>
      </ul>
    </Card>

    {/**card starts */}
    <Card style={{ marginTop: 25, marginBottom:30}}>
      <Card.Header>
        <div className='Headings'> What will you learn?</div>
       
        </Card.Header>
     
        <ul>
        <li>Cras justo odio</li>
        <li>Dapibus ac facilisis in</li>
        <li>Vestibulum at eros</li>
      </ul>
    </Card>

{/**accordion starts */}
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><img src={arrow} width='30px' height='30px'></img><h5>HTML</h5></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><img src={arrow} width='30px' height='30px'></img><h5>CSS</h5></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><img src={arrow} width='30px' height='30px'></img><h5>JAVASCRIPT</h5></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><img src={arrow} width='30px' height='30px'></img><h5>REACT</h5></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>


      </div>
      </>
    )
  }

  export default Frontend;