import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [show,setShow]=useState(true);
  const getValue= (e)=>{
    let input=e.target;
    if(input.type ==="file"){
console.log(input.files[0]);
    }
    else{
console.log(input.value);
    }
  
console.log(input.files);
let val=input.value;
document.getElementById("abc").innerHTML=val;

  }
  return (
   
    <Container >
      {/* <Button className='bg-danger'>
        <i className='fa fa-plus'></i>   Add user
      </Button> */}
      <Button variant='success' onClick={()=> setShow(true)}>
        <i className='fa fa-plus'></i>   Add user
      </Button>
      <h1 id="abc"></h1>

      <Modal show={show}>
        <Modal.Header closeButton onClick={()=>setShow(false)} >
          <Modal.Title >Registration form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
              {/* <div className='form-group'>
            <label for='name'className='form-label'>Full name</label>
            <input type='text'name='name' classNme="form-control"/>
            </div> */}
            <Form.Group>
              <Form.Label >Full name</Form.Label>
              <Form.Control type='text' name='name' placeholder='full name'onChange={getValue}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label >Email</Form.Label>
              <Form.Control type='Email' name='email' placeholder='enter yoyr email' onChange={getValue}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label >Password</Form.Label>
              <Form.Control type='password' name='password' placeholder='enter password' onChange={getValue}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label >Contact</Form.Label>
              <Form.Control type='tel' name='mob' placeholder='enter your mobile number' onChange={getValue}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label >Profile</Form.Label>
              <Form.Control type='file' name='pic' placeholder='uplod your picture'onChange={getValue}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button type='submit'>submit</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=> setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
