import "./Login.css";

import logo from "../../assets/job-finder-logo.png";

import { useState } from 'react';
import { Link } from 'react-router';

function Login({login}) {
    return (
        <div className="login">
            <div className="login-header">
                <div className="nav-bar-logo-wrapper">
                    <img className="nav-bar-log contain-fit" src={logo}></img>
                </div>
                <div className="nav-bar-header">Job Finder</div>
            </div>
            <div className="login-field">
                <form className="login-field-wrapper" action={login}>
                    <input name="username" type="text" placeholder="Username"></input><br></br>
                    <input name="password" type="password" placeholder="Password"></input><br></br>
                    <br></br>
                    <button className="large-button">Log In</button><br></br>
                    <div>- OR -</div>
                    <Link className="link" to="/signup" >Sign Up</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
/*
<input className="login-input-field" name="username" type="text" placeholder="Username" onChange={(e) => {
                        setUsername(e.target.value);
                    }}></input><br></br>
                    <input className="login-input-field" name="username" type="password" placeholder="Password" onChange={(e) => {
                        setPassword(e.target.value);
                    }}></input><br></br>
<button className="login-button" onClick={() => { authenticate(username, password) }}>Login</button><br></br>
*/