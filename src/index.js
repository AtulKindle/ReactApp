import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './components/signup/Signup';
import Login from './components/forms/Login';
import Home from './pages/Home';
import Main from './pages/Main';


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}> </Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="*" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
reportWebVitals();
