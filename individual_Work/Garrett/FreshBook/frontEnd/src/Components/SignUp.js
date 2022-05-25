import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'

const SignUpPage=()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const {register, watch, handleSubmit, reset, formState:{errors}} = useForm();

    const submitForm=(data)=>{

        if(data.password === data.confirmPassword){
            const body ={
                email : data.email,
                password : data.password
            }

            const requestOptions = {
                method : "POST",
                headers : {'content-type' : 'application/json'},
                body : JSON.stringify(body)
            }
    
            fetch('/auth/signup', requestOptions)
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
            
            reset();
        }else{
            alert("Passwords do not match")
        }
    }

    return (
        <div className='sign-up container'>
            <div className='form'>
                <h1>Sign Up Page</h1>
                <form>
                    <Form.Group>
                        <Form.Label><b>Email</b></Form.Label>
                        <Form.Control type="email" 
                            placeholder="Enter your Email"
                            {...register("email", {required:true, maxLength: 40})}
                        />
                        {errors.email && <p style={{color:"red"}}><small>Email is required</small></p>}
                        {/* <br></br>
                        {errors.email.type==="maxLength"&&<span style={{color:"red"}}>Email is too long</span>} */}
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password"
                            placeholder="Enter a password"
                            {...register("password", {required:true, minLength: 7})}
                        />
                        {errors.password && <p style={{color:"red"}}><small>Password is required</small></p>}
                    </Form.Group>
                    <br></br>
                    <Form.Group>    
                        <Form.Label><b>Confirm Password</b></Form.Label>
                        <Form.Control type="password"
                            placeholder="Re-enter your password"
                            {...register("confirmPassword", {required:true, minLength: 7})}
                        />
                        {errors.confirmPassword && <p style={{color:"red"}}><small>Confirm Password is required</small></p>}
                    </Form.Group>
                    <Form.Group>
                        <Button as="sub" variant='primary' onClick={handleSubmit(submitForm)}>Sign Up</Button>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <small>Already have an account? <Link to="/login">Log in</Link></small>
                    </Form.Group>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage