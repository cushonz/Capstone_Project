import React from 'react'
import {Form, Button} from 'react-bootstrap'

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
    /*return (
        <div className='employees container'>
            <h1>Employees Page</h1>
            <EmployeeAccordion>
                {employees.length > 0 ? employees.map(item =>
                    <Item
                        key={item.id}
                        id={item.id}
                        roles={item.roles}
                        weeklyhours={item.weeklyhours}
                        availability={item.availability}
                        profscore={item.profscore}
                    />) : [<p>No employees are found.</p>]
                }
            </EmployeeAccordion>
        </div>
    )*/
}

export default EmployeesPage;