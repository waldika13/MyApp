import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/login";
import Register from "./components/Register";
import Navbar from "./components/navbar";
import Dashboard from "./components/Dashboard";
import Artikel from "./components/Artikel";
import AddArtikel from "./components/AddArtikel";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/" element={<><Navbar/><Artikel/></>}/>
        <Route exact path="/dashboard" element={<><Navbar/><Dashboard/></>}/>
        <Route exact path="/tambah_artikel" element={<><Navbar/><AddArtikel/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
