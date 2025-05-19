import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MoreProjects from './components/Projects/MoreProjects';
import ProjectDetails from './components/Projects/ProjectDetails';
import NotFound from './components/NotFound/NotFound';
import './App.css';
import './styles/global.css';
function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-projects" element={<MoreProjects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;