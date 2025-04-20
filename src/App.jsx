import './App.css'

import { useState } from 'react'
import { Routes, Route } from 'react-router';

import entryRoutes from './routes/entryRoutes';

import NavBar from './components/NavBar/NavBar';
import Login from './views/Login/Login';

function App() {

  return (
    <div>
     <Routes>
         <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile/setup" element={<Login />}></Route>
        <Route path="/profile/setup" element={<Login />}></Route>
     </Routes>
    </div>
  )
}

export default App;


// Exporting Routes
// https://stackoverflow.com/questions/43026690/declaring-react-routes-in-a-separate-file-and-importing