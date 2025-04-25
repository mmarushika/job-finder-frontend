import "./NavBar.css";

import logo from "../../assets/job-finder-logo.png";

import { Link } from 'react-router';

function NavBar({user, logout}) {
    return (
        <div className="nav-bar">
            <div className="nav-bar-header-wrapper">
                <div className="nav-bar-logo-wrapper">
                    <img className="nav-bar-log contain-fit" src={logo}></img>
                </div>
                <div className="nav-bar-header">Job Finder</div>
            </div>
            {
                user.isAuthenticated ? 
                <div className="navigation-wrapper">
                    <Link to="/profile" className="navigation">Profile</Link>
                    <div className="navigation" onClick={logout}>Logout</div>
                </div>
                : <></>
            }
        </div>
    )
}

export default NavBar;