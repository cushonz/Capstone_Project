import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Components/Sidebar';
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
import RolesPage from './Components/Roles'

const App=()=> {

    return (
        <Router>
        <div className = "App">
            <div class="row" id="main-container">
                <div class="col-md-2">
                   <Sidebar/>
                </div>
                <div class="col-md-10">
                    <Routes>
                        <Route path = "/schedule" element = {<SchedulePage/>} />
                        <Route path = "/employees" element = {<EmployeesPage/>} />
                        <Route path = "/fresh-produce" element = {<FreshProducePage/>} />
                        <Route path = "/settings" element = {<SettingsPage/>} />
                        <Route path = "/login" element = {<LoginPage/>} />
                        <Route path = "/sign-up" element = {<SignUpPage/>} />
                        <Route path = "/roles" element = {<RolesPage/>} />
                        <Route path = "/" element = {<HomePage/>} />
                    </Routes>
                </div>
            </div>
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