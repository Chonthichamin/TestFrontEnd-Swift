import React, { useEffect , MouseEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import HomePage from './components/HomePage';
import MnageWeb from './components/MnageWeb';
import FormPage from './components/FormPage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MnageWeb" element={<MnageWeb />} />
          <Route path="/FormPage" element={<FormPage />} />
        </Routes>
      </Router>

    </div>
   
  
  );
}

export default App;
