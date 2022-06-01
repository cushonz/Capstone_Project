import React from 'react'
import {Form, Modal, Button} from 'react-bootstrap'

export {
    EditRoleModal,
    NewRoleModal
}

function EditRoleModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Edit Role
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group>
                <Form.Label><b>Change Quantity</b></Form.Label>
                <Form.Control placeholder={props.quantity} name="roleQuantity"/>
            </Form.Group>
            <b></b>
            <Button className= 'mb-2' type='submit' onClick={props.onHide}>Submit</Button>
        </Modal.Body>
        </Modal>
    )
}

function NewRoleModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                New Role
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group>
                <Form.Label><b>Monday Quantity</b></Form.Label>
                <Form.Control placeholder="Ex: 2" name="monQuantity"/>
                <Form.Label><b>Tuesday Quantity</b></Form.Label>
                <Form.Control placeholder="Ex: 2" name="monQuantity"/>
                <Form.Label><b>Wednesday Quantity</b></Form.Label>
                <Form.Control placeholder="Ex: 2" name="monQuantity"/>
                <Form.Label><b>Thursday Quantity</b></Form.Label>
                <Form.Control placeholder="Ex: 2" name="monQuantity"/>
                <Form.Label><b>Friday Quantity</b></Form.Label>
                <Form.Control placeholder="Ex: 2" name="monQuantity"/>
                <Form.Label><b>Saturday Quantity</b></Form.Label>
                <Form.Control placeholder="Ex: 2" name="monQuantity"/>
                <Form.Label><b>Sunday Quantity</b></Form.Label>
                <Form.Control placeholder="Ex: 2" name="monQuantity"/>
            </Form.Group>
            <b></b>
            <Button className= 'mb-2' type='submit' onClick={props.onHide}>Submit</Button>
        </Modal.Body>
        </Modal>
    )
}