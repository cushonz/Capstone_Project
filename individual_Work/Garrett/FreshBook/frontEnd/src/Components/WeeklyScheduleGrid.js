//  Written by Nate Goodman

import React from 'react';
import {Row,Container, Button} from 'react-bootstrap'

//function to format schedule buttons in a calendar-shaped grid
const WeeklyScheduleGrid = ({colCount, children, md}) => {

    let rowCount = children.length

    let index = 0

    //creates array of each employees work schedule starting with day of the week tiles at the top
    const renderRows = () => {
        let rows = []

        rows.push(
            <Row className="Row">
                <div className="employee">
                    <Button className="invisibleTile" disabled/>
                    <Button className="dayTile" disabled>Mon</Button> 
                    <Button className="dayTile" disabled>Tue</Button> 
                    <Button className="dayTile" disabled>Wed</Button> 
                    <Button className="dayTile" disabled>Thur</Button> 
                    <Button className="dayTile" disabled>Fri</Button> 
                    <Button className="dayTile" disabled>Sat</Button> 
                    <Button className="dayTile" disabled>Sun</Button> 
                </div>
            </Row>
        )

        //pushes each row of employee data to array of rows to be displayed vertically
        for(let row = 0; row < rowCount; row++) {
            rows.push(
                <Row className='Row'>
                    {
                        children[index]
                    }
                </Row>
            )
            index++
        }
        return rows
    }

    return (
        <Container className='Container'>
            {
                renderRows()
            }
        </Container>
    )

}

export default WeeklyScheduleGrid;