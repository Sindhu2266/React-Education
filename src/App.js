
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navi.css'
import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Aboutus  from './pages/Aboutus';
import  Contactus  from './pages/Contactus';
import Home  from './pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Online from './pages/online';
import Frontend from './pages/Front-end';
import Backend from './pages/Back-end';
import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Apply from './Components/Apply';
//import Formm from './pages/Formm';
import logiconn from './Components/Icons/logiconn.png';


function App(){
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const initialvalues = { name:"",email:"",mobileno:"", course:"" };
const [formValues, setFormValues]= useState(initialvalues);
const [formErrors, setFormErrors]= useState({});
const [isSubmit, setIsSubmit]  = useState(false);

const handlechange = (e) =>{
const {name, value}= e.target;
  setFormValues({...formValues, [name] :value });
console.log(formValues);
};

const handlesubmit = (e)=>{
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
};

useEffect(()=>{
  console.log(formErrors);
  if(Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formValues);
  }
}, [formErrors]);


const validate = (values) =>{
const errors = {};
const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
if(!values.name){
  errors.name = "name is required";
}
if(!values.email){
  errors.email = "email is required";
} else if (!regex.test(values.email)) {
  errors.email = "Not a valid Email";
}

if(!values.mobileno){
  errors.mobileno = "mobile no is required";
}
return errors;
}
return(
  <>
  <Header/>
  <Router>
    <div>

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" style={{textAlign:'right'}}>
      <Container>
        <Navbar.Brand href="/Home" className='logoname'>
          <img src={logiconn}></img>
          &nbsp;RJ Technology</Navbar.Brand>
         
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navii' as={Link} to={"/Home"}>Home</Nav.Link>
            <Nav.Link className='navii' as={Link} to={"/AboutUs"}>About us</Nav.Link>
            <NavDropdown title="Courses" id="collapsible-nav-dropdown" className='navii'>
              <NavDropdown.Item  as={Link} to={"/Frontend"}>Front-End</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Backend"}>Back-end</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link  className='navii' as={Link} to={"/Onlinetraining"}>Online Training</Nav.Link>
            <Nav.Link  className='navii' as={Link} to={"/Contactus"}>Contact</Nav.Link>
           
           
          </Nav>
          <Nav>
         
         
            <Button variant="success"  onClick={handleShow}>Enquiry</Button>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>


          Fill the form, We will get back to you  
          
    
             
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
        Object.keys(formErrors).length === 0 && isSubmit ?
        ( 
        <Alert variant="Success">Request sent Successfully</Alert> ): (<pre>{}</pre>)
        }
    

        <Form onSubmit={handlesubmit}>
          
          
        <Form.Group className="mb-3" controlId="formGroupname">
        <Form.Label>Enter your Name</Form.Label>
        <Form.Control 
        type='text' name='name' placeholder='username' 
        value={formValues.name} 
        onChange={handlechange}
        />
       <span className='erred'> {formErrors.name}</span>
        
      </Form.Group>
      
<br></br>
          <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Enter your email</Form.Label>
        <Form.Control type="email"  name='email' 
        placeholder='Email' 
        value={formValues.email}
        onChange={handlechange}
        />
        <span className='erred'>{formErrors.email}</span>
      </Form.Group>
     
      <br></br>

      <Form.Group className="mb-3" controlId="formGroupnum">
        <Form.Label>Enter your Mobile Number</Form.Label>
        <Form.Control type='text' 
         name='mobileno' placeholder='Mobile No' 
         value={formValues.mobileno} 
         onChange={handlechange}
         />
         <span className='erred'>{formErrors.mobileno}</span>
      </Form.Group>
      
      <br></br>

      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Select Course</Form.Label>
          <Form.Select 
           name='course' placeholder='Course' 
           value={formValues.course} onChange={handlechange}>
            <option>Choose...</option>
            <option>Front-end</option>
            <option>Back-end</option>
            <option>SQL</option>
            <option>Java</option>
            <option>Python</option>
          </Form.Select>
        </Form.Group>
        <br></br>

      <Button variant='success' type="submit">
        Submit
      </Button>
        </Form>



         
        </Offcanvas.Body>
      </Offcanvas>
          
   
   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
        
  
  

      {/**nav end 
  <Link to="/Home">Home</Link>
  <Link to="/Aboutus">AboutUs</Link>
  <Link to="/Contactus">Contact</Link>*/}

<Routes> 
  <Route index element={<Home/>}></Route>
  <Route exact path='/Home' element={<Home/>}></Route>
  <Route exact path='/Aboutus' element={<Aboutus/>}></Route>
  <Route exact path='/Onlinetraining' element={<Online/>}></Route>
  <Route exact path='/Frontend' element={<Frontend/>}></Route>
  <Route exact path='/Backend' element={<Backend/>}></Route>
  <Route exact path='/Contactus' element={<Contactus/>}></Route>
  <Route exact path='/Apply' element={<Apply/>}></Route>
 

</Routes>

</div>
</Router>
<Footer/>
  </>
)
}
export default App;