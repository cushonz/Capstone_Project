import React from 'react'
import {Form, Button, Accordion, Row, Col, Modal} from 'react-bootstrap'
import {NewEmployeeModal, EditEmployeeModal} from './EmployeesModals.js'

const EmployeesPage=()=>{

   /* const createEmployee(data)=>{
        const body ={
            firstName : data.firstName,
            lastName : data.lastName,
        }

        const requestOptions = {
            method : "POST",
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(body)
        }

        fetch('/employee/employees', requestOptions)
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))

        reset();
    }
    */

    const employeeData = [
        {
          id: 0,
          name: 'Nate',
          roles: ['Server', 'Chef'],
          weeklyhours: 40,
          availability: ['2PM-8PM', '1PM-5PM', '10AM-4PM', '1PM-5PM', '2PM-10PM', 'off', 'off'],
          profscore: 3
        },
        {
          id: 1,
          name: 'Abdi',
          roles: ['Server', 'Chef'],
          weeklyhours: 40,
          availability: ['2PM-8PM', '1PM-5PM', '10AM-4PM', '1PM-5PM', '2PM-10PM', 'off', 'off'],
          profscore: 3
        },
        {
          id: 2,
          name: 'Garrett',
          roles: ['Server', 'Chef'],
          weeklyhours: 40,
          availability: ['2PM-8PM', '1PM-5PM', '10AM-4PM', '1PM-5PM', '2PM-10PM', 'off', 'off'],
          profscore: 3
        },
        {
          id: 3,
          name: 'Zach',
          roles: ['Server', 'Chef'],
          weeklyhours: 40,
          availability: ['2PM-8PM', '1PM-5PM', '10AM-4PM', '1PM-5PM', '2PM-10PM', 'off', 'off'],
          profscore: 3
        },
        {
          id: 4,
          name: 'Manni',
          roles: ['Server', 'Chef'],
          weeklyhours: 40,
          availability: ['2PM-8PM', '1PM-5PM', '10AM-4PM', '1PM-5PM', '2PM-10PM', 'off', 'off'],
          profscore: 3
        },
        {
          id: 5,
          name: 'Adam',
          roles: ['Server', 'Chef'],
          weeklyhours: 40,
          availability: ['2PM-8PM', '1PM-5PM', '10AM-4PM', '1PM-5PM', '2PM-10PM', 'off', 'off'],
          profscore: 3
        },
    ]

    const [newEmployeeModalShow, setNewEmpoyeeModalShow] = React.useState(false);
    const [editEmployeeModalShow, setEditEmployeeModalShow] = React.useState(false);


    const renderAccordion = (employee, index) => {
        return (
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventkey={employee.id}>
                        <Accordion.Header>
                            {employee.name}
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col>
                                    Roles: 
                                </Col>
                                <Col>
                                    {employee.roles}
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col>
                                    Weekly Hours: 
                                </Col>
                                <Col>
                                    {employee.weeklyhours}
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col>
                                    Availability:
                                </Col>
                                <Col>
                                    <Row>
                                        Mon: {employee.availability[0]}
                                    </Row>
                                    <Row>
                                        Tue: {employee.availability[1]}
                                    </Row>
                                    <Row>
                                        Wed: {employee.availability[2]}
                                    </Row>
                                    <Row>
                                        Thur: {employee.availability[3]}
                                    </Row>
                                    <Row>
                                        Fri: {employee.availability[4]}
                                    </Row>
                                    <Row>
                                        Sat: {employee.availability[5]}
                                    </Row>
                                    <Row>
                                        Sun: {employee.availability[6]}
                                    </Row>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col>
                                    Proficiency: 
                                </Col>
                                <Col>
                                    {employee.profscore}
                                </Col>
                            </Row>
                            <Row>
                                <Button className="mb-2" onClick={() => setEditEmployeeModalShow(true)}>Edit Employee</Button>
                            </Row>
                        </Accordion.Body>
                        <EditEmployeeModal 
                            show={editEmployeeModalShow} 
                            onHide={() => setEditEmployeeModalShow(false)}
                            employeeName={employee.name}
                            roles ={employee.roles}
                            weeklyHours={employee.weeklyHours}
                            availability={employee.availability}
                            profScore={employee.profScore}
                        >
                        </EditEmployeeModal>
                    </Accordion.Item>
                </Accordion>
        )
    }

    /*const Item = props => {
        const {name, id, roles, availability, profScore} = props

        return (
        <Modal
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
                    <Form.Control placeholder={name} name="employeeName"/>
                </Form.Group>
                <b></b>
                <Form.Group>
                    <Form.Label><b>Roles</b></Form.Label>
                    <Form.Control placeholder={roles} name="roles"/>
                </Form.Group>
                <b></b>
                <Form.Group>
                        <Form.Label>Monday Availability</Form.Label>
                        <Form.Control placeholder={availability[0]} name="monAvailability"/>
                        <Form.Label>Tuesday Availability</Form.Label>
                        <Form.Control placeholder={availability[1]} name="tueAvailability"/>
                        <Form.Label>Wednesday Availability</Form.Label>
                        <Form.Control placeholder={availability[2]} name="wedAvailability"/>
                        <Form.Label>Thursday Availability</Form.Label>
                        <Form.Control placeholder={availability[3]} name="thurAvailability"/>
                        <Form.Label>Friday Availability</Form.Label>
                        <Form.Control placeholder={availability[4]} name="friAvailability"/>
                        <Form.Label>Saturday Availability</Form.Label>
                        <Form.Control placeholder={availability[5]} name="satAvailability"/>
                        <Form.Label>Sunday Availability</Form.Label>
                        <Form.Control placeholder={availability[6]} name="tueAvailability"/>
                </Form.Group>
                <b></b>
                <Form.Group>
                    <Form.Label><b>Proficiency Rating</b></Form.Label>
                    <Form.Control placeholder={profScore} name="profScore"/>
                </Form.Group>
                <b></b>
                <Button className= 'md-2' type='submit'>Submit</Button>
            </Modal.Body>
        </Modal>
        )
  }*/

    return (
        <div className='employees container'>
            <h1>Employees Page</h1>
            <br></br>
            {employeeData.map(renderAccordion)}
            <Button className="mb-2" onClick={() => setNewEmpoyeeModalShow(true)}>Create Employee</Button>
            <NewEmployeeModal show={newEmployeeModalShow} onHide={() => setNewEmpoyeeModalShow(false)}/>
        </div>
    )
}

export default EmployeesPage;


/*<EditEmployeeModal show={editEmployeeModalShow} onHide={() => setEditEmployeeModalShow(false)}>
                {employeeData.length > 0 ? employeeData.map(item =>
                    <Item
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        roles={item.roles}
                        availability={item.availability}
                        profScore={item.profScore}
                    />
                ) : [<p>No employees are found.</p>]
                }
            </EditEmployeeModal>*/