import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

const WeeklyScheduleGrid = ({colCount, children, md}) => {

    let rowCount = children.length

    let index = 0

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