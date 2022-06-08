//  Written by Nate Goodman

import React from 'react'
import {Form, Modal, Button} from 'react-bootstrap'

//exporting Modal functions for use in Employees.js
export {
    NewEmployeeModal,
    EditEmployeeModal
}

//function to display New Employee modal card
function NewEmployeeModal(props) {
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
                    <Form.Label><b>Name</b></Form.Label>
                    <Form.Control placeholder="Name" name="employeeName"/>
                </Form.Group>
                <b></b>
                <Form.Group>
                    <Form.Label><b>Roles</b></Form.Label>
                    <Form.Control placeholder="Ex: Server, Chef" name="roles"/>
                </Form.Group>
                <b></b>
                <Form.Group>
                        <Form.Label>Monday Availability</Form.Label>
                        <Form.Control placeholder="Ex: 2PM-8PM" name="monAvailability"/>
                        <Form.Label>Tuesday Availability</Form.Label>
                        <Form.Control placeholder="Ex: 2PM-8PM" name="tueAvailability"/>
                        <Form.Label>Wednesday Availability</Form.Label>
                        <Form.Control placeholder="Ex: 2PM-8PM" name="wedAvailability"/>
                        <Form.Label>Thursday Availability</Form.Label>
                        <Form.Control placeholder="Ex: 2PM-8PM" name="thurAvailability"/>
                        <Form.Label>Friday Availability</Form.Label>
                        <Form.Control placeholder="Ex: 2PM-8PM" name="friAvailability"/>
                        <Form.Label>Saturday Availability</Form.Label>
                        <Form.Control placeholder="Ex: 2PM-8PM" name="satAvailability"/>
                        <Form.Label>Sunday Availability</Form.Label>
                        <Form.Control placeholder="Ex: 2PM-8PM" name="tueAvailability"/>
                </Form.Group>
                <b></b>
                <Form.Group>
                    <Form.Label><b>Proficiency Rating</b></Form.Label>
                    <Form.Control placeholder="Ex: 2.5" name="profScore"/>
                </Form.Group>
                <b></b>
                <Button className= 'mb-2' type='submit' onClick={props.onHide}>Submit</Button>
            </Modal.Body>
        </Modal>
    )
}

//function to display Edit Employee modal card. Uses props data for display of current employee information
function EditEmployeeModal(props) {
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
                    <Form.Label><b>Name</b></Form.Label>
                    <Form.Control placeholder={props.name} name="employeeName"/>
                </Form.Group>
                <b></b>
                <Form.Group>
                    <Form.Label><b>Roles</b></Form.Label>
                    <Form.Control placeholder={props.roles} name="roles"/>
                </Form.Group>
                <b></b>
                <Form.Group>
                        <Form.Label>Monday Availability</Form.Label>
                        <Form.Control placeholder={props.availability[0]} name="monAvailability"/>
                        <Form.Label>Tuesday Availability</Form.Label>
                        <Form.Control placeholder={props.availability[1]} name="tueAvailability"/>
                        <Form.Label>Wednesday Availability</Form.Label>
                        <Form.Control placeholder={props.availability[2]} name="wedAvailability"/>
                        <Form.Label>Thursday Availability</Form.Label>
                        <Form.Control placeholder={props.availability[3]} name="thurAvailability"/>
                        <Form.Label>Friday Availability</Form.Label>
                        <Form.Control placeholder={props.availability[4]} name="friAvailability"/>
                        <Form.Label>Saturday Availability</Form.Label>
                        <Form.Control placeholder={props.availability[5]} name="satAvailability"/>
                        <Form.Label>Sunday Availability</Form.Label>
                        <Form.Control placeholder={props.availability[6]} name="tueAvailability"/>
                </Form.Group>
                <b></b>
                <Form.Group>
                    <Form.Label><b>Proficiency Rating</b></Form.Label>
                    <Form.Control placeholder={props.profscore} name="profScore"/>
                </Form.Group>
                <b></b>
                <Button className= 'mb-2' type='submit' onClick={props.onHide}>Submit</Button>
            </Modal.Body>
        </Modal>
    )
}