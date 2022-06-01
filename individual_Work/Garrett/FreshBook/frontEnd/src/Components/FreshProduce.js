import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap';

const FreshProducePage=()=>{
    
  
    
    return (
        <div className='fresh-produce container'>
            <h1>Fresh Produce Page</h1>
                    <Form>
                        <Row className="align-items-center">
                            <Col xs="6">
                                <Row xs="6"></Row>
                            <h4>Input Last Two weeks (14 days) of sales</h4>
                                <Form.Control placeholder="Input last two weeks (14 days) of sales"  />
                            </Col>
                            <Col xs="3">
                                <Button className="mb-2" >Generate</Button>
                            </Col>
                        
                        </Row>
                        <br></br>
                    
                        <Row >
                            <Col >
                            <h4>Prediction Results</h4>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                             <Form.Control as="textarea" rows={3} disabled readOnly/>
                             </Form.Group>
                            </Col>
                            <Col xs="3">
                            <div class="dropdown mt-3">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="number-dropdown" data-bs-toggle="dropdown">
                                    30 days
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="number-dropdown">
                                    <li><a href="#" class="dropdown-item">60 days</a></li>
                                    <li><a href="#" class="dropdown-item">90 days</a></li>
                                    <li><a href="#" class="dropdown-item">120 days</a></li>
                                </ul>
                            </div>
                            </Col>
                        </Row>
                       
                    </Form>
        </div>

    
    )
  
}

export default FreshProducePage