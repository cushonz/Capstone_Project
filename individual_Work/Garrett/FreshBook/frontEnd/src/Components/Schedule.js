import React from 'react'
import WeeklyScheduleGrid from './WeeklyScheduleGrid';
import {Row, Col, Container, Button} from 'react-bootstrap'

const SchedulePage=()=>{

    const employees = [
        {
          id: 0,
          name: 'Nate',
          schedule: ['2PM-8PM', '4PM-10PM', '2PM-8PM', '10AM-2PM', '2PM-8PM', '6PM-10PM', '8AM-3PM']
        },
        {
          id: 1,
          name: 'Abdi',
          schedule: ['2PM-8PM', '4PM-10PM', '2PM-8PM', '10AM-2PM', '2PM-8PM', '6PM-10PM', '8AM-3PM']
        },
        {
          id: 2,
          name: 'Garrett',
          schedule: ['2PM-8PM', '4PM-10PM', '2PM-8PM', '10AM-2PM', '2PM-8PM', '6PM-10PM', '8AM-3PM']
        },
        {
          id: 3,
          name: 'Zach',
          schedule: ['2PM-8PM', '4PM-10PM', '2PM-8PM', '10AM-2PM', '2PM-8PM', '6PM-10PM', '8AM-3PM']
        },
        {
          id: 4,
          name: 'Manni',
          schedule: ['2PM-8PM', '4PM-10PM', '2PM-8PM', '10AM-2PM', '2PM-8PM', '6PM-10PM', '8AM-3PM']
        },
        {
          id: 5,
          name: 'Adam',
          schedule: ['2PM-8PM', '4PM-10PM', '2PM-8PM', '10AM-2PM', '2PM-8PM', '6PM-10PM', '8AM-3PM']
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