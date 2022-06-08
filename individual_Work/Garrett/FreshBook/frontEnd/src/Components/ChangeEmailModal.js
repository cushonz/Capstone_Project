//  Written by Nate Goodman

import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import {useForm} from 'react-hook-form'

//Exporting modal functions for use in Settings.js
export {
    EmailChangeModal,
    PasswordChangeModal
}

//Function for displaying Change Email Modal
function EmailChangeModal(props) {

  //variables for use in form submits
  const {register, watch, handleSubmit, reset, formState:{errors}} = useForm();

  //attempted function for submission of data from Change Email Modal to backend
  const submitEmailForm=(data)=>{

    if(data.email === data.confirmEmail){
      const body ={
        email : data.email,
      }

      const requestOptions = {
        method : "PUT",
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(body)
      }
  
          fetch('/user/user/1', requestOptions)
          .then(res=>res.json())
          .then(data=>console.log(data))
          .catch(err=>console.log(err))
          
          reset();
      }else{
          alert("Emails do not match")
      }
  }

  //main modal display
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change Email
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label><b>New Email</b></Form.Label>
          <Form.Control type="email" 
            placeholder="Enter new email"
            name = "email"
            {...register("email", {required:true, maxLength: 40})}
          />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label><b>Confirm New Email</b></Form.Label>
          <Form.Control type="email"
            placeholder="Confirm new email"
            name = "email confirm"
            {...register("comfirmEmail", {required:true, maxLength: 40})}
          />
        </Form.Group>  
      </Modal.Body>
      <Modal.Footer>
        <Button className="mb-2" onClick={props.onHide}>Next</Button>
      </Modal.Footer>
    </Modal>
    );
  }



//Function for displaying Change Password Modal
function PasswordChangeModal(props) {

  //variables for use in form submits
  const {register, watch, handleSubmit, reset, formState:{errors}} = useForm();

  //attempted function for submission of data from Change Password Modal to backend
  const submitPasswordForm=(data)=>{

    if(data.password === data.confirmPassword){
      const body ={
        password : data.password
      }
  
      const requestOptions = {
        method : "PUT",
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(body)
      }
  
        fetch('/user/user/1', requestOptions)
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
          
        reset();
      }else{
          alert("Passwords do not match")
      }
  }

  //main modal display  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label><b>New Password</b></Form.Label>
          <Form.Control type="password" 
            placeholder="Enter new password"
            name = "password"
            {...register("password", {required:true, maxLength: 40})}
          />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label><b>Confirm New Password</b></Form.Label>
            <Form.Control type="password"
              placeholder="Confirm new password"
              name = "password confirm"
              {...register("confirmPassword", {required:true, maxLength: 40})}
            />
        </Form.Group>    
      </Modal.Body>
      <Modal.Footer>
        <Button className="mb-2" onClick={props.onHide}>Next</Button>
      </Modal.Footer>
    </Modal>
  );
}