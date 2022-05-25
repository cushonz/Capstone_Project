import React from 'react'
import { Link } from 'react-router-dom'

const HomePage=()=>{
    return (
        <div className='home container'>
            <h1>Welcome to your business</h1>
            <Link to="sign-up" className='btn btn-primary btn-lg'>Sign Up</Link>
            <Link to="login" className='btn btn-primary btn-lg'>Log In</Link>
        </div>
    )
}

export default HomePage