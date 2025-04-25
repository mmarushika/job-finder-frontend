import "./JobListing.css";

function JobListing({data}) {
    console.log(data);
    return (
        <div className="login">
            <div className="login-header">
                <div className="nav-bar-logo-wrapper">
                    <img className="nav-bar-log contain-fit" src={logo}></img>
                </div>
                <div className="nav-bar-header">Job Finder</div>
            </div>
            <div className="login-field">
                <form className="login-field-wrapper" action={test}>
                    <input className="login-input-field" name="username" type="text" placeholder="Username"></input><br></br>
                    <input className="login-input-field" name="password" type="password" placeholder="Password"></input><br></br>
                    <br></br>
                    <button className="login-button">Sign Up </button><br></br>
                    <div>- OR -</div>
                    <Link className="signup-link" to="/signup" >Log In</Link>
                </form>
            </div>
        </div>
    )
}

export default JobListing;