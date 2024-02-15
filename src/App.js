import './App.css';
import React, { useState, useEffect } from "react";
import Home from './components/Home/Home';
import NavBar from './components/navbar/navbar';
import Project from './components/Project/project';
import SingleProjectPage  from './components/SingleProjectPage/SingleProjectPage';
import WorkExperience from './components/WorkExperience/WorkExperience';
import SkillsPage from './components/Skill/skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Paths } from './portfolio';
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
            <Route path={Paths.home} element={<Home />} />
            <Route path={Paths.projectPage} element={<Project />} />
            <Route path={Paths.singleProjectPage} element={<SingleProjectPage />} />
            <Route path={Paths.workExperience} element={<WorkExperience />} />
            <Route path={Paths.skills} element={<SkillsPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
