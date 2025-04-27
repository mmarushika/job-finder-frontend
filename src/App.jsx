import './App.css'

import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router';

import entryRoutes from './routes/entryRoutes';

import NavBar from './components/NavBar/NavBar';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import Home from './views/Home/Home';
import UserJobListings from './views/UserJobListings/UserJobListings';
import Profile from './views/Profile/Profile';

import { get, post } from './services/fetchServices';

const PrivateRoute = ({ isAuthenticated, view }) => {
  return isAuthenticated ? view : <Navigate to="/login" />
};

function App() {
  const [user, setUser] = useState({ isAuthenticated: false, username: null });
  const navigate = useNavigate();
  const location = useLocation();

  function login(formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    get(`http://localhost:8000/login?username=${username}&password=${password}`)
      .then((res) => {
        console.log(res);
        if (res.isAuthenticated == true) {
          setUser({ isAuthenticated: true, username: username });
          navigate("/home");
        } else {
          navigate("/login");
        }
      })
  }
  function signup(formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const user = {
      username: username,
      password: password
    }
    console.log(username, password);
    post(`http://localhost:8000/signup`, user)
      .then(setUser({ isAuthenticated: true, username: user.username }))
      .then(navigate("/profile"));
  }

  function logout() {
    setUser({ isAuthenticated: false, username: null })
  }
  return (
    <div>
      {user.isAuthenticated ? <NavBar isAuthenticated={user.isAuthenticated} logout={logout}/> : <></>}
      <Routes>
        <Route path="/" element= {<Navigate to={"/login"} />} />
        <Route path="/login" element={user.isAuthenticated ? <Navigate to={"/home"} /> : <Login login={login} />} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/home"
          element={<PrivateRoute isAuthenticated={user.isAuthenticated}
            view={<Home user={user.username} />} />}></Route>
        <Route path="/jobs"
          element={<PrivateRoute isAuthenticated={user.isAuthenticated}
            view={<UserJobListings user={user.username} />} />}></Route>
        <Route path="/profile"
          element={<PrivateRoute isAuthenticated={user.isAuthenticated}
            view={<Profile username={user.username} mode="edit"/>} />}></Route>
      </Routes>

    </div>
  )
}

export default App;

/* 
<Route path="/home"
          element={<PrivateRoute isAuthenticated={user.isAuthenticated}
            view={<Home user={user.username} />} />}></Route>*/

// Exporting Routes
// https://stackoverflow.com/questions/43026690/declaring-react-routes-in-a-separate-file-and-importing