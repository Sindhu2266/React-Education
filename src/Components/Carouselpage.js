import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img24 from './images/img24.jpg'
import img23 from './images/img23.jpg'
import img3 from './images/img3.jpg'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './css/carousel.css';


function Carouselpage() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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
 
  alert("Form Submitted successfully")
}
  }


  return (
    <div>
       
       <Carousel data-bs-theme="light">
      <Carousel.Item>
        
        <img style={{height:'70vh'}}
          className="d-block w-100"
          src={img24}
          alt="First slide"
        />
        
        
        <Carousel.Caption style={{textAlign:'left'}}>
         <span className='banhead'> RJ Technology</span>
         <br></br>
         <h5>Best Online and Classroom Training</h5>
         <br></br>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed libero tellus. 
          Nulla facilisi. Ut molestie porttitor nulla, ornare tempor orci egestas id. Praesent et eros ligula. 
          Praesent sit amet luctus justo. Cras eleifend ultricies lorem, eget placerat est finibus quis. 
          Sed lacinia imperdiet ante non vehicula.
          </p>
          
          <Button variant="success" onClick={handleShow}>
        Apply Online
      </Button>

      
      

          {/*end slide 1  */}
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'70vh'}}
          className="d-block w-100"
          src={img23}
          alt="Second slide"
        />
        <Carousel.Caption style={{textAlign:'left'}}>
        <span className='banhead'> RJ Technology</span>
        <br></br>
        <h5>Best Online and Classroom Training</h5>
        <br></br>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed libero tellus. 
          Nulla facilisi. Ut molestie porttitor nulla, ornare tempor orci egestas id. Praesent et eros ligula. 
          Praesent sit amet luctus justo. Cras eleifend ultricies lorem, eget placerat est finibus quis. 
          Sed lacinia imperdiet ante non vehicula.
          </p>
          <Button variant="success" onClick={handleShow}>
          Apply Online
      </Button>

      

          {/*end slide 2 */}



        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'70vh'}}
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption style={{textAlign:'left'}}>
        <span className='banhead'> RJ Technology</span>
        <br></br> 
        <h5>Best Online and Classroom Training</h5>
        <br></br>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed libero tellus. 
          Nulla facilisi. Ut molestie porttitor nulla, ornare tempor orci egestas id. Praesent et eros ligula. 
          Praesent sit amet luctus justo. Cras eleifend ultricies lorem, eget placerat est finibus quis. 
          Sed lacinia imperdiet ante non vehicula.
          </p>
          <Button variant="success" onClick={handleShow}>
          Apply Online
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Quick Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control 
           type="text"
          name="username"
          placeholder='username'  
          autoComplete='off'  
          onChange={handleChange}   />
          {errors.username && <span className='erred'>{errors.username}</span>}  

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"
          name="email"
          placeholder='example@gmail.com'
          autoComplete='off'
          onChange={handleChange}  />
           {errors.email && <span className='erred'>{errors.email}</span>}  
       <br></br>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comments</Form.Label>
              <Form.Control as="textarea" rows={3} type="text"
          name="msg"
          placeholder='Message'
          autoComplete='off'
          onChange={handleChange}  />
           {errors.msg && <span className='erred'>{errors.msg}</span>}  
       <br></br>


            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

          {/*end slide 3 */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carouselpage