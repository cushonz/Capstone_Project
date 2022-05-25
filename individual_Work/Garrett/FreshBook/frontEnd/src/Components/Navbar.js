import React from 'react'
import { Link } from 'react-router-dom'

const Navbar =()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">My Business</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link active" to="/schedule">Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/employees">Employees</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/fresh-produce">Fresh Produce</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/settings">Settings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/sign-up">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar