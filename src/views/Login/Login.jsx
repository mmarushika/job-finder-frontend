import "./Login.css";

import logo from "../../assets/job-finder-logo.png";

import { useState } from 'react';
import { Link } from 'react-router';

function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    
    return (
        <div className="login">
            <div className="login-header">
                <div className="nav-bar-logo-wrapper">
                    <img className="nav-bar-log contain-fit" src={logo}></img>
                </div>
                <div className="nav-bar-header">Job Finder</div>
            </div>
            <div className="login-field">
                <div className="login-field-wrapper">
                    <input className="login-input-field" name="username" type="text" placeholder="Username" onChange={(e) => {
                        setUsername(e.target.value);
                    }}></input><br></br>
                    <input className="login-input-field" name="username" type="password" placeholder="Password" onChange={(e) => {
                        setPassword(e.target.value);
                    }}></input><br></br>
                    <br></br>
                    <button className="login-button" onClick={() => { authenticate(username, password) }}>Login</button><br></br>
                    <div>- OR -</div>
                    <Link className="signup-link" to="/signup" >Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;