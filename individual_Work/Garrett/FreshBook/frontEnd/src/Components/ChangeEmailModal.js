import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'

export {
    EmailChangeModal,
    PasswordChangeModal
}

  function EmailChangeModal(props) {
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
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Label><b>Confirm New Email</b></Form.Label>
                <Form.Control type="email"
                    placeholder="Confirm new email"
                    name = "email confirm"
                />
                </Form.Group>  
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function PasswordChangeModal(props) {
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
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Label><b>Confirm New Password</b></Form.Label>
                <Form.Control type="password"
                    placeholder="Confirm new password"
                    name = "password confirm"
                />
                </Form.Group>  
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }