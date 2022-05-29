import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {EmailChangeModal, PasswordChangeModal} from './ChangeEmailModal.js';
import 'bootstrap';
import { ConstructionRounded } from '@mui/icons-material';


function SettingsPage() {
    const [emailModalShow, setEmailModalShow] = React.useState(false);
    const [passwordModalShow, setPasswordModalShow] = React.useState(false);


    return (
        <div className='settings container'>
        <div className='form'>
            <h1>Settings</h1>
                    <Form>
                        <Row className="align-items-center">
                            <Col xs="4">
                                <Form.Control placeholder="Sample Email" disabled readOnly />
                            </Col>
                            <Col xs="3">
                                <Button className="mb-2" onClick={() => setEmailModalShow(true)}>Change Email</Button>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs="4">
                                <Form.Control placeholder="**********" disabled readOnly />
                            </Col>
                            <Col xs="3">
                                <Button className="mb-2" onClick={() => setPasswordModalShow(true)}>Change Password</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="mb-2">Log Out</Button>
                            </Col>
                        </Row>
                    </Form>
                    <EmailChangeModal show={emailModalShow} onHide={() => setEmailModalShow(false)}/>
                    <PasswordChangeModal show={passwordModalShow} onHide={() => setPasswordModalShow(false)}/>
        </div>
        </div>
    )
}

export default SettingsPage