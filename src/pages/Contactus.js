
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

import "./css/Content.css";
//import Header from "../Components/Header.js";

import React from 'react'

function Contactus() {


  const [formData, setFormData] = useState({
    username: '',
    email: '',
    msg:'',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.username.trim()) {
        validationErrors.username = " * username is required"
    }
    if(!formData.email.trim()) {
      validationErrors.email = " * email is required"
  }
  if(!formData.msg.trim()) {
    validationErrors.msg = " * message is required"
}

setErrors(validationErrors)

if(Object.keys(validationErrors).length === 0) {
  <Alert variant="Success">Request sent Successfully</Alert>
  alert("Form Submitted successfully")
}
  }



  return (
    <div className='content'>
  
  <h2>Contact us</h2>
      <p>
<br/>
<br/>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <Card className='content_card'>
      <Card.Body>

     <Row>
     <Col sm={2}></Col>
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

      
      
     

      <Form onSubmit={handleSubmit}>
     
      <Form.Control 
           type="text"
          name="username"
          placeholder='username'  
          autoComplete='off'  
          onChange={handleChange}   />
          {errors.username && <span className='erred'>{errors.username}</span>}  
      <br></br>
      
      <Form.Control type="email"
          name="email"
          placeholder='example@gmail.com'
          autoComplete='off'
          onChange={handleChange}  />
           {errors.email && <span className='erred'>{errors.email}</span>}  
       <br></br>
       <Form.Control as="textarea" rows={3} type="text"
          name="msg"
          placeholder='Message'
          autoComplete='off'
          onChange={handleChange}  />
           {errors.msg && <span className='erred'>{errors.msg}</span>}  
       <br></br>
      <Button type="submit" variant="success">Submit</Button>
    </Form>
      
      </Col>
      <Col sm={2}></Col>
     </Row>

      </Card.Body>
    </Card>
      
  </div>
  )
}

export default Contactus



