import "./NavBar.css";

import logo from "../../assets/job-finder-logo.png";

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-bar-header-wrapper">
                <div className="nav-bar-logo-wrapper">
                    <img className="nav-bar-log contain-fit" src={logo}></img>
                </div>
                <div className="nav-bar-header">Job Finder</div>
            </div>
            <div className="navigation-wrapper">
                <div className="navigation">Profile</div>
                <div className="navigation">Logout</div>
            </div>
        </div>
    )
}

export default NavBar;