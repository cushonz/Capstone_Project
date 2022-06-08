//  Written by Nate Goodman

import React from 'react'
import {Row, Button} from 'react-bootstrap'
import {EditRoleModal, NewRoleModal} from './RolesModals';
import WeeklyScheduleGrid from './WeeklyScheduleGrid.js'

//Sample data for display purposes
const RolesPage=()=>{
    const roles = [
        {
            roleID: '0',
            roleName: 'Chef',
            quantity: ['1', '1', '1', '2', '3', '3', '2']
        },
        {
            roleID: '1',
            roleName: 'Server',
            quantity: ['3', '3', '4', '5', '5', '5', '4']
        },
        {
            roleID: '2',
            roleName: 'Manager',
            quantity: ['1', '2', '1', '1', '2', '2', '2']
        },
    ]

    //State variables
    const [newRoleModalShow, setNewRoleModalShow] = React.useState(false);
    const [editRoleModalShow, setEditRoleModalShow] = React.useState(false);
    const [eventKeyX, setEventKeyX] = React.useState('-1');
    const [eventKeyY, setEventKeyY] = React.useState('-1');

    //function to render Edit Role Modal on click
    function renderEditRoleModal(keyX, keyY) {
        console.log(keyX)
        console.log(keyY)
        return (
            <EditRoleModal quantity={roles[keyY].quantity[keyX]}  show={editRoleModalShow} onHide={() => setEditRoleModalShow(false)}/>
        )
    }

    //Creating Item to pass to modals for information display
    const Item = props => {
        const {roleID, roleName, quantity} = props

        return (
            <div className = 'role'>   
                <Button className="nameTile">{roleName}</Button>
                <Button className="calendarTile" onClick={() => {setEventKeyX(0); setEventKeyY(roleID); setEditRoleModalShow(true)}}>{quantity[0]}</Button> 
                <Button className="calendarTile" onClick={() => {setEventKeyX(1); setEventKeyY(roleID); setEditRoleModalShow(true)}}>{quantity[1]}</Button> 
                <Button className="calendarTile" onClick={() => {setEventKeyX(2); setEventKeyY(roleID); setEditRoleModalShow(true)}}>{quantity[2]}</Button>                   
                <Button className="calendarTile" onClick={() => {setEventKeyX(3); setEventKeyY(roleID); setEditRoleModalShow(true)}}>{quantity[3]}</Button> 
                <Button className="calendarTile" onClick={() => {setEventKeyX(4); setEventKeyY(roleID); setEditRoleModalShow(true)}}>{quantity[4]}</Button>
                <Button className="calendarTile" onClick={() => {setEventKeyX(5); setEventKeyY(roleID); setEditRoleModalShow(true)}}>{quantity[5]}</Button>
                <Button className="calendarTile" onClick={() => {setEventKeyX(6); setEventKeyY(roleID); setEditRoleModalShow(true)}}>{quantity[6]}</Button>   
            </div>
        )
    }

    //main page display
    return (
        <div className='roles container'>
            <h1>Roles Page</h1>
            <WeeklyScheduleGrid colCount={7} md={1}>
                {roles.length > 0 ? roles.map(item =>
                     <Item 
                        key={item.id} 
                        id={item.id} 
                        roleName={item.roleName} 
                        quantity={item.quantity} 
                      />
                ) : [<p>No roles are found.</p>]
                }
            </WeeklyScheduleGrid>
            <Row className="addRoleRow">
                <Button className="modInvisibleTile" disabled/>
                <Button className="addRole" onClick={() => setNewRoleModalShow(true)}>Add Role</Button>
            </Row>
            {eventKeyX >= 0 && eventKeyX < 8 && eventKeyY >=0 && eventKeyY < roles.length &&
                renderEditRoleModal(eventKeyX, eventKeyY)
            }
            <NewRoleModal show={newRoleModalShow} onHide={() => setNewRoleModalShow(false)}/>
        </div>
    )
}

export default RolesPage