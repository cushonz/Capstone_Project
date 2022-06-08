//  Written by Nate Goodman and Garrett Marshall

import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginPage=()=>{
    
    //state variables
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser=()=>{
        console.log(email);
        console.log(password);

        setEmail('')
        setPassword('')
    }

    //main page display
    return (
        <div className='login container'>
            <div className='form'>
                <h1>Login Page</h1>
                <form>
                    <Form.Group>
                        <Form.Label><b>Email</b></Form.Label>
                        <Form.Control type="email" 
                            placeholder="Enter your Email"
                            value = {email}
                            name = "email"
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password"
                            placeholder="Enter a password"
                            value = {password}
                            name = "password"
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </Form.Group>  
                    <br></br>
                    <Form.Group>
                        <Button as="sub" variant='primary' className="mb-2" onClick={loginUser}>Log In</Button>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <small>Do not have an account? <Link to="/sign-up">Create an Account</Link></small>
                    </Form.Group>
                </form>
            </div>
        </div>
    )
}

export default LoginPage