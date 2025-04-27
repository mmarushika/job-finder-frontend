import "./NavBar.css";

import logo from "../../assets/job-finder-logo.png";

import { useNavigate } from 'react-router';

function NavBar({isAuthenticated, logout}) {
    const navigate = useNavigate();
    return (
        <div className="nav-bar">
            <div className="nav-bar-header-wrapper">
                <div className="nav-bar-logo-wrapper">
                    <img className="nav-bar-log contain-fit" src={logo}></img>
                </div>
                <div className="nav-bar-header">Job Finder</div>
            </div>
            {
                isAuthenticated ? 
                <div className="navigation-wrapper">
                    <div className="navigation" onClick={() => navigate("/home")}>Home</div>
                    <div className="navigation" onClick={() => navigate("/jobs")}>Post</div>
                    <div className="navigation" onClick={() => navigate("/profile")}>Profile</div>
                    <div className="navigation" onClick={logout}>Logout</div>
                </div>
                : <></>
            }
        </div>
    )
}

export default NavBar;