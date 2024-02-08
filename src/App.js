import './App.css';
import React, { useState, useEffect } from "react";
import Home from './components/Home/Home';
import NavBar from './components/navbar/navbar';
import Project from './components/Project/project';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div className="MainApp">
      <Router>
        <div className="App">
         <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
