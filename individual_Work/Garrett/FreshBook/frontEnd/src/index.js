import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/Home';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import SignUpPage from './Components/SignUp';
import LoginPage from './Components/Login';
import SettingsPage from './Components/Settings';
import FreshProducePage from './Components/FreshProduce';
import EmployeesPage from './Components/Employees';
import SchedulePage from './Components/Schedule';

const App=()=>{

    return (
        <Router>
        <div className = "">
            <Navbar/>
            <Routes>
                <Route path = "/schedule" element = {<SchedulePage/>} />
                <Route path = "/employees" element = {<EmployeesPage/>} />
                <Route path = "/fresh-produce" element = {<FreshProducePage/>} />
                <Route path = "/settings" element = {<SettingsPage/>} />
                <Route path = "/login" element = {<LoginPage/>} />
                <Route path = "/sign-up" element = {<SignUpPage/>} />
                <Route path = "/" element = {<HomePage/>} />
            </Routes>
        </div>
        </Router>
    )

    // useEffect(
    //     ()=>{
    //         fetch('/user/user/1')
    //         .then(response => response.json())
    //         .then(data =>{ console.log(data)
    //             setMessage(data.email)
    //         })
    //         .catch(err => console.log(err))
    //     },[]
    // )

    // const [message, setMessage] = useState('')
    // return (
    //     <div className = "app">
    //         <h1>{message}</h1>
    //     </div>
    // )
}

ReactDOM.render(<App/>, document.getElementById('root'));