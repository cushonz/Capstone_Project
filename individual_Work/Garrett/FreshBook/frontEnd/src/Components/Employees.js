import React from 'react'
import {Button, Accordion, Row, Col} from 'react-bootstrap'
import {NewEmployeeModal, EditEmployeeModal} from './EmployeesModals.js'

const EmployeesPage=()=>{

    //Sample data used in place of database data for demonstration purposes
    const employeeData = [
        {
          id: '0',
          name: 'Joe',
          roles: ['Chef'],
          weeklyhours: 40,
          availability: ['off', 'off', '9AM-4PM', '9AM-4PM', '9AM-9PM', '1PM-10PM', '2PM-9PM'],
          profscore: 3
        },
        {
          id: '1',
          name: 'Jessica',
          roles: ['Server'],
          weeklyhours: 40,
          availability: ['10AM-9PM', '10AM-9PM', '10AM-5PM', '10AM-9PM', '10AM-9PM', 'off', 'off'],
          profscore: 3
        },
        {
          id: '2',
          name: 'Bart',
          roles: ['Server'],
          weeklyhours: 40,
          availability: ['off', '10AM-5PM', '10AM-9PM', '10AM-9PM', 'off', '12PM-10PM', '10AM-9PM'],
          profscore: 3
        },
        {
          id: '3',
          name: 'Emanuel',
          roles: ['Chef'],
          weeklyhours: 40,
          availability: ['9AM-9PM', 'off', 'off', '4PM-10PM', '9AM-9PM', '12PM-10PM', 'off'],
          profscore: 3
        },
        {
          id: '4',
          name: 'Lauren',
          roles: ['Manager'],
          weeklyhours: 40,
          availability: ['10AM-9PM', '10AM-9PM', '10AM-9PM', '10AM-9PM', '10AM-9PM', '12PM-10PM', 'off'],
          profscore: 3
        },
        {
          id: '5',
          name: 'Tina',
          roles: ['Server'],
          weeklyhours: 40,
          availability: ['10AM-8PM', 'off', 'off', '10AM-9PM', '2PM-10PM', '9AM-10PM', '9AM-10PM'],
          profscore: 3
        },
    ]

    //state variables for modals
    const [newEmployeeModalShow, setNewEmployeeModalShow] = React.useState(false);
    const [editEmployeeModalShow, setEditEmployeeModalShow] = React.useState(false);
    const [empEventKey, setEmpEventKey] = React.useState('-1');

    //function called to open edit modal, passes employee data via props
    function renderEditModal(eventKey) {
        console.log(eventKey)
        return (
            <EditEmployeeModal {...employeeData[eventKey]} show={editEmployeeModalShow} onHide={() => setEditEmployeeModalShow(false)}/>
        )
    }

    //function to dynamically render accordion object based on number of employees
    function renderAccordion(employee) {
        return (
                <Accordion defaultActiveKey='0'>
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
                                <Button className="mb-2" onClick={() => {setEmpEventKey(employee.id); setEditEmployeeModalShow(true)}}>Edit Employee</Button>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
        )
    }

    //main page display
    return (
        <div className='employees container'>
            <h1>Employees Page</h1>
            <br></br>
            {employeeData.map(renderAccordion)}
            <Button className="mb-2" onClick={() => setNewEmployeeModalShow(true)}>Create Employee</Button>
            <NewEmployeeModal show={newEmployeeModalShow} onHide={() => setNewEmployeeModalShow(false)}/>
            {empEventKey >= 0  && empEventKey < employeeData.length &&
                renderEditModal(empEventKey)
            }
        </div>
    )
}

export default EmployeesPage;