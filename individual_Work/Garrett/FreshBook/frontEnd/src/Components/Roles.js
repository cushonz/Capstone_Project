import React from 'react'
import {Button} from 'react-bootstrap'
import WeeklyScheduleGrid from './WeeklyScheduleGrid';

const RolesPage=()=>{
    const roles = [
        {
            roleName: 'Chef',
            quantity: ['1', '1', '1', '2', '3', '3', '2']
        },
        {
            roleName: 'Server',
            quantity: ['3', '3', '4', '5', '5', '5', '4']
        },
        {
            roleName: 'Manager',
            quantity: ['1', '2', '1', '1', '2', '2', '2']
        },
    ]

const Item = props => {
    const {roleName, quantity} = props

    return (
        <div className = 'role'>   
            <Button className="roleNameTile">{roleName}</Button>
            <Button className="roleDayTile">{quantity[0]}</Button> 
            <Button className="roleDayTile">{quantity[1]}</Button> 
            <Button className="roleDayTile">{quantity[2]}</Button>                   
            <Button className="roleDayTile">{quantity[3]}</Button> 
            <Button className="roleDayTile">{quantity[4]}</Button>
            <Button className="roleDayTile">{quantity[5]}</Button>
            <Button className="roleDayTile">{quantity[6]}</Button>   
        </div>
    )
  }

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
        </div>
    )
}

export default RolesPage