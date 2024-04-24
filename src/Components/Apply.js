import React from 'react';
import './css/apply.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  { useState } from 'react';

function Apply () {

  const [formData, setFormData] = useState({
    fname: '',
    lname:'',
    desc:'',
    email: '',
    age: '',
    password: '',
    confirmPassword: ''
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
    if(!formData.fname.trim()) {
        validationErrors.fname = " * first name is required"
    }
    if(!formData.lname.trim()) {
      validationErrors.lname = " * Last name is required"
  }

    if(!formData.email.trim()) {
        validationErrors.email = " * email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = " * email is not valid"
    }

    if(!formData.age.trim()) {
      validationErrors.age = " * Age is required"
  }
  if(!formData.desc.trim()) {
    validationErrors.desc = " * Description is required"
}
  

    if(!formData.password.trim()) {
        validationErrors.password = " * password is required"
    } else if(formData.password.length < 6){
        validationErrors.password = " * password should be at least 6 char"
    }

    if(formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = " * password not matched"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }

  }







  return (
    <>
	<div className='content_apply'>

  <h2>Create an Account</h2>
  <br/>

  <Card className='content_card'>
      <Card.Body>
      

  <Form  onSubmit={handleSubmit}>
      <Row>
        <Col>
        
          <Form.Control 
           type="text"
          name="fname"
          placeholder='First name'  
          autoComplete='off'  
          onChange={handleChange}   />
          {errors.fname && <span className='erred'>{errors.fname}</span>}  

        </Col>
        <Col>
        <Form.Control 
           type="text"
          name="lname"
          placeholder='Last name'  
          autoComplete='off'  
          onChange={handleChange}   />
          {errors.lname && <span className='erred'>{errors.lname}</span>}
        </Col>

        <Col>
          <Form.Control type="age"
          name="age"
          placeholder='age'
          autoComplete='off'
          onChange={handleChange}  />
           {errors.age && <span className='erred'>{errors.age}</span>}  
        </Col>
       
       
      </Row>
<br></br>

      
    <Row>

    <Col>
      <Form.Control type="email"
          name="email"
          placeholder='example@gmail.com'
          autoComplete='off'
          onChange={handleChange}  />
           {errors.email && <span className='erred'>{errors.email}</span>}  
      </Col>


      <Col>
      <Form.Control type="text"
          name="mobno"
          placeholder='mobile no'
          autoComplete='off'
          onChange={handleChange}  />
           {errors.mobno && <span className='erred'>{errors.mobno}</span>}  
      </Col>
      </Row>
      <br></br>
      <Row>
      <Col>
      <Form.Control as="textarea" rows={3} type="text"
          name="desc"
          height="50"
          placeholder='Description'
          autoComplete='off'
          onChange={handleChange}  />
           {errors.desc && <span className='erred'>{errors.desc}</span>}  
      </Col>

     
      </Row>  


       <br></br>




<Row>
  <Col>
    <Form.Control type="password"
          name="password"
          placeholder='******'
          onChange={handleChange}  />
           {errors.password && <span className='erred'>{errors.password}</span>}  
  </Col>
  <Col>
    <Form.Control type="password"
          name="confirmPassword"
          placeholder='******'
          onChange={handleChange}  />
          {errors.confirmPassword && <span className='erred'>{errors.confirmPassword}</span>}  
  </Col>
  
  </Row>
  <br></br>
  <Row>
  <Col>
    
  <Button variant="outline-secondary">Reset</Button>
  </Col>
  <Col>
    
  <Button variant="success" type="submit">Submit</Button> 
  </Col>
  
  </Row>

    </Form>

  
    </Card.Body>
    </Card>


  </div>
  </>
  )
}

export default Apply;