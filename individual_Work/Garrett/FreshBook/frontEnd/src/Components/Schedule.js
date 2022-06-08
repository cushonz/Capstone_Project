//  Written by Nate Goodman

import React from 'react'
import WeeklyScheduleGrid from './WeeklyScheduleGrid';
import {Button} from 'react-bootstrap'

const SchedulePage=()=>{

  //Sample data for display purposes  
  const employees = [
        {
          id: 0,
          name: 'Joe',
          schedule: ['off', 'off', '9AM-4PM', '9AM-4PM', '9AM-9PM', '1PM-10PM', '2PM-9PM']
        },
        {
          id: 1,
          name: 'Jessica',
          schedule: ['10AM-9PM', '10AM-9PM', '10AM-5PM', '10AM-9PM', '10AM-9PM', 'off', 'off']
        },
        {
          id: 2,
          name: 'Bart',
          schedule: ['off', '10AM-5PM', '10AM-9PM', '10AM-9PM', 'off', '12PM-10PM', '10AM-9PM']
        },
        {
          id: 3,
          name: 'Emanuel',
          schedule: ['9AM-9PM', 'off', 'off', '4PM-10PM', '9AM-9PM', '12PM-10PM', 'off']
        },
        {
          id: 4,
          name: 'Lauren',
          schedule: ['10AM-9PM', '10AM-9PM', '10AM-9PM', '10AM-9PM', '10AM-9PM', '12PM-10PM', 'off']
        },
        {
          id: 5,
          name: 'Tina',
          schedule: ['10AM-8PM', 'off', 'off', '10AM-9PM', '2PM-10PM', '9AM-10PM', '9AM-10PM']
        },
  ]

  const Item = props => {
      const {name, schedule} = props

      return (
          <div className = 'employee'>   
              <Button className="nameTile">{name}</Button>
              <Button className="calendarTile">{schedule[0]}</Button> 
              <Button className="calendarTile">{schedule[1]}</Button> 
              <Button className="calendarTile">{schedule[2]}</Button> 
              <Button className="calendarTile">{schedule[3]}</Button> 
              <Button className="calendarTile">{schedule[4]}</Button>
              <Button className="calendarTile">{schedule[5]}</Button>
              <Button className="calendarTile">{schedule[6]}</Button>   
          </div>
      )
  }

  //main page display
  return (
    <div className='schedule container'>
      <h1>Weekly Schedule</h1>
      <WeeklyScheduleGrid colCount={7} md={1}>
        {employees.length > 0 ? employees.map(item =>
          <Item 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            schedule={item.schedule} 
          />
        ) : [<p>No employees are found.</p>]
        }
      </WeeklyScheduleGrid>
    </div>
    )
}

export default SchedulePage